import React from "react";
import "./pricing.css";
import Price1 from '../../assets/price-1.svg';
import Price2 from '../../assets/price-2.svg';
import Price3 from '../../assets/price-3.svg';

const Pricing = () => {
    return(
        <section className="pricing container section" id='pricing'>
            <h2 className="section__title">Pricing Plans</h2>
            <div className="pricing__container grid">
                <div className="pricing__item">
                    <img src={Price1} alt="Price 1" className="pricing__img" />
                    <h3 className="pricing__plan">Basic</h3>
                    <p className="pricing__title">A Simple option but powerful to manage your business</p>
                    <p className="pricing__support">Email support</p>
                    <h3 className="price">
                        <em>$</em> 18 <span>/ Month</span>
                    </h3>
                    <a href="#" className="btn">Get Started</a>
                </div>
                <div className="pricing__item best">
                    <span className="recommended">Recommended</span>
                    <img src={Price2} alt="Price 2" className="pricing__img" />
                    <h3 className="pricing__plan">Premium</h3>
                    <p className="pricing__title">Unlimited product including app integration and more features</p>
                    <p className="pricing__support">Mon-Fri support</p>
                    <h3 className="price">
                        <em>$</em> 18 <span>/ Month</span>
                    </h3>
                    <a href="#" className="btn">Get Started</a>
                </div>
                <div className="pricing__item">
                    <img src={Price3} alt="Price 3" className="pricing__img" />
                    <h3 className="pricing__plan">Ultimate</h3>
                    <p className="pricing__title">A wise option for large companies and individuals</p>
                    <p className="pricing__support">24/7 support</p>
                    <h3 className="price">
                        <em>$</em> 18 <span>/ Month</span>
                    </h3>
                    <a href="#" className="btn">Get Started</a>
                </div>
            </div>
        </section>
    );
}

export default Pricing;