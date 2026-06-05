import NavBar from "../Components/NavBar";
import HeroSection from "../Components/HeroSection";
import About from "./About";
import Contact from "./Contact";
import Project from './Project';
import Footer from "../Components/Footer";
import Skill from './Skill'

function Home() {
  return (
    <div id="home" className="w-full bg-transparent text-white font-[myFont]">
      <NavBar />
      <main className="w-full">
        <section className="w-full md:px-20">
          <HeroSection />
        </section>
        <section className="w-full">
          <About />
        </section>
        <section className="w-full">
          <Project />
        </section>
        <section className="w-full">
          <Skill />
        </section>
        <section className="w-full">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
