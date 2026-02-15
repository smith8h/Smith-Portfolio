import "./blog.css";

const Blog = () => {
    return (
        <section className="blog container section" id="blog">
            <h2 className="section__title">Latest Posts</h2>

            <div className="blog__container grid">
                <div className="blog__card">
                    <div className="blog__thumb">
                        <span className="blog__category">Dependencies</span>
                        <a href="https://t.me/smithdev/291"><img src="/assets/blog-1.svg" alt="Avatar" className="blog__img" /></a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">New Flutter Dependency ⏏️</h3>
                        <div className="blog__meta">
                            <span>08 December, 2023</span>
                            <span className="blog__dot">.</span>
                            <span>Smith</span>
                        </div>
                    </div>
                </div>
                <div className="blog__card">
                    <div className="blog__thumb">
                        <span className="blog__category">Dependencies</span>
                        <a href="https://t.me/smithdev/285" target="__blank"><img src="/assets/blog-1.svg" alt="Avatar" className="blog__img" /></a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">New Android Dependency Update ↗️</h3>
                        <div className="blog__meta">
                            <span>30 October, 2023</span>
                            <span className="blog__dot">.</span>
                            <span>Smith</span>
                        </div>
                    </div>
                </div>
                <div className="blog__card">
                    <div className="blog__thumb">
                        <span className="blog__category">Dependencies</span>
                        <a href="https://t.me/smithdev/282"><img src="/assets/blog-1.svg" alt="Avatar" className="blog__img" /></a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">List Of My Android Libraries</h3>
                        <div className="blog__meta">
                            <span>30 September, 2023</span>
                            <span className="blog__dot">.</span>
                            <span>Smith</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
