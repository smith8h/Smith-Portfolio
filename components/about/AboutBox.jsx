const AboutBox = () => {
    return (
        <div className="about__boxes grid reveal">
            <div className="about__box">
                <i className="about__icon icon-fire"></i>
                <div>
                    <h3 className="about__title">28+</h3>
                    <span className="about__subtitle">Projects Completed</span>
                </div>
            </div>
            <div className="about__box">
                <i className="about__icon icon-cup"></i>
                <div>
                    <h3 className="about__title">∞</h3>
                    <span className="about__subtitle">Cups of Tea</span>
                </div>
            </div>
            <div className="about__box">
                <i className="about__icon icon-people"></i>
                <div>
                    <h3 className="about__title">7+</h3>
                    <span className="about__subtitle">Happy Clients</span>
                </div>
            </div>
            <div className="about__box">
                <i className="about__icon icon-badge"></i>
                <div>
                    <h3 className="about__title">12+</h3>
                    <span className="about__subtitle">Open Source Libs</span>
                </div>
            </div>
        </div>
    );
};

export default AboutBox;
