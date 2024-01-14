import "./App.css";
import About from "./components/about/About.jsx";
import Blog from "./components/blog/Blog.jsx";
import Contact from "./components/contact/Contact.jsx";
import Home from "./components/home/Home.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Pricing from "./components/pricing/Pricing.jsx";
import Resume from "./components/resume/Resume.jsx";
import Services from "./components/services/Services.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Testimonitals from "./components/testimonials/Testimonials.jsx";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Pricing />
        <Testimonitals />
        <Blog />
        <Contact />
      </main>
    </div>
  );
}

export default App;