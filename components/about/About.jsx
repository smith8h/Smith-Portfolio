import "./about.css";
import AboutBox from "./AboutBox";

const About = () => {
    return (
        <section className="about container section" id="about">
            <div className="section__header reveal">
                <h2 className="section__title">
                    About <span className="gradient-text">Me</span>
                </h2>
                <span className="section__subtitle">the story behind the code</span>
            </div>

            <div className="about__container grid">
                <div className="about__image-col reveal">
                    <div className="about__img-wrapper">
                        <img src="/assets/me.jpg" alt="Hussein Shakir" className="about__img" />
                        <div className="about__img-border"></div>
                    </div>
                    <div className="about__experience-badge">
                        <span className="about__exp-number">5+</span>
                        <span className="about__exp-text">Years of<br />Experience</span>
                    </div>
                </div>

                <div className="about__data reveal">
                    <div className="about__info glass-card">
                        <div className="about__story">
                            <h3 className="about__info-title">
                                <span className="gradient-text--bio">🧬 Biotechnologist</span> turned{" "}
                                <span className="gradient-text">💻 Developer</span>
                            </h3>
                            <p className="about__description">
                                I&apos;m a <b>Mobile App</b> and <b>Front-End</b> Developer who
                                traded microscopes for monitors. My journey from{" "}
                                <b>Biotechnology</b> to <b>Software Engineering</b> gave me a
                                scientist&apos;s precision and a developer&apos;s creativity.
                            </p>
                            <p className="about__description">
                                Ask me about my experience with:
                            </p>
                            <div className="about__tags">
                                <span className="tag">Java</span>
                                <span className="tag">Kotlin</span>
                                <span className="tag">Dart</span>
                                <span className="tag">Python</span>
                                <span className="tag">C#</span>
                                <span className="tag">Flutter</span>
                                <span className="tag">ReactJS</span>
                                <span className="tag">Next.js</span>
                                <span className="tag">Android</span>
                                <span className="tag">ASP.Net</span>
                                <span className="tag">.NET Core API</span>
                            </div>
                            <p className="about__description about__hobby">
                                ❤️ I code for a hobby — I just love programming.
                            </p>
                        </div>
                        <a href="/assets/resume.pdf" className="btn" download>
                            <i className="icon-cloud-download"></i> Download CV
                        </a>
                    </div>

                    <div className="about__skills-wrapper reveal">
                        <h3 className="about__skills-title">
                            <span className="gradient-text">Tech</span> Stack
                        </h3>
                        <div className="about__skills grid">
                            {[
                                { name: "Java", percent: 99, color: "var(--accent-amber)" },
                                { name: "Kotlin", percent: 85, color: "var(--accent-3)" },
                                { name: "Dart / Flutter", percent: 99, color: "var(--accent-cyan)" },
                                { name: "JavaScript / React", percent: 80, color: "var(--accent-1)" },
                                { name: "Python", percent: 65, color: "var(--accent-green)" },
                                { name: ".NET Core API", percent: 75, color: "var(--accent-2)" },
                            ].map((skill) => (
                                <div className="skills__data" key={skill.name}>
                                    <div className="skills__titles">
                                        <h4 className="skills__name">{skill.name}</h4>
                                        <span className="skills__number">{skill.percent}%</span>
                                    </div>
                                    <div className="skills__bar">
                                        <span
                                            className="skills__percentage"
                                            style={{ width: `${skill.percent}%`, background: skill.color }}
                                        ></span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <AboutBox />
        </section>
    );
};

export default About;
