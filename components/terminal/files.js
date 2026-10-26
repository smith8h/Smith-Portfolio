// The "files" in the explorer map to real routes.
export const files = [
    { href: "/", name: "home.tsx", lang: "tsx", label: "Home" },
    { href: "/work", name: "work.tsx", lang: "tsx", label: "Work" },
    { href: "/about", name: "about.md", lang: "md", label: "About" },
];

export const fileFor = (pathname) => files.find((f) => f.href === pathname) || files[0];
