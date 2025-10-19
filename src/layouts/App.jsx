import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "../pages/home";
import Projects from "../pages/projects";
import Experiences from "../pages/experience";
import Skills from "../pages/skills";
import Contacts from "../pages/contact";

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
         <Projects/>
         <Experiences/>
         <Skills/>
         <Contacts/>
      </div>
    </>
  );
}

export default App;
