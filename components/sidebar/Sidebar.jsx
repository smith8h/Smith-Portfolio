import "./sidebar.css";
import Image from "next/image";

const Sidebar = () => {
    return (
        <aside className="aside">
            <a href="#home" className="nav__logo">
                <Image src="/assets/logo.png" alt="Logo" className="logo" width={30} height={30} />
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
                    &copy; 2019-2026
                </span>
            </div>
        </aside>
    );
};

export default Sidebar;
