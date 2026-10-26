"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Icon from "@/components/shared/Icon";
import { useTheme } from "@/components/shared/theme";
import { profile, socials } from "@/lib/content";
import CommandPalette from "./CommandPalette";
import { fileFor, files } from "./files";

function FileIcon({ lang }) {
    return <span className={`ficon ficon--${lang}`} aria-hidden="true" />;
}

export default function Shell({ children }) {
    const pathname = usePathname();
    const { theme, toggle } = useTheme();
    const [palette, setPalette] = useState(false);
    const [drawer, setDrawer] = useState(false);
    const [progress, setProgress] = useState(0);
    const current = fileFor(pathname);

    useEffect(() => setDrawer(false), [pathname]);

    // Ctrl/Cmd + K opens the palette from anywhere
    useEffect(() => {
        const onKey = (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
                e.preventDefault();
                setPalette((o) => !o);
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    // scroll position shown as "Ln" in the status bar
    useEffect(() => {
        const on = () => {
            const max = document.documentElement.scrollHeight - window.innerHeight;
            setProgress(max > 0 ? Math.round((window.scrollY / max) * 100) : 0);
        };
        on();
        window.addEventListener("scroll", on, { passive: true });
        return () => window.removeEventListener("scroll", on);
    }, [pathname]);

    return (
        <div className="ide">
            <a className="skip" href="#main">
                Skip to content
            </a>

            <header className="titlebar">
                <button
                    type="button"
                    className="titlebar__burger"
                    onClick={() => setDrawer((d) => !d)}
                    aria-expanded={drawer}
                    aria-controls="explorer"
                    aria-label="Toggle file explorer"
                >
                    <Icon name={drawer ? "close" : "menu"} size={18} />
                </button>
                <span className="titlebar__dots" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                </span>
                <Link href="/" className="titlebar__name">
                    hussein<span>.dev</span>
                </Link>
                <button type="button" className="titlebar__search" onClick={() => setPalette(true)}>
                    <Icon name="search" size={15} />
                    <span>Search or run a command</span>
                    <kbd>Ctrl K</kbd>
                </button>
                <button
                    type="button"
                    className="titlebar__icon"
                    onClick={toggle}
                    aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
                >
                    <Icon name={theme === "dark" ? "sun" : "moon"} size={17} />
                </button>
            </header>

            <aside id="explorer" className={`explorer ${drawer ? "is-open" : ""}`} aria-label="Site files">
                <p className="explorer__title">Explorer</p>
                <p className="explorer__folder">portfolio</p>
                <nav aria-label="Main">
                    <ul className="explorer__list">
                        {files.map((f) => (
                            <li key={f.href}>
                                <Link href={f.href} aria-current={pathname === f.href ? "page" : undefined}>
                                    <FileIcon lang={f.lang} /> {f.name}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link href="/#contact">
                                <FileIcon lang="sh" /> contact.sh
                            </Link>
                        </li>
                        <li>
                            <a href={profile.resume} download>
                                <FileIcon lang="pdf" /> resume.pdf
                            </a>
                        </li>
                    </ul>
                </nav>
                <p className="explorer__folder">links</p>
                <ul className="explorer__list">
                    {socials.map((s) => (
                        <li key={s.id}>
                            <a href={s.href} target="_blank" rel="noopener noreferrer">
                                <Icon name={s.id} size={14} /> {s.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <button type="button" className="explorer__palette" onClick={() => setPalette(true)}>
                    Press <kbd>Ctrl K</kbd> to jump anywhere
                </button>
            </aside>
            {drawer && <button type="button" className="scrim" aria-label="Close explorer" onClick={() => setDrawer(false)} />}

            <div className="editor">
                <nav className="tabs" aria-label="Open pages">
                    {files.map((f) => (
                        <Link
                            key={f.href}
                            href={f.href}
                            aria-current={current.href === f.href ? "page" : undefined}
                            className="tab"
                        >
                            <FileIcon lang={f.lang} /> {f.name}
                        </Link>
                    ))}
                </nav>
                <p className="crumbs" aria-hidden="true">
                    portfolio <span>›</span> {current.name}
                </p>
                <main id="main" className="content">
                    {children}
                </main>
                <footer className="footer">
                    <p>
                        © {profile.since}–{new Date().getFullYear()} {profile.name}. Built in Baghdad, Iraq.
                    </p>
                    <p>
                        <a href={`mailto:${profile.email}`}>{profile.email}</a>
                    </p>
                </footer>
            </div>

            <footer className="statusbar" aria-label="Status">
                <span className="statusbar__item">
                    <Icon name="branch" size={13} /> main
                </span>
                <span className="statusbar__item statusbar__avail">
                    <i aria-hidden="true" /> {profile.available ? "Available for work" : "Booked"}
                </span>
                <span className="statusbar__spacer" />
                <span className="statusbar__item statusbar__hide">{profile.location}</span>
                <span className="statusbar__item statusbar__hide">Ln {progress}%</span>
                <span className="statusbar__item statusbar__hide">{current.lang === "md" ? "Markdown" : "TypeScript JSX"}</span>
                <button type="button" className="statusbar__item" onClick={toggle}>
                    {theme === "dark" ? "Dark+" : "Light+"}
                </button>
            </footer>

            <CommandPalette open={palette} onClose={() => setPalette(false)} toggleTheme={toggle} />
        </div>
    );
}
