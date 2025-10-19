import { useEffect } from "react";
import Home from "../pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import Project from "../pages/project";
import Experience from "../pages/experience";
import Contact from "../pages/contact";
import Skills from "../pages/Skills";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, 
    });
  }, []);
  return (
    <>
      <div className="bg-[#070524]">
         <Home/>
         <Project/>
         <Experience/>
         <Skills/>
         <Contact/>
      </div>
    </>
  );
}

export default App;
