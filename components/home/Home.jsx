"use client";

import { useEffect, useRef } from "react";
import "./home.css";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";

const roles = [
    "Mobile App Developer",
    "Front-End Developer",
    "Flutter Engineer",
    "Open-Source Creator",
];

const Home = () => {
    const typedRef = useRef(null);

    useEffect(() => {
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let timeout;

        const type = () => {
            const current = roles[roleIndex];
            if (typedRef.current) {
                typedRef.current.textContent = isDeleting
                    ? current.substring(0, charIndex--)
                    : current.substring(0, charIndex++);
            }

            let speed = isDeleting ? 40 : 80;

            if (!isDeleting && charIndex > current.length) {
                speed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex < 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                speed = 500;
            }

            timeout = setTimeout(type, speed);
        };

        type();
        return () => clearTimeout(timeout);
    }, []);

    return (
        <section className="home" id="home">
            <div className="home__bg-shapes">
                <div className="home__orb home__orb--1"></div>
                <div className="home__orb home__orb--2"></div>
                <div className="home__orb home__orb--3"></div>
                <div className="home__grid-lines"></div>
            </div>

            <div className="intro section container">
                <div className="home__badge">
                    <span className="home__badge-dot"></span>
                    Available for freelance
                </div>

                <div className="home__avatar-wrapper">
                    <img src="/assets/avatar.jpg" alt="Hussein Shakir" className="home__img" />
                    <div className="home__avatar-ring"></div>
                </div>

                <h1 className="home__name">
                    Hussein <span className="gradient-text">Shakir</span>
                </h1>

                <div className="home__role">
                    <span className="home__role-prefix">&gt; </span>
                    <span className="home__role-text" ref={typedRef}></span>
                    <span className="home__caret">|</span>
                </div>

                <p className="home__tagline">
                    From <span className="gradient-text--bio">Biotechnology</span> to{" "}
                    <span className="gradient-text">Code</span> — crafting digital
                    experiences with the precision of a scientist and the soul of an
                    artist.
                </p>

                <HeaderSocials />

                <div className="home__actions">
                    <a href="#contact" className="btn">
                        <i className="icon-bubble"></i> Hire Me
                    </a>
                    <a href="/assets/resume.pdf" className="btn btn--outline" download>
                        <i className="icon-cloud-download"></i> Resume
                    </a>
                </div>
            </div>

            <ScrollDown />
        </section>
    );
};

export default Home;
