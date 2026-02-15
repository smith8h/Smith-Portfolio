import "./globals.css";
import Script from "next/script";

export const metadata = {
    title: "Hussein Shakir — Developer Portfolio",
    description: "From Biotechnology to Code — Mobile App & Web Front-End Developer crafting digital experiences with passion.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.5.5/css/simple-line-icons.min.css"
                />
                <link rel="icon" href="/assets/logo.png" />
            </head>
            <body>
                {children}
                <Script
                    src="https://kit.fontawesome.com/4730127eed.js"
                    crossOrigin="anonymous"
                    strategy="afterInteractive"
                />
            </body>
        </html>
    );
}
