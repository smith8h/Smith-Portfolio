import "./globals.css";

export const metadata = {
    title: "Hussein Shakir | Software Engineer",
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
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
                <link rel="icon" href="/assets/logo.png" />
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}
