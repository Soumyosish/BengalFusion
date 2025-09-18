import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import NewsLetter from "./components/NewsLetter";
import FeaturesSection from "./components/FeaturesSection";
import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import TouristPlacesPage from "./pages/TouristPlacesPage";
import FoodsPage from "./pages/FoodsPage";
import FestivalsPage from "./pages/FestivalsPage";
import MusicPage from "./pages/MusicPage";

function RootLayout() {
  return (
    <div className="min-h-screen  text-black">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route
          index
          element={
            <>
              <HeroSection />
              <AboutUs />
              <FeaturesSection />
              <section id="services" className="h-screen flex items-center justify-center text-4xl font-bold">
                Services Section
              </section>
              <section id="contact" className="h-screen flex items-center justify-center text-4xl font-bold">
                Contact Section
              </section>
              <NewsLetter />
            </>
          }
        />
        <Route path="/west-bengal/tourist-places" element={<TouristPlacesPage />} />
        <Route path="/west-bengal/foods" element={<FoodsPage />} />
        <Route path="/west-bengal/festivals" element={<FestivalsPage />} />
        <Route path="/west-bengal/music" element={<MusicPage />} />
      </Route>
    </Routes>
  );
}
