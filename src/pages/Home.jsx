import NavBar from "../Components/NavBar";
import HeroSection from "../Components/HeroSection";
import About from "./About";
import Contact from "./Contact";
import Skill from './Skill'
import Project from './Project'
import Links from "../Components/Links";

function Home() {
  return (
 <>
    <div id="home" className="w-full min-h-screen lg:px-10 px-5    text-[#ffff] font-[myFont]  bg-gray-900 ">
      <NavBar />
      
      <HeroSection />
      <About />
      <Project />
      <Contact />
      <Skill />
    </div>
    <Links/>
 </>
  );
}

export default Home;
