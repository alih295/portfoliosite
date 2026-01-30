import NavBar from "../Components/NavBar";
import HeroSection from "../Components/HeroSection";
import About from "./About";
import Contact from "./Contact";
import Skill from './Skill'
import Project from './Project'

function Home() {
  return (
    <div id="home" className="w-full min-h-screen    text-[#ffff] font-[myFont]  bg-gray-900 ">
      <NavBar />
      <HeroSection />
      <About />
      <Project />
      <Contact />
      <Skill />
    </div>
  );
}

export default Home;
