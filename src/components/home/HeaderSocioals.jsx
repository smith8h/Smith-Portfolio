import React from 'react';

const HeaderSocials = () => {
    return (
        <div className="home__socials">
            <a href="https://t.me/smithdev" className="home__social-link" target='_blank'>
                <i className="fa-brands fa-telegram" />
            </a>
            <a href="https://instagram.com/s.albudairi" className="home__social-link" target='_blank'>
                <i className="fa-brands fa-square-instagram" />
            </a>
            <a href="https://www.linkedin.com/in/hussein-shakir-114814192/" className="home__social-link" target='_blank'>
                <i className="fa-brands fa-linkedin" />
            </a>
            <a href="https://github.com/smith8h" className="home__social-link" target='_blank'>
                <i className="fa-brands fa-github" />
            </a>
            <a href="https://youtube.com/@smith8h" className="home__social-link" target='_blank'>
                <i className="fa-brands fa-youtube" />
            </a>
        </div>
    );
}

export default HeaderSocials;