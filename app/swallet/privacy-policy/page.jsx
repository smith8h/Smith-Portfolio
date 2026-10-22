import Link from "next/link";
import policy from "./policy.json";
import "./privacy-policy.css";

export const metadata = {
    title: "SWallet Privacy Policy | Smith",
    description: "Privacy policy for the SWallet credit and debit card application.",
};

export default function SWalletPrivacyPolicy() {
    return (
        <main className="policy container section">
            <nav className="policy__nav" aria-label="Privacy policy navigation">
                <Link href="/#portfolio">? Back to my apps</Link>
                <a href="https://play.google.com/store/apps/details?id=smith.app.swallet" target="_blank" rel="noopener noreferrer">SWallet on Google Play ?</a>
            </nav>
            <p className="section__subtitle">SWallet ? Credit/Debit cards</p>
            <article className="policy__content" dangerouslySetInnerHTML={{ __html: policy }} />
        </main>
    );
}
