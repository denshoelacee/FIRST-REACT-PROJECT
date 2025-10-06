import { useEffect } from "react";
import Header from "../components/Header";
import Home from "../pages/home";
import AOS from "aos";
import "aos/dist/aos.css";
import Project from "../pages/project";

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
      </div>
    </>
  );
}

export default App;
