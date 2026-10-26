// Server-only: reads the latest posts from the channel's public web preview (https://t.me/s/<channel>).
// No API keys needed, but the channel must be public. This page is unofficial, so the parsing
// fails soft: on any error it returns null and the home page shows the static posts instead.

export const CHANNEL = process.env.TG_CHANNEL || "smithdev";

const decode = (s) =>
    s
        .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
        .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
        .replace(/&quot;/g, '"')
        .replace(/&#39;|&apos;/g, "'")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&nbsp;/g, " ")
        .replace(/&amp;/g, "&");

const toText = (html) => decode(html.replace(/<br\s*\/?>/gi, "\n").replace(/<[^>]+>/g, ""));

const firstLine = (text) => {
    const line = text.split("\n").map((l) => l.trim()).find(Boolean) || "";
    return line.length > 90 ? line.slice(0, 87).trimEnd() + "..." : line;
};

// "#flutter new release" -> "flutter"
const tagOf = (text) => text.match(/#([\p{L}\d_]+)/u)?.[1]?.toLowerCase() || null;

function parse(html) {
    return html
        .split('class="tgme_widget_message_wrap')
        .slice(1)
        .map((block) => {
            const id = block.match(/data-post="[^"/]+\/(\d+)"/)?.[1];
            const body = block.match(/class="tgme_widget_message_text js-message_text"[^>]*>([\s\S]*?)<\/div>/)?.[1];
            const date = block.match(/<time datetime="([^"]+)"/)?.[1];
            if (!id || !body || !date) return null; // media-only posts have no text

            const text = toText(body);
            const title = firstLine(text);
            if (!title) return null;

            return {
                id: Number(id),
                title,
                tag: tagOf(text),
                date: date.slice(0, 10),
                link: `https://t.me/${CHANNEL}/${id}`,
            };
        })
        .filter(Boolean)
        .sort((a, b) => b.id - a.id); // the page lists oldest first
}

export async function getLatestPosts(limit = 5) {
    try {
        const res = await fetch(`https://t.me/s/${CHANNEL}`, {
            headers: { "User-Agent": "Mozilla/5.0 (portfolio posts preview)" },
            signal: AbortSignal.timeout(10000),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const posts = parse(await res.text()).slice(0, limit);
        return posts.length ? posts : null;
    } catch (err) {
        console.error("Telegram posts:", err.message);
        return null;
    }
}
