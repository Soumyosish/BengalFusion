import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import NewsLetter from "./components/NewsLetter";
import FeaturesSection from "./components/FeaturesSection";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
export default function App() {
  return (
    <div className="min-h-screen  text-black">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection/>

      {/* About Us */}
      <AboutUs />

      {/* Features Sections */}
      <FeaturesSection />
      <section id="services" className="h-screen flex items-center justify-center text-4xl font-bold">
        Services Section
      </section>
      <section id="contact" className="h-screen flex items-center justify-center text-4xl font-bold">
        Contact Section
      </section>
      {/* NewsLetter */}
      <NewsLetter />
      {/* Footer */}
      <Footer />
    </div>
  );
}
