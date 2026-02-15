const AboutBox = () => {
    return (
        <div className="about__boxes grid">
            <div className="about__box">
                <i className="about__icon icon-fire"></i>
                <div>
                    <h3 className="about__title">28</h3>
                    <span className="about__subtitle">Project completed</span>
                </div>
            </div>
            <div className="about__box">
                <i className="about__icon icon-cup"></i>
                <div>
                    <h3 className="about__title ">40</h3>
                    <span className="about__subtitle">Cup of tea</span>
                </div>
            </div>
            <div className="about__box">
                <i className="about__icon icon-people"></i>
                <div>
                    <h3 className="about__title">7</h3>
                    <span className="about__subtitle">Stisfied clients</span>
                </div>
            </div>
            <div className="about__box">
                <i className="about__icon icon-badge"></i>
                <div>
                    <h3 className="about__title">12</h3>
                    <span className="about__subtitle">Stisfied clients</span>
                </div>
            </div>
        </div>
    );
};

export default AboutBox;
