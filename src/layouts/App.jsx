import { useEffect } from "react";
import Home from "../pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import Project from "../pages/Projects";
import Experience from "../pages/Experiences";
import Skills from "../pages/Skills";
import Contact from "../pages/Contacts";

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
