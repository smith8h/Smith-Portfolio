"use client";

import { useState } from "react";
import "./portfolio.css";
import { Menu } from "./Menu";

const categories = ["All", "Android", "Flutter", "Web"];

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
                {items.map(({ id, image, title, category, link }) => (
                    <a href={link} className="work__card glass-card" key={id} target="_blank" rel="noopener noreferrer">
                        <div className="work__thumb">
                            <img src={image} alt={title} className="work__img" />
                        </div>
                        <div className="work__info">
                            <span className="work__category">{category}</span>
                            <h3 className="work__title">{title}</h3>
                            <span className="work__link">
                                View Project <i className="icon-arrow-right"></i>
                            </span>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
