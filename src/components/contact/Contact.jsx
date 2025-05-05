import React from "react";
import "./contact.css";

const Contact = () => {
    let name = '';
    let email = '';
    let subject = '';
    let message = '';

    return (
        <section className="contact container section" id='contact'>
            <h2 className="section__title">Get In Touch</h2>

            <div className="contact__container grid">
                <div className="contact__info">
                    <h3 className="contact__title">Let's talk about everything!</h3>
                    <p className="contact__details">Don't like forms? Send me an email 🫡</p>
                </div>
                <form action="" className="contact__form">
                    <div className="contact__form-group">
                        <div className="contact__form-div">
                            <input type="text" className="contact__form-input"
                                placeholder="Insert your name"
                                onChange={(text) => name = text.target.value} />
                        </div>
                        <div className="contact__form-div">
                            <input type="email" className="contact__form-input"
                                placeholder="Insert your email"
                                onChange={(text) => email = text.target.value} />
                        </div>
                    </div>
                    <div className="contact__form-div">
                        <input type="text" className="contact__form-input"
                            placeholder="Insert your subject"
                            onChange={(text) => subject = text.target.value} />
                    </div>
                    <div className="contact__form-div contact__form-area">
                        <textarea name="" id="" cols="30" rows="10"
                            className="contact__form-input"
                            placeholder="Write your message"
                            onChange={(text) => message = text.target.value} />
                    </div>
                    <button className="btn"
                        onClick={() => {
                            const mail = `mailto:panolounisba2016@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Dear ${name},\n\n${message}\n\nSender ${email}`)}`;
                            window.location.href = mail;
                        }}>Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
