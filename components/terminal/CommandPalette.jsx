"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import Icon from "@/components/shared/Icon";
import { profile, projects, socials } from "@/lib/content";

export default function CommandPalette({ open, onClose, toggleTheme }) {
    const router = useRouter();
    const [query, setQuery] = useState("");
    const [index, setIndex] = useState(0);
    const [toast, setToast] = useState("");
    const input = useRef(null);
    const list = useRef(null);
    const lastFocus = useRef(null);

    const commands = useMemo(
        () => [
            { group: "Go to", label: "Home", icon: "file", run: () => router.push("/") },
            { group: "Go to", label: "Work", icon: "file", run: () => router.push("/work") },
            { group: "Go to", label: "About", icon: "file", run: () => router.push("/about") },
            { group: "Go to", label: "Contact form", icon: "send", run: () => router.push("/#contact") },
            { group: "Actions", label: "Toggle light / dark theme", icon: "sun", run: toggleTheme },
            {
                group: "Actions",
                label: "Download résumé",
                icon: "download",
                run: () => {
                    const a = document.createElement("a");
                    a.href = profile.resume;
                    a.download = "";
                    a.click();
                },
            },
            {
                group: "Actions",
                label: "Copy email address",
                icon: "copy",
                keep: true,
                run: async () => {
                    try {
                        await navigator.clipboard.writeText(profile.email);
                        setToast(`Copied ${profile.email}`);
                    } catch {
                        setToast(`Copy failed. The address is ${profile.email}`);
                    }
                },
            },
            ...socials.map((s) => ({
                group: "Links",
                label: `Open ${s.label}`,
                icon: s.id,
                run: () => window.open(s.href, "_blank", "noopener"),
            })),
            ...projects.map((p) => ({
                group: "Projects",
                label: p.title,
                hint: `${p.kind}, ${p.category === "Apps" ? "Android" : p.category}`,
                icon: "arrowUpRight",
                run: () => window.open(p.link, "_blank", "noopener"),
            })),
        ],
        [router, toggleTheme]
    );

    const results = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return commands.filter((c) => c.group !== "Projects").concat(commands.filter((c) => c.group === "Projects").slice(0, 4));
        return commands.filter((c) => `${c.group} ${c.label} ${c.hint || ""}`.toLowerCase().includes(q));
    }, [commands, query]);

    useEffect(() => {
        if (open) {
            lastFocus.current = document.activeElement;
            setQuery("");
            setIndex(0);
            setToast("");
            requestAnimationFrame(() => input.current?.focus());
        } else if (lastFocus.current) {
            lastFocus.current.focus?.();
        }
    }, [open]);

    useEffect(() => setIndex(0), [query]);

    useEffect(() => {
        list.current?.querySelector('[aria-selected="true"]')?.scrollIntoView({ block: "nearest" });
    }, [index]);

    if (!open) return null;

    const run = (c) => {
        c.run();
        if (!c.keep) onClose();
    };

    const onKeyDown = (e) => {
        if (e.key === "Escape") onClose();
        else if (e.key === "ArrowDown") {
            e.preventDefault();
            setIndex((i) => Math.min(i + 1, results.length - 1));
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setIndex((i) => Math.max(i - 1, 0));
        } else if (e.key === "Enter" && results[index]) {
            e.preventDefault();
            run(results[index]);
        } else if (e.key === "Tab") {
            e.preventDefault(); // keep focus in the dialog
        }
    };

    let lastGroup = "";
    return (
        <div className="palette" role="presentation" onMouseDown={onClose}>
            <div
                className="palette__box"
                role="dialog"
                aria-modal="true"
                aria-label="Command palette"
                onMouseDown={(e) => e.stopPropagation()}
                onKeyDown={onKeyDown}
            >
                <div className="palette__input">
                    <span aria-hidden="true">&gt;</span>
                    <input
                        ref={input}
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Type a page, project or action"
                        role="combobox"
                        aria-expanded="true"
                        aria-controls="palette-list"
                        aria-activedescendant={results[index] ? `cmd-${index}` : undefined}
                    />
                    <kbd>Esc</kbd>
                </div>
                <ul className="palette__list" id="palette-list" role="listbox" ref={list}>
                    {results.length === 0 && <li className="palette__empty">No match for “{query}”. Try “work” or a project name.</li>}
                    {results.map((c, i) => {
                        const head = c.group !== lastGroup;
                        lastGroup = c.group;
                        return (
                            <li key={`${c.group}-${c.label}`} role="none">
                                {head && <p className="palette__group">{c.group}</p>}
                                <div
                                    id={`cmd-${i}`}
                                    role="option"
                                    aria-selected={i === index}
                                    className="palette__item"
                                    onMouseMove={() => setIndex(i)}
                                    onClick={() => run(c)}
                                >
                                    <Icon name={c.icon} size={15} />
                                    <span>{c.label}</span>
                                    {c.hint && <span className="palette__hint">{c.hint}</span>}
                                </div>
                            </li>
                        );
                    })}
                </ul>
                <p className="palette__foot" role="status">
                    {toast || (
                        <>
                            <kbd>↑</kbd> <kbd>↓</kbd> to move, <kbd>Enter</kbd> to run
                        </>
                    )}
                </p>
            </div>
        </div>
    );
}
