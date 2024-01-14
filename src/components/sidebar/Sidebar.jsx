import React from "react";
import "./sidebar.css";
import Logo from '../../assets/logo.png'

const Sidebar = () => {
    return(
        <aside className="aside">
            <a href="#home" className="nav__logo">
                <img src={Logo} alt='Logo' className="logo"/>
            </a>

            <nav className="nav">
                <div className="nav__menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link">
                                <i className="icon-home" />
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="icon-user-following" />
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#services" className="nav__link">
                                <i className="icon-briefcase" />
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#resume" className="nav__link">
                                <i className="icon-graduation" />
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link">
                                <i className="icon-layers" />
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#blog" className="nav__link">
                                <i className="icon-note" />
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="icon-bubble" />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="nav__footer">
                <span className="copyright">
                    &copy; 2019-2024
                </span>
            </div>
        </aside>
    );
}

export default Sidebar;