import React from "react";
import "./home.css"
import Me from '../../assets/avatar-1.jpg'
import HeaderSocials from "./HeaderSocioals";
import ScrollDown from "./ScrollDown";

const Home = () => {
    return (
        <section className="home container" id="home">
            <div className="intro">
                <img src={Me} alt="My Avatar" className="home__img" />

                <h1 className="home__name">Hussein Shakir</h1>

                <span className="homr__education">
                    <b>Biotechnology</b> at the <b>University of Mustansiriyah</b><br />
                    <b>Mobile App</b> and <b>Web Front-End</b> Developer
                </span>
                <HeaderSocials />

                <a href="#contact" className="btn">Hire Me</a>

                <ScrollDown />
            </div>
        </section>
    );
}

export default Home;