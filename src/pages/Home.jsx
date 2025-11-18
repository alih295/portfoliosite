import NavBar from "../Components/NavBar";
import MovingCircle from "../Components/MovingCircle";
import HeroSection from "../Components/HeroSection";
import About from "./About";

function Home() {
  return (
    <div className="w-full relative h-screen overflow-hidden text-[#ffff] font-[myFont]  bg-gray-900 ">
      <NavBar />
      <HeroSection />
    </div>
  );
}

export default Home;
