import "./pricing.css";

const Pricing = () => {
    return (
        <section className="pricing container section" id="pricing">
            <h2 className="section__title">Pricing Plans</h2>
            <div className="pricing__container grid">
                <div className="pricing__item">
                    <img src="/assets/price-1.svg" alt="Price 1" className="pricing__img" />
                    <h3 className="pricing__plan">Basic Projects</h3>
                    <p className="pricing__title">A Simple option but powerful to bring your project to life</p>
                    <p className="pricing__support">No-Maintenance support</p>
                    <h3 className="price">
                        <em>$</em>200 - 400<span>Project</span>
                    </h3>
                    <a href="mailto:panolounisba2016@gmail.com" className="btn">Get Started</a>
                </div>
                <div className="pricing__item best">
                    <span className="recommended">Recommended</span>
                    <img src="/assets/price-2.svg" alt="Price 2" className="pricing__img" />
                    <h3 className="pricing__plan">Premium Works</h3>
                    <p className="pricing__title">Unlimited product including app integration and more features (Helpfull for graduation projects)</p>
                    <p className="pricing__support">Semi-Maintenance support</p>
                    <h3 className="price">
                        <em>$</em>400 - 3,100<span>Project</span>
                    </h3>
                    <a href="mailto:panolounisba2016@gmail.com" className="btn">Get Started</a>
                </div>
                <div className="pricing__item">
                    <img src="/assets/price-3.svg" alt="Price 3" className="pricing__img" />
                    <h3 className="pricing__plan">Ultimate Projects</h3>
                    <p className="pricing__title">A wise option for large companies and individuals</p>
                    <p className="pricing__support">24/7 support for the first 3-7 months</p>
                    <h3 className="price">
                        <em>$</em>3,000 - 11,000<span>Projects</span>
                    </h3>
                    <a href="mailto:panolounisba2016@gmail.com" className="btn">Get Started</a>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
