"use client";

import { useEffect, useState } from "react";
import { profile, stats } from "@/lib/content";
import { useReducedMotion } from "@/components/shared/hooks";

// Each line is a list of [tokenType, text]. Typed out once on load.
const CODE = [
    [["c", "// hussein.ts"]],
    [["k", "const "], ["v", "hussein"], ["p", " = {"]],
    [["p", "  "], ["prop", "role"], ["p", ": "], ["s", '"Mobile and web developer"'], ["p", ","]],
    [["p", "  "], ["prop", "location"], ["p", ": "], ["s", `"${profile.location}"`], ["p", ","]],
    [["p", "  "], ["prop", "studied"], ["p", ": "], ["s", '"Biotechnology"'], ["p", ","]],
    [["p", "  "], ["prop", "builds"], ["p", ": ["], ["s", '"Android"'], ["p", ", "], ["s", '"Flutter"'], ["p", ", "], ["s", '"Web"'], ["p", ", "], ["s", '"APIs"'], ["p", "],"]],
    [["p", "  "], ["prop", "openSourceLibs"], ["p", ": "], ["n", "12"], ["p", ", "], ["c", "// and counting"]],
    [["p", "  "], ["prop", "available"], ["p", ": "], ["k", String(profile.available)], ["p", ","]],
    [["p", "};"]],
    [],
    [["v", "hussein"], ["p", "."], ["f", "say"], ["p", "("], ["s", '"I studied cells. Now I build apps."'], ["p", ");"]],
];
const TOTAL = CODE.reduce((n, line) => n + line.reduce((m, [, t]) => m + t.length, 0) + 1, 0);

export default function CodeHero() {
    const reduced = useReducedMotion();
    const [typed, setTyped] = useState(0);
    const done = reduced || typed >= TOTAL;

    useEffect(() => {
        if (reduced) return;
        let raf;
        let last = 0;
        const step = (t) => {
            if (t - last > 16) {
                last = t;
                setTyped((n) => Math.min(n + 3, TOTAL));
            }
            raf = requestAnimationFrame(step);
        };
        const start = setTimeout(() => (raf = requestAnimationFrame(step)), 350);
        return () => {
            clearTimeout(start);
            cancelAnimationFrame(raf);
        };
    }, [reduced]);

    // walk the code, cutting it off at `typed` characters
    let left = done ? Infinity : typed;
    let caretLine = -1;
    const lines = CODE.map((line, li) => {
        const out = [];
        for (const [type, text] of line) {
            if (left <= 0) break;
            const part = text.slice(0, left);
            left -= part.length;
            out.push(
                <span key={out.length} className={`tk-${type}`}>
                    {part}
                </span>
            );
        }
        if (left > 0) left -= 1;
        else if (caretLine === -1) caretLine = li;
        return out;
    });
    if (caretLine === -1) caretLine = CODE.length - 1;

    return (
        <div className="code-hero">
            <div className="code" aria-hidden="true">
                <div className="code__bar">
                    <span className="ficon ficon--ts" /> hussein.ts
                </div>
                <pre className="code__body">
                    {CODE.map((_, i) => (
                        <div className="code__line" key={i}>
                            <span className="code__ln">{i + 1}</span>
                            <code>
                                {lines[i]}
                                {i === caretLine && <span className="caret" />}
                            </code>
                        </div>
                    ))}
                </pre>
            </div>

            <div className={`term ${done ? "is-done" : ""}`}>
                <div className="term__bar">
                    <span>Terminal</span>
                    <span className="term__tab">bash</span>
                </div>
                <div className="term__body">
                    <p>
                        <span className="tk-f">$</span> npm run stats
                    </p>
                    {stats.map((s, i) => (
                        <p key={s.label} className="term__out" style={{ "--d": `${i * 0.12}s` }}>
                            <span className="tk-s">✓</span> {s.label.toLowerCase()} <b className="tk-n">{s.value}</b>
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}
