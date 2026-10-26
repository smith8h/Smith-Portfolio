import Link from "next/link";
import policy from "./policy.json";
import "@/styles/policy.css";
import "./privacy-policy.css";

export const metadata = {
    title: "SWallet Privacy Policy | Hussein Shakir",
    description: "Privacy policy for the SWallet credit and debit card application.",
};

export default function SWalletPrivacyPolicy() {
    return (
        <div className="policy-page">
            <main className="policy container section">
                <nav className="policy__nav" aria-label="Privacy policy navigation">
                    <Link href="/work">Back to my work</Link>
                    <a href="https://play.google.com/store/apps/details?id=smith.app.swallet" target="_blank" rel="noopener noreferrer">
                        SWallet on Google Play
                    </a>
                </nav>
                <p className="section__subtitle">SWallet: credit and debit cards</p>
                <article className="policy__content" dangerouslySetInnerHTML={{ __html: policy }} />
            </main>
        </div>
    );
}
