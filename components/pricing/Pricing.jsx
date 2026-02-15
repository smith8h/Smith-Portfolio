import "./pricing.css";

const plans = [
    {
        name: "Basic",
        icon: "🚀",
        description: "Simple but powerful — bring your project to life.",
        support: "No maintenance support",
        price: "$500 - 1,500",
        period: "per project",
        features: ["Mobile App or Website", "Clean Code", "Responsive Design", "Source Code"],
        gradient: "var(--gradient-cyan)",
        recommended: false,
    },
    {
        name: "Premium",
        icon: "💎",
        description: "Unlimited possibilities including app integration and more.",
        support: "Semi-maintenance support",
        price: "$1,100 - 5,000",
        period: "per project",
        features: ["Everything in Basic", "App Integration", "API Development", "3 Revisions", "Priority Support"],
        gradient: "var(--gradient-main)",
        recommended: true,
    },
    {
        name: "Ultimate",
        icon: "⚡",
        description: "A wise option for large companies and individuals.",
        support: "24/7 support for 3-7 months",
        price: "$11,000+",
        period: "per project",
        features: ["Everything in Premium", "Unlimited Revisions", "Full Branding", "Deployment", "24/7 Support"],
        gradient: "var(--gradient-warm)",
        recommended: false,
    },
];

const Pricing = () => {
    return (
        <section className="pricing container section" id="pricing">
            <div className="section__header reveal">
                <h2 className="section__title">
                    Pricing <span className="gradient-text">Plans</span>
                </h2>
                <span className="section__subtitle">transparent and fair pricing</span>
            </div>

            <div className="pricing__container grid">
                {plans.map((plan) => (
                    <div className={`pricing__card glass-card reveal ${plan.recommended ? "pricing__card--featured" : ""}`} key={plan.name}>
                        {plan.recommended && <span className="pricing__badge">★ Recommended</span>}
                        <div className="pricing__gradient-line" style={{ background: plan.gradient }}></div>
                        <span className="pricing__icon">{plan.icon}</span>
                        <h3 className="pricing__plan">{plan.name}</h3>
                        <p className="pricing__description">{plan.description}</p>
                        <div className="pricing__price">
                            <span className="pricing__amount gradient-text">{plan.price}</span>
                            <span className="pricing__period">{plan.period}</span>
                        </div>
                        <ul className="pricing__features">
                            {plan.features.map((f) => (
                                <li className="pricing__feature" key={f}>
                                    <i className="icon-check"></i> {f}
                                </li>
                            ))}
                        </ul>
                        <a href="mailto:panolounisba2016@gmail.com" className={`btn ${plan.recommended ? "" : "btn--outline"}`}>
                            Get Started
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Pricing;
