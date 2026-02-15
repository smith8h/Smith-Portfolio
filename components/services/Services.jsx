import "./services.css";

const data = [
    {
        id: 1,
        icon: "📱",
        title: "Mobile App Development",
        description: "Native Android with Java/Kotlin and cross-platform with Flutter & Dart. From concept to Play Store.",
        tags: ["Java", "Kotlin", "Flutter"],
        gradient: "var(--gradient-main)",
    },
    {
        id: 2,
        icon: "🌐",
        title: "Web Development",
        description: "Modern, responsive web applications with React, Next.js, and beautiful animations.",
        tags: ["React", "Next.js", "JS"],
        gradient: "var(--gradient-cyan)",
    },
    {
        id: 3,
        icon: "⚙️",
        title: "Back-End Development",
        description: "Robust server-side solutions with ASP.NET — APIs, databases, and cloud services.",
        tags: ["C#", "ASP.NET", ".NET Core"],
        gradient: "var(--gradient-warm)",
    },
];

const Services = () => {
    return (
        <section className="services container section" id="services">
            <div className="section__header reveal">
                <h2 className="section__title">
                    What I <span className="gradient-text">Do</span>
                </h2>
                <span className="section__subtitle">services I offer</span>
            </div>

            <div className="services__container grid">
                {data.map(({ id, icon, title, description, tags, gradient }) => (
                    <div className="services__card glass-card reveal" key={id}>
                        <div className="services__gradient-line" style={{ background: gradient }}></div>
                        <span className="services__icon">{icon}</span>
                        <h3 className="services__title">{title}</h3>
                        <p className="services__description">{description}</p>
                        <div className="services__tags">
                            {tags.map((tag) => (
                                <span className="tag" key={tag}>{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
