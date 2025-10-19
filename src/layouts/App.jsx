import { useEffect } from "react";
import Home from "../pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import Projects from "../pages/Projects";
import Experiences from "../pages/Experiences";
import Skills from "../pages/Skills";
import Contacts from "../pages/Contacts";

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
