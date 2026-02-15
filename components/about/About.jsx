import "./about.css";
import AboutBox from "./AboutBox";

const About = () => {
    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me</h2>

            <div className="about__container grid">
                <img src="/assets/avatar-1.jpg" alt="My Pic" className="about__img avatar" />
                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            💻 I&apos;m a <b>Mobile App</b> and <b>Front-End</b> Developer working as a freelance wizard.<br />
                            💬 Ask me about my experience with:<br />
                            (Native Android) <b>Java, Kotlin,</b> (Mobile App) <b>Dart, Flutter,</b> (Web) <b>ReactJS</b> or Mobile &amp; Web development in general.<br />
                            ⚡ I can work on your project or create your dream project easily.<br />
                            ❤️ I do Coding for a hobby, I just ❤️ programming.
                        </p>
                        <a href="/assets/hussein-shakir-resume.pdf" className="btn" download>Download CV</a>
                    </div>
                    <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Java</h3>
                                <span className="skills__number">99%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage java"></span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Kotlin</h3>
                                <span className="skills__number">85%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage kotlin"></span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Dart, Flutter</h3>
                                <span className="skills__number">99%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage dart"></span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">JavaScript, ReactJS</h3>
                                <span className="skills__number">80%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage js"></span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Python</h3>
                                <span className="skills__number">50%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage python"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AboutBox />
        </section>
    );
};

export default About;
