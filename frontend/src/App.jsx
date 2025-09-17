import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";

export default function App() {
  return (
    <div className="min-h-screen  text-black">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection/>

      {/* Sections */}
      {/* About Us */}
      <AboutUs />
      <section id="features" className="h-screen flex items-center justify-center text-4xl font-bold">
        Features Section
      </section>
      <section id="services" className="h-screen flex items-center justify-center text-4xl font-bold">
        Services Section
      </section>
      <section id="contact" className="h-screen flex items-center justify-center text-4xl font-bold">
        Contact Section
      </section>
    </div>
  );
}
