"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { projects } from "@/lib/content";

/** Sends the contact form to /api/contact. Fields are read from the form by name. */
export function useContactForm() {
    const [status, setStatus] = useState("idle"); // idle | sending | sent | error
    const timer = useRef();

    useEffect(() => () => clearTimeout(timer.current), []);

    const onSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = Object.fromEntries(new FormData(form));
        setStatus("sending");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!res.ok) throw new Error();
            form.reset();
            setStatus("sent");
        } catch {
            setStatus("error");
        }
        clearTimeout(timer.current);
        timer.current = setTimeout(() => setStatus("idle"), 6000);
    };

    return { status, onSubmit };
}

/** Adds `is-in` to every [data-reveal] element once it scrolls into view. */
export function useReveal(deps = []) {
    useEffect(() => {
        const els = document.querySelectorAll("[data-reveal]:not(.is-in)");
        if (!("IntersectionObserver" in window)) {
            els.forEach((el) => el.classList.add("is-in"));
            return;
        }
        const io = new IntersectionObserver(
            (entries) =>
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-in");
                        io.unobserve(entry.target);
                    }
                }),
            { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
        );
        els.forEach((el) => io.observe(el));
        return () => io.disconnect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
}

/** Category filter + text search over all projects. */
export function useProjectFilter() {
    const [category, setCategory] = useState("All");
    const [query, setQuery] = useState("");

    const items = useMemo(() => {
        const q = query.trim().toLowerCase();
        return projects.filter(
            (p) =>
                (category === "All" || p.category === category) &&
                (!q || `${p.title} ${p.kind} ${p.category} ${p.summary}`.toLowerCase().includes(q))
        );
    }, [category, query]);

    const counts = useMemo(() => {
        const c = { All: projects.length };
        projects.forEach((p) => (c[p.category] = (c[p.category] || 0) + 1));
        return c;
    }, []);

    return { category, setCategory, query, setQuery, items, counts };
}

/** True when the user prefers reduced motion. */
export function useReducedMotion() {
    const [reduced, setReduced] = useState(false);
    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        setReduced(mq.matches);
        const on = () => setReduced(mq.matches);
        mq.addEventListener("change", on);
        return () => mq.removeEventListener("change", on);
    }, []);
    return reduced;
}
