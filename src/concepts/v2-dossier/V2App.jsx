import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Certifications from "./components/Certifications/Certifications";
import Contact from "./components/Contact/Contact";
import { printConsoleGreeting } from "./consoleGreeting";

const V2App = () => {
  useEffect(() => {
    printConsoleGreeting();
  }, []);

  return (
    <div className="bg-paper text-ink">
      <ScrollProgress />
      <Navbar />
      <div className="lg:pl-56 xl2:pl-64">
        <main>
          <About />
          <Experience />
          <Projects />
          <Certifications />
          <Skills />
          <Education />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default V2App;
