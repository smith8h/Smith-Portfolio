import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { ThemeScript } from "@/components/shared/theme";
import "./globals.css";

const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-plex-mono", display: "swap" });
const sans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-plex-sans", display: "swap" });

export const metadata = {
    title: "Hussein Shakir · Mobile and web developer",
    description:
        "Biotechnologist turned software engineer. Android, Flutter and front-end web apps, plus a dozen open-source libraries.",
};

export const viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#f6f6f2" },
        { media: "(prefers-color-scheme: dark)", color: "#0d1117" },
    ],
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${mono.variable} ${sans.variable}`} suppressHydrationWarning>
            <head>
                <ThemeScript />
                <link rel="icon" href="/assets/logo.png" />
            </head>
            <body>{children}</body>
        </html>
    );
}
