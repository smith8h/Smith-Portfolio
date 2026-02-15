"use client";

import "./testimonials.css";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const data = [
    {
        id: 1,
        image: "https://te.legra.ph/file/d31077302c149168b23f4.jpg",
        title: "MedoTheLegendary",
        subtitle: "Freelancer — Android Developer",
        comment: "I enjoy working with you and learn so much. You make the process fun and interesting. Good luck! 👍",
    },
    {
        id: 2,
        image: "https://te.legra.ph/file/b5648f13d584af75a234f.jpg",
        title: "Kimo Android",
        subtitle: "CEO Of Encept Company",
        comment: "You working so hard 🔥. You make the hard work as best as it is, keep it up ❤️",
    },
    {
        id: 3,
        image: "https://te.legra.ph/file/cecacde3030b6116ec4d9.jpg",
        title: "Ali Tony",
        subtitle: "Freelancer — Android Developer",
        comment: "I enjoy working with you and learn so much. The Haay team make the process fun and interesting. Good luck! 🔥",
    },
    {
        id: 4,
        image: "https://te.legra.ph/file/7a0cd8bdf3f91e74cad41.jpg",
        title: "Nour NG3",
        subtitle: "Freelancer — Android Developer",
        comment: "You're the best teacher for me, I enjoyed learning from you and do the best for my work.",
    },
    {
        id: 5,
        image: "https://te.legra.ph/file/22981e9579ede382cf000.jpg",
        title: "Ali Almuhtadi",
        subtitle: "Freelancer — Android Developer",
        comment: "It was nice working with you! Keep the good work up.",
    },
    {
        id: 6,
        image: "https://te.legra.ph/file/61d0798dbebcc9627bf71.jpg",
        title: "Yassine Al-Maghribi",
        subtitle: "Freelancer — Android Developer",
        comment: "You do the great work for the world! Keep the good work up, make sure you will reach the highest level of programming soon.",
    },
];

const Testimonials = () => {
    return (
        <section className="testimonials container section" id="testimonials">
            <div className="section__header reveal">
                <h2 className="section__title">
                    Client <span className="gradient-text">Reviews</span>
                </h2>
                <span className="section__subtitle">what they say about my work</span>
            </div>

            <Swiper
                className="test__container reveal"
                modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                grabCursor={true}
                pagination={{ clickable: true }}
            >
                {data.map(({ id, image, title, subtitle, comment }) => (
                    <SwiperSlide className="test__item glass-card" key={id}>
                        <div className="test__header">
                            <img className="test__thumb" src={image} alt={title} />
                            <div>
                                <h3 className="test__title">{title}</h3>
                                <span className="test__subtitle">{subtitle}</span>
                            </div>
                        </div>
                        <blockquote className="test__comment">&ldquo;{comment}&rdquo;</blockquote>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Testimonials;
