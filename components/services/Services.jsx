import "./services.css";

const data = [
    {
        id: 3,
        image: "/assets/service-3.svg",
        title: "Mobile App Development",
        description: "Especially in Java and Kotlin for Native Android, Dart for Mobile App development. I can bring your app to life too!",
    },
    {
        id: 2,
        image: "/assets/service-2.svg",
        title: "Web Development",
        description:
            "With high skills in web development, I can bring your website to life too!.. hahaha!",
    },
    {
        id: 1,
        image: "/assets/service-1.svg",
        title: "UI/UX Design",
        description:
            "I can bring your UI/UX designs to life profissionally.",
    },
];

const Services = () => {
    return (
        <section className="services container section" id="services">
            <h2 className="section__title">Services</h2>

            <div className="services__container grid">
                {data.map(({ id, image, title, description }) => {
                    return (
                        <div className="services__card" key={id}>
                            <img src={image} alt="Service" className="services__img" />
                            <h3 className="services__title">{title}</h3>
                            <p className="services__description">{description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Services;
