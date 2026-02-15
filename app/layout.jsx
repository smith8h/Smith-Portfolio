import "./globals.css";
import Script from "next/script";

export const metadata = {
    title: "Smith - Portfolio",
    description: "Hussein Shakir's personal portfolio - Mobile App and Web Front-End Developer",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.5.5/css/simple-line-icons.min.css"
                />
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
