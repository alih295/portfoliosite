import NavBar from "../Components/NavBar";
import MovingCircle from "../Components/MovingCircle";
import HerSection from "../Components/HerSection";
import About from "./About";

function Home() {
  return (
    <div className="w-full relative h-screen overflow-hidden text-[#ffff] font-[myFont]  bg-gray-900 ">
      <NavBar />
      <HerSection />
    </div>
  );
}

export default Home;
