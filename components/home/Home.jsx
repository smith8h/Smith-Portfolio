import "./home.css";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const Home = () => {
    return (
        <section className="home container" id="home">
            <div className="intro section">
                <img src="/assets/avatar-1.jpg" alt="My Avatar" className="home__img avatar" />

                <h1 className="home__name">Hussein Shakir</h1>

                <span className="homr__education">
                    <b>Biotechnology</b> at the <b>University of Mustansiriyah</b><br />
                    <b>Mobile App</b> and <b>Web Front-End</b> Developer
                </span>
                <HeaderSocials />

                <a href="#contact" className="btn">Hire Me</a>

                <ScrollDown />
            </div>
            <Shapes />
        </section>
    );
};

export default Home;
