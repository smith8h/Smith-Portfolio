"use client";

import { useRef, useState } from "react";
import "./contact.css";

const Contact = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);
    const messageRef = useRef(null);
    const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

    const handleSend = async (e) => {
        e.preventDefault();
        setStatus("sending");

        const data = {
            name: nameRef.current?.value || "",
            email: emailRef.current?.value || "",
            phone: phoneRef.current?.value || "",
            message: messageRef.current?.value || "",
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setStatus("success");
                // Clear form
                nameRef.current.value = "";
                emailRef.current.value = "";
                phoneRef.current.value = "";
                messageRef.current.value = "";
                setTimeout(() => setStatus(null), 4000);
            } else {
                setStatus("error");
                setTimeout(() => setStatus(null), 4000);
            }
        } catch {
            setStatus("error");
            setTimeout(() => setStatus(null), 4000);
        }
    };

    return (
        <section className="contact container section" id="contact">
            <div className="section__header reveal">
                <h2 className="section__title">
                    Get In <span className="gradient-text">Touch</span>
                </h2>
                <span className="section__subtitle">let&apos;s work together</span>
            </div>

            <div className="contact__container grid">
                <div className="contact__info reveal">
                    <h3 className="contact__info-title">
                        Let&apos;s talk about everything!
                    </h3>
                    <p className="contact__info-desc">
                        Don&apos;t like forms? Send me an email directly at{" "}
                        <a href="mailto:husseinshakir81@gmail.com" className="contact__email gradient-text">
                            husseinshakir81@gmail.com
                        </a>
                    </p>

                    <div className="contact__links">
                        <a href="https://t.me/smithdev" target="_blank" rel="noopener noreferrer" className="contact__link-item glass-card">
                            <i className="fa-brands fa-telegram"></i>
                            <div>
                                <span className="contact__link-label">Telegram</span>
                                <span className="contact__link-value">@smithdev</span>
                            </div>
                        </a>
                        <a href="https://github.com/smith8h" target="_blank" rel="noopener noreferrer" className="contact__link-item glass-card">
                            <i className="fa-brands fa-github"></i>
                            <div>
                                <span className="contact__link-label">GitHub</span>
                                <span className="contact__link-value">@smith8h</span>
                            </div>
                        </a>
                    </div>
                </div>

                <form className="contact__form reveal" onSubmit={handleSend}>
                    <div className="contact__form-group">
                        <div className="contact__form-div">
                            <label className="contact__label" htmlFor="name">Name</label>
                            <input type="text" id="name" ref={nameRef} className="contact__form-input" placeholder="Your name" required />
                        </div>
                        <div className="contact__form-div">
                            <label className="contact__label" htmlFor="email">Email</label>
                            <input type="email" id="email" ref={emailRef} className="contact__form-input" placeholder="Your email" required />
                        </div>
                    </div>
                    <div className="contact__form-div">
                        <label className="contact__label" htmlFor="phone">Phone</label>
                        <input type="tel" id="phone" ref={phoneRef} className="contact__form-input" placeholder="Your phone number" required />
                    </div>
                    <div className="contact__form-div">
                        <label className="contact__label" htmlFor="message">Message (optional)</label>
                        <textarea id="message" ref={messageRef} className="contact__form-input contact__form-textarea" placeholder="Write your message..." rows="5" />
                    </div>

                    <button type="submit" className="btn" disabled={status === "sending"}>
                        {status === "sending" ? (
                            <><i className="icon-refresh"></i> Sending...</>
                        ) : (
                            <><i className="icon-paper-plane"></i> Send Message</>
                        )}
                    </button>

                    {status === "success" && (
                        <p className="contact__status contact__status--success">
                            ✅ Message sent successfully!
                        </p>
                    )}
                    {status === "error" && (
                        <p className="contact__status contact__status--error">
                            ❌ Failed to send. Please try again.
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
};

export default Contact;
