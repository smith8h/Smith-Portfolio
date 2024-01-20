import React, { useState } from "react";
import "./portfolio.css";
import { Menu } from "./Menu";

const Portfolio = () => {
    const [items, setItems] = useState(() => Menu.filter(element => {
        return element.category === 'Android';
    }));

    const filterItem = (category) => {
        const updateItems = Menu.filter((curElement) => {
            return curElement.category === category;
        });
        setItems(updateItems);
    }

    return (
        <section className="work container section" id='portfolio'>
            <h2 className="section__title">Recent Works</h2>

            <div className="work__filters">
                <span className="work__item" onClick={() => filterItem('Android')}>Native Android</span>
                <span className="work__item" onClick={() => filterItem('Flutter')}>Flutter</span>
                <span className="work__item" onClick={() => filterItem('Web')}>Front-End</span>
            </div>

            <div className="work__container grid">
                {items.map(item => {
                    const { id, image, title, category, link} = item;
                    return(
                        <div className="work__card" key={id}>
                            <div className="work__thumb">
                                <img src={image} alt="Thumbnail" className="work__img" />
                                <div className="work__mask"></div>
                            </div>

                            <span className="work__category">
                                {category}
                            </span>
                            <h3 className="work__title">{title}</h3>
                            <a href={link} className="work__button" target="__blank">
                                <i className="icon-link work__button-icon"></i>
                            </a>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}

export default Portfolio;