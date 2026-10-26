import WorkTable from "@/components/terminal/WorkTable";
import { projects } from "@/lib/content";

export const metadata = {
    title: "Work · Hussein Shakir",
    description: "Apps, open-source Android and Flutter libraries, and web projects by Hussein Shakir.",
};

export default function WorkPage() {
    const libs = projects.filter((p) => p.kind === "Library").length;
    return (
        <section className="sec sec--page" aria-labelledby="work-title">
            <h1 id="work-title" className="page__title">
                Work
            </h1>
            <p className="sec__lede">
                {projects.length} projects: apps on Google Play, {libs} open-source libraries for Android and Flutter, and a
                few tools. All the code is on GitHub.
            </p>
            <WorkTable />
        </section>
    );
}
