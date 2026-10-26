"use client";

import { useCallback, useEffect, useState } from "react";

const KEY = "theme";

// Runs before React hydrates, so the page never flashes the wrong theme.
const script = `(function(){try{var t=localStorage.getItem('${KEY}');if(t!=='light'&&t!=='dark'){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme='dark'}})()`;

export function ThemeScript() {
    return <script dangerouslySetInnerHTML={{ __html: script }} />;
}

export function useTheme() {
    const [theme, setThemeState] = useState(null);

    useEffect(() => {
        setThemeState(document.documentElement.dataset.theme || "dark");
    }, []);

    const setTheme = useCallback((next) => {
        const apply = () => {
            document.documentElement.dataset.theme = next;
            setThemeState(next);
        };
        try {
            localStorage.setItem(KEY, next);
        } catch {}
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        // Cross-fade the whole page where the browser supports it.
        if (document.startViewTransition && !reduce) document.startViewTransition(apply);
        else apply();
    }, []);

    const toggle = useCallback(() => {
        setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
    }, [setTheme]);

    return { theme, setTheme, toggle };
}
