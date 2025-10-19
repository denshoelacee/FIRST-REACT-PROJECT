import { useEffect } from "react";
import Home from "../pages/home";
import AOS from "aos";
import "aos/dist/aos.css";
import Projects from "../pages/projects";
import Experiences from "../pages/experiences";
import Skills from "../pages/skills";
import Contacts from "../pages/contacts";

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
