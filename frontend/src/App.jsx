import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen  text-black">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection/>

      {/* About Us */}
      <AboutUs />

      {/* Other Sections */}
      <section id="features" className="h-screen flex items-center justify-center text-4xl font-bold">
        Features Section
      </section>
      <section id="services" className="h-screen flex items-center justify-center text-4xl font-bold">
        Services Section
      </section>
      <section id="contact" className="h-screen flex items-center justify-center text-4xl font-bold">
        Contact Section
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
