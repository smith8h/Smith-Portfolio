import Link from "next/link";
import CodeHero from "@/components/terminal/CodeHero";
import Contact from "@/components/terminal/Contact";
import Icon from "@/components/shared/Icon";
import { featuredProjects, posts, pricing, profile, projects, services } from "@/lib/content";

const commitType = { Flutter: "feat(flutter)", Android: "chore(android)", Libraries: "docs(libs)" };

export default function Home() {
    return (
        <>
            <section className="hero" aria-labelledby="hero-title">
                <div className="hero__text">
                    <p className="hero__kicker">
                        <span className="tk-c">// </span>
                        {profile.roles.join(", ").toLowerCase()}
                    </p>
                    <h1 id="hero-title" className="hero__title">
                        {profile.name}
                    </h1>
                    <p className="hero__lede">{profile.intro}</p>
                    <div className="hero__actions">
                        <Link href="/work" className="btn btn--primary">
                            Browse my work
                        </Link>
                        <a href={profile.resume} className="btn" download>
                            <Icon name="download" size={16} /> Résumé
                        </a>
                    </div>
                </div>
                <CodeHero />
            </section>

            <section className="sec" aria-labelledby="work-title">
                <div className="sec__head">
                    <h2 id="work-title" className="sec__title">
                        <span className="tk-c">#</span> Selected work
                    </h2>
                    <Link href="/work" className="ulink">
                        Open work.tsx ({projects.length} projects)
                    </Link>
                </div>
                <div className="cards">
                    {featuredProjects.map((p) => (
                        <article key={p.id} className="card">
                            <div className="card__tab">
                                <span className={`dot dot--${p.category.toLowerCase()}`} aria-hidden="true" />
                                {p.kind.toLowerCase()} · {p.category === "Apps" ? "android" : p.category.toLowerCase()}
                            </div>
                            <div className="card__body">
                                <img src={p.image} alt="" width={56} height={56} loading="lazy" />
                                <h3 className="card__title">
                                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="stretch">
                                        {p.title}
                                    </a>
                                </h3>
                                <p className="card__text">{p.summary}</p>
                            </div>
                            <div className="card__foot">
                                <span>
                                    {p.linkLabel || "GitHub"} <Icon name="arrowUpRight" size={14} />
                                </span>
                                {p.privacyPolicy && (
                                    <Link href={p.privacyPolicy} className="card__policy">
                                        Privacy policy
                                    </Link>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="sec" aria-labelledby="services-title">
                <h2 id="services-title" className="sec__title">
                    <span className="tk-c">#</span> Services
                </h2>
                <div className="services">
                    {services.map((s) => (
                        <article key={s.id} className="service">
                            <p className="service__sig">
                                <span className="tk-k">export function </span>
                                <span className="tk-f">{s.id}</span>
                                <span className="tk-p">()</span>
                            </p>
                            <h3 className="service__title">{s.title}</h3>
                            <p className="service__text">{s.description}</p>
                            <p className="service__tools">
                                {s.tools.map((t, i) => (
                                    <span key={t}>
                                        <span className="tk-s">&quot;{t}&quot;</span>
                                        {i < s.tools.length - 1 && <span className="tk-p">, </span>}
                                    </span>
                                ))}
                            </p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="sec" aria-labelledby="pricing-title">
                <div className="sec__head">
                    <h2 id="pricing-title" className="sec__title">
                        <span className="tk-c">#</span> Pricing
                    </h2>
                    <p className="sec__note">Rough ranges per project. The final quote depends on scope.</p>
                </div>
                <div className="plans">
                    {pricing.map((p) => (
                        <article key={p.id} className={`plan ${p.recommended ? "plan--pick" : ""}`}>
                            <div className="plan__head">
                                <h3 className="plan__name">{p.name}</h3>
                                {p.recommended && <span className="plan__tag">recommended</span>}
                            </div>
                            <p className="plan__price">{p.price}</p>
                            <p className="plan__desc">{p.description}</p>
                            <ul className="plan__list">
                                {p.features.map((f) => (
                                    <li key={f}>
                                        <span className="tk-s" aria-hidden="true">
                                            +
                                        </span>{" "}
                                        {f}
                                    </li>
                                ))}
                                <li className="plan__support">
                                    <span aria-hidden="true">~</span> {p.support}
                                </li>
                            </ul>
                            <a href="#contact" className={`btn ${p.recommended ? "btn--primary" : ""}`}>
                                Ask about {p.name}
                            </a>
                        </article>
                    ))}
                </div>
            </section>

            <section className="sec" aria-labelledby="posts-title">
                <div className="sec__head">
                    <h2 id="posts-title" className="sec__title">
                        <span className="tk-c">#</span> Notes from Telegram
                    </h2>
                    <a href="https://t.me/smithdev" target="_blank" rel="noopener noreferrer" className="ulink">
                        t.me/smithdev
                    </a>
                </div>
                <ul className="gitlog">
                    {posts.map((p) => (
                        <li key={p.id}>
                            <a href={p.link} target="_blank" rel="noopener noreferrer">
                                <span className="gitlog__dot" aria-hidden="true">
                                    *
                                </span>
                                <time dateTime={p.date} className="tk-n">
                                    {p.date}
                                </time>
                                <span className="tk-k">{commitType[p.category] || "post"}:</span>
                                <span className="gitlog__msg">{p.title}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </section>

            <Contact />
        </>
    );
}
