import NavBar from "../Components/NavBar";
import HeroSection from "../Components/HeroSection";
import About from "./About";
import Contact from "./Contact";
import Skill from './Skill';
import Project from './Project';
import Links from "../Components/Links";

function Home() {
  return (
    <>
      <div id="home" className="w-full bg-transparent text-white font-[myFont]">
        <NavBar />
        <main className="px-20">
          <HeroSection />
          <About />
          <Project />
          <Skill />
          <Contact />
        </main>
      </div>
      <Links />
    </>
  );
}

export default Home;
