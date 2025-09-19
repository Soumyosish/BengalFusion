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
import ArtPage from "./pages/ArtPage";
import FaqsSection from "./components/FaqsSection";
import Testimonials from "./components/Testimonials";
import ScrollToTop from "./components/ScrollToTop";
function RootLayout() {
  return (
    <div className="min-h-screen  text-black">
      <Navbar />
      <ScrollToTop />
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
              <FaqsSection />
              <Testimonials />
              <NewsLetter />
            </>
          }
        />
        <Route
          path="/west-bengal/tourist-places"
          element={<TouristPlacesPage />}
        />
        <Route path="/west-bengal/foods" element={<FoodsPage />} />
        <Route path="/west-bengal/festivals" element={<FestivalsPage />} />
        <Route path="/west-bengal/music" element={<ArtPage />} />
      </Route>
    </Routes>
  );
}
