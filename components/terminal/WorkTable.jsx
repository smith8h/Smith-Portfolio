"use client";

import Link from "next/link";
import Icon from "@/components/shared/Icon";
import { useProjectFilter } from "@/components/shared/hooks";
import { categories } from "@/lib/content";

export default function WorkTable() {
    const { category, setCategory, query, setQuery, items, counts } = useProjectFilter();

    return (
        <>
            <div className="wt__tools">
                <label className="grep">
                    <span className="tk-k" aria-hidden="true">
                        grep
                    </span>
                    <span className="sr-only">Search projects</span>
                    <input type="search" placeholder="search projects…" value={query} onChange={(e) => setQuery(e.target.value)} />
                    <span className="grep__count">{items.length} results</span>
                </label>
                <div className="seg" role="group" aria-label="Filter by platform">
                    {categories.map((c) => (
                        <button key={c} type="button" aria-pressed={category === c} onClick={() => setCategory(c)}>
                            {c} <span>{counts[c] || 0}</span>
                        </button>
                    ))}
                </div>
            </div>
            {items.length === 0 ? (
                <p className="wt__empty">
                    <span className="tk-err">0 results</span> for “{query}”.{" "}
                    <button
                        type="button"
                        className="ulink"
                        onClick={() => {
                            setQuery("");
                            setCategory("All");
                        }}
                    >
                        Clear the search
                    </button>
                </p>
            ) : (
                <div className="wt" role="table" aria-label="Projects">
                    <div className="wt__row wt__head" role="row">
                        <span role="columnheader">Name</span>
                        <span role="columnheader">Type</span>
                        <span role="columnheader">Platform</span>
                        <span role="columnheader">Open</span>
                    </div>
                    {items.map((p) => (
                        <div className="wt__row" role="row" key={p.id}>
                            <span role="cell" className="wt__name">
                                <img src={p.image} alt="" width={28} height={28} loading="lazy" />
                                <span>
                                    <a href={p.link} target="_blank" rel="noopener noreferrer">
                                        {p.title}
                                    </a>
                                    <small>{p.summary}</small>
                                </span>
                            </span>
                            <span role="cell" className="tk-k">
                                {p.kind}
                            </span>
                            <span role="cell" className="tk-prop">
                                {p.category === "Apps" ? "Android" : p.category}
                            </span>
                            <span role="cell" className="wt__links">
                                <a href={p.link} target="_blank" rel="noopener noreferrer">
                                    {p.linkLabel || "GitHub"} <Icon name="arrowUpRight" size={14} />
                                </a>
                                {p.privacyPolicy && <Link href={p.privacyPolicy}>Privacy</Link>}
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}
