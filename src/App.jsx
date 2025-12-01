import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedBooks from "./components/FeaturedBooks";
import Categories from "./components/Categories";
import Contact from "./components/Contact";
import ArcaneBackground from "./components/ArcaneBackground";
import DustParticles from "./components/DustParticles";
import MouseGlow from "./components/MouseGlow";
import About from "./components/About";
export default function App() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">

      <ArcaneBackground />
      <DustParticles />
      <MouseGlow />

      <Navbar />
      <Hero />
      <FeaturedBooks />
      <Categories />
      <About />
      <Contact />

    </div>
  );
}
