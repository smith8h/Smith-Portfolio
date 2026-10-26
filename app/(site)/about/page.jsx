import Link from "next/link";
import Icon from "@/components/shared/Icon";
import { aiLearning, frameworks, journey, languages, profile, skills, stats } from "@/lib/content";

export const metadata = {
    title: "About · Hussein Shakir",
    description: "How a biotechnologist and medical analyst became a mobile and web developer.",
};

const bar = (n) => {
    const full = Math.round(n / 5);
    return "█".repeat(full) + "░".repeat(20 - full);
};

export default function AboutPage() {
    return (
        <article className="md">
            <section className="sec sec--page md__intro" aria-labelledby="about-title">
                <div>
                    <h1 id="about-title" className="page__title">
                        <span className="tk-c"># </span>About
                    </h1>
                    {profile.story.map((p) => (
                        <p key={p.slice(0, 20)} className="md__p">
                            {p}
                        </p>
                    ))}
                    <div className="hero__actions">
                        <a href={profile.resume} className="btn btn--primary" download>
                            <Icon name="download" size={16} /> Download résumé
                        </a>
                        <Link href="/#contact" className="btn">
                            Contact me
                        </Link>
                    </div>
                </div>
                <figure className="md__photo">
                    <img src={profile.portrait} alt="Hussein Shakir" width={320} height={400} />
                    <figcaption>
                        <span className="tk-c">![</span>
                        {profile.name}
                        <span className="tk-c">](me.jpg)</span>
                    </figcaption>
                </figure>
            </section>

            <section className="sec" aria-labelledby="numbers-title">
                <h2 id="numbers-title" className="sec__title">
                    <span className="tk-c">##</span> In numbers
                </h2>
                <dl className="kv">
                    {stats.map((s) => (
                        <div key={s.label}>
                            <dt>{s.label}</dt>
                            <dd className="tk-n">{s.value}</dd>
                        </div>
                    ))}
                </dl>
            </section>

            <section className="sec" aria-labelledby="skills-title">
                <h2 id="skills-title" className="sec__title">
                    <span className="tk-c">##</span> Skills
                </h2>
                <p className="sec__note">Self-rated.</p>
                <ul className="bars">
                    {skills.map((s) => (
                        <li key={s.name}>
                            <span className="bars__name">{s.name}</span>
                            <span className="bars__bar" aria-hidden="true">
                                {bar(s.level)}
                            </span>
                            <span className="bars__val tk-n">{s.level}%</span>
                        </li>
                    ))}
                </ul>
                <div className="two">
                    <div>
                        <h3 className="md__h3">
                            <span className="tk-c">###</span> Languages
                        </h3>
                        <p className="inline-code">
                            {languages.map((l) => (
                                <code key={l}>{l}</code>
                            ))}
                        </p>
                    </div>
                    <div>
                        <h3 className="md__h3">
                            <span className="tk-c">###</span> Frameworks
                        </h3>
                        <p className="inline-code">
                            {frameworks.map((l) => (
                                <code key={l}>{l}</code>
                            ))}
                        </p>
                    </div>
                </div>
            </section>

            <section className="sec" aria-labelledby="ai-title">
                <h2 id="ai-title" className="sec__title">
                    <span className="tk-c">##</span> Learning AI engineering
                </h2>
                <p className="md__p">I&apos;m at intern level, building on my Python background. On my list right now:</p>
                <ul className="tasks">
                    {aiLearning.map((t) => (
                        <li key={t}>
                            <span className="tasks__box" aria-hidden="true" /> {t}
                        </li>
                    ))}
                </ul>
            </section>

            <section className="sec" aria-labelledby="journey-title">
                <h2 id="journey-title" className="sec__title">
                    <span className="tk-c">##</span> Journey
                </h2>
                <p className="sec__note">Read it like a git log, newest first.</p>
                <ol className="graph">
                    {[...journey].reverse().map((j) => (
                        <li key={j.id} className={`graph__item graph__item--${j.type}`}>
                            <span className="graph__node" aria-hidden="true" />
                            <div>
                                <p className="graph__meta">
                                    <span className="tk-n">
                                        {j.start}–{j.end === "Present" ? "now" : j.end}
                                    </span>{" "}
                                    <span className={j.type === "education" ? "tk-f" : "tk-k"}>
                                        {j.type === "education" ? "study" : "work"}
                                    </span>{" "}
                                    <span className="tk-c">{j.place}</span>
                                </p>
                                <h3 className="graph__title">{j.title}</h3>
                                <p className="graph__desc">{j.description}</p>
                            </div>
                        </li>
                    ))}
                </ol>
            </section>
        </article>
    );
}
