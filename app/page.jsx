"use client";

import { useEffect } from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import Home from "@/components/home/Home";
import About from "@/components/about/About";
import Services from "@/components/services/Services";
import Resume from "@/components/resume/Resume";
import Portfolio from "@/components/portfolio/Portfolio";
import Pricing from "@/components/pricing/Pricing";
import Testimonials from "@/components/testimonials/Testimonials";
import Blog from "@/components/blog/Blog";
import Contact from "@/components/contact/Contact";

export default function Page() {
    useEffect(() => {
        // Cursor glow
        const glow = document.createElement("div");
        glow.className = "cursor-glow";
        document.body.appendChild(glow);

        const handleMouseMove = (e) => {
            glow.style.left = e.clientX + "px";
            glow.style.top = e.clientY + "px";
        };
        window.addEventListener("mousemove", handleMouseMove);

        // Scroll reveal
        const revealElements = document.querySelectorAll(".reveal");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("revealed");
                    }
                });
            },
            { threshold: 0.1 }
        );
        revealElements.forEach((el) => observer.observe(el));

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            glow.remove();
            observer.disconnect();
        };
    }, []);

    return (
        <div className="App">
            <div className="noise-overlay"></div>
            <Sidebar />
            <main className="main">
                <Home />
                <About />
                <Services />
                <Resume />
                <Portfolio />
                <Pricing />
                <Testimonials />
                <Blog />
                <Contact />
            </main>
        </div>
    );
}
