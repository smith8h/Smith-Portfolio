"use client";

import { useState } from "react";
import "./portfolio.css";
import { Menu } from "./Menu";

const categories = ["All", "Apps", "Android", "Flutter", "Web"];

const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const [items, setItems] = useState(() => Menu);

    const filterItem = (category) => {
        setActiveFilter(category);
        if (category === "All") {
            setItems(Menu);
        } else {
            setItems(Menu.filter((item) => item.category === category));
        }
    };

    return (
        <section className="work container section" id="portfolio">
            <div className="section__header reveal">
                <h2 className="section__title">
                    Recent <span className="gradient-text">Works</span>
                </h2>
                <span className="section__subtitle">featured projects &amp; libraries</span>
            </div>

            <div className="work__filters reveal">
                {categories.map((cat) => (
                    <button
                        className={`work__filter-btn ${activeFilter === cat ? "work__filter-btn--active" : ""}`}
                        key={cat}
                        onClick={() => filterItem(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="work__container grid reveal">
                {items.map(({ id, image, title, category, link, privacyPolicy }) => {
                    const external = link.startsWith("http");
                    const label = link.includes("play.google.com/")
                        ? "View on Google Play"
                        : link === "/wave/privacy" ? "Privacy Policy" : "View Project";
                    return (
                        <article className="work__card glass-card" key={id}>
                            <a href={link} {...(external && { target: "_blank", rel: "noopener noreferrer" })}>
                                <div className="work__thumb">
                                    <img src={image} alt={title} className="work__img" />
                                </div>
                                <div className="work__info">
                                    <span className="work__category">{category}</span>
                                    <h3 className="work__title">{title}</h3>
                                    <span className="work__link">
                                        {label} <i className="icon-arrow-right"></i>
                                    </span>
                                </div>
                            </a>
                            {privacyPolicy && <a className="work__privacy" href={privacyPolicy}>Privacy Policy</a>}
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Portfolio;
