import "./resume.css";
import Data from "./Data";
import Card from "./Card";

const Resume = () => {
    return (
        <section className="resume container section" id="resume">
            <div className="section__header reveal">
                <h2 className="section__title">
                    My <span className="gradient-text">Journey</span>
                </h2>
                <span className="section__subtitle">education &amp; experience timeline</span>
            </div>

            <div className="resume__container grid">
                <div className="resume__col reveal">
                    <h3 className="resume__col-title">
                        <i className="icon-graduation"></i> Education
                    </h3>
                    <div className="timeline">
                        {Data.filter((val) => val.category === "education").map((val, id) => (
                            <Card key={id} icon={val.icon} title={val.title} year={val.year} desc={val.desc} />
                        ))}
                    </div>
                </div>
                <div className="resume__col reveal">
                    <h3 className="resume__col-title">
                        <i className="icon-briefcase"></i> Experience
                    </h3>
                    <div className="timeline">
                        {Data.filter((val) => val.category === "experience").map((val, id) => (
                            <Card key={id} icon={val.icon} title={val.title} year={val.year} desc={val.desc} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
