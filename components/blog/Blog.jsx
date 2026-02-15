import "./blog.css";

const posts = [
    {
        id: 1,
        image: "/assets/blog-1.svg",
        title: "New Flutter Dependency ⏏️",
        category: "Flutter",
        date: "08 Dec, 2023",
        link: "https://t.me/smithdev/291",
    },
    {
        id: 2,
        image: "/assets/blog-1.svg",
        title: "New Android Dependency Update ↗️",
        category: "Android",
        date: "30 Oct, 2023",
        link: "https://t.me/smithdev/285",
    },
    {
        id: 3,
        image: "/assets/blog-1.svg",
        title: "List Of My Android Libraries",
        category: "Libraries",
        date: "30 Sep, 2023",
        link: "https://t.me/smithdev/282",
    },
];

const Blog = () => {
    return (
        <section className="blog container section" id="blog">
            <div className="section__header reveal">
                <h2 className="section__title">
                    Latest <span className="gradient-text">Posts</span>
                </h2>
                <span className="section__subtitle">news &amp; updates from my channel</span>
            </div>

            <div className="blog__container grid">
                {posts.map(({ id, image, title, category, date, link }) => (
                    <a href={link} className="blog__card glass-card reveal" key={id} target="_blank" rel="noopener noreferrer">
                        <div className="blog__thumb">
                            <img src={image} alt={title} className="blog__img" />
                        </div>
                        <div className="blog__details">
                            <span className="blog__category">{category}</span>
                            <h3 className="blog__title">{title}</h3>
                            <div className="blog__meta">
                                <span className="blog__date">{date}</span>
                                <span className="blog__author">Smith</span>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Blog;
