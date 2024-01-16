import React from "react";
import "./services.css";
import Image1 from '../../assets/service-1.svg';
import Image2 from '../../assets/service-2.svg';
import Image3 from '../../assets/service-3.svg';

const data = [
    {
        id: 3,
        image: Image3,
        title: "Mobile App Development",
        description: "Especially in Java and Kotlin for Native Android, Dart for Mobile App development. I can bring your app to life too!",
    },
    {
        id: 2,
        image: Image2,
        title: "Web Development",
        description:
            "With high skills in web development, I can bring your website to life too!.. hahaha!",
    },
    {
        id: 1,
        image: Image1,
        title: "UI/UX Design",
        description:
            "I can bring your UI/UX designs to life profissionally.",
    },
];

const Services = () => {
    return (
        <section className="services container section" id='services'>
            <h2 className="section__title">Services</h2>

            <div className="services__container grid">
                {data.map(({ id, image, title, description }) => {
                    return (
                        <div className="services__card">
                            <img src={image} alt="Service" className="services__img" />
                            <h3 className="services__title">{title}</h3>
                            <p className="services__description">{description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Services;