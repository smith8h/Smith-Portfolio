"use client";

import { useContactForm } from "@/components/shared/hooks";
import { profile } from "@/lib/content";

export default function Contact() {
    const { status, onSubmit } = useContactForm();

    return (
        <section className="sec" id="contact" aria-labelledby="contact-title">
            <h2 id="contact-title" className="sec__title">
                <span className="tk-c">#</span> Contact
            </h2>
            <p className="sec__lede">
                Tell me about the app or site you have in mind. I reply within a day or two. Prefer email? Write to{" "}
                <a className="ulink" href={`mailto:${profile.email}`}>
                    {profile.email}
                </a>
                .
            </p>
            <form className="shell" onSubmit={onSubmit}>
                <div className="shell__bar">
                    <span>contact.sh</span>
                </div>
                <div className="shell__body">
                    <label className="prompt">
                        <span className="prompt__ps">
                            <span className="tk-f">?</span> name
                        </span>
                        <input name="name" autoComplete="name" required placeholder="Your name" />
                    </label>
                    <label className="prompt">
                        <span className="prompt__ps">
                            <span className="tk-f">?</span> email
                        </span>
                        <input name="email" type="email" autoComplete="email" required placeholder="you@example.com" />
                    </label>
                    <label className="prompt">
                        <span className="prompt__ps">
                            <span className="tk-f">?</span> phone
                        </span>
                        <input name="phone" type="tel" autoComplete="tel" required placeholder="+964 …" />
                    </label>
                    <label className="prompt prompt--area">
                        <span className="prompt__ps">
                            <span className="tk-f">?</span> message <span className="tk-c">(optional)</span>
                        </span>
                        <textarea name="message" rows={4} placeholder="What are you building?" />
                    </label>
                    <div className="shell__run">
                        <button type="submit" className="btn btn--run" disabled={status === "sending"}>
                            {status === "sending" ? "Sending…" : "Send message"} <kbd>Enter</kbd>
                        </button>
                        <p role="status" aria-live="polite" className="shell__out">
                            {status === "sent" && <span className="tk-s">✓ Message sent. I&apos;ll get back to you soon.</span>}
                            {status === "error" && (
                                <span className="tk-err">✗ The message didn&apos;t send. Check your connection or email me directly.</span>
                            )}
                        </p>
                    </div>
                </div>
            </form>
        </section>
    );
}
