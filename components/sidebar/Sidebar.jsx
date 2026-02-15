"use client";

import { useState } from "react";
import "./sidebar.css";
import Image from "next/image";

const navItems = [
    { href: "#home", icon: "icon-home", label: "Home" },
    { href: "#about", icon: "icon-user-following", label: "About" },
    { href: "#services", icon: "icon-briefcase", label: "Services" },
    { href: "#resume", icon: "icon-graduation", label: "Resume" },
    { href: "#portfolio", icon: "icon-layers", label: "Portfolio" },
    { href: "#blog", icon: "icon-note", label: "Blog" },
    { href: "#contact", icon: "icon-bubble", label: "Contact" },
];

const Sidebar = () => {
    const [activeNav, setActiveNav] = useState("#home");

    return (
        <aside className="aside">
            <a href="#home" className="nav__logo" onClick={() => setActiveNav("#home")}>
                <Image src="/assets/logo.png" alt="Logo" className="logo" width={32} height={32} />
            </a>

            <nav className="nav">
                <div className="nav__menu">
                    <ul className="nav__list">
                        {navItems.map((item) => (
                            <li className="nav__item" key={item.href}>
                                <a
                                    href={item.href}
                                    className={`nav__link ${activeNav === item.href ? "nav__link--active" : ""}`}
                                    onClick={() => setActiveNav(item.href)}
                                    title={item.label}
                                >
                                    <i className={item.icon} />
                                    <span className="nav__tooltip">{item.label}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            <div className="nav__footer">
                <span className="copyright">
                    &copy; 2019-2026
                </span>
            </div>
        </aside>
    );
};

export default Sidebar;
