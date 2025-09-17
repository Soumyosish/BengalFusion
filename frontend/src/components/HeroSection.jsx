import React from 'react'
import HeroCarousel from './HeroCarousel'
const HeroSection = () => {
  return (
    <>
    <section className="pt-20 md:pt-24 pb-6 px-0">
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        {/* Carousel as background */}
        <HeroCarousel />

        {/* Overlayed content */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="pointer-events-auto text-center px-4 md:px-8">
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight drop-shadow-[0_6px_22px_rgba(0,0,0,0.75)]">
              Welcome to BengalFusion
            </h1>
            <p className="mt-5 md:mt-7 max-w-5xl mx-auto text-2xl md:text-3xl lg:text-4xl text-white drop-shadow-[0_3px_14px_rgba(0,0,0,0.8)]">
              Explore the rich culture, cuisine, music, and heritage of Bengal through visuals.
            </p>
            <div className="mt-7 md:mt-10 md:text-1xl lg:text-2xl flex items-center justify-center gap-4">
              <button className="px-6 py-3 md:px-8 md:py-4 rounded-2xl border border-white/70 text-white font-semibold bg-white/10 hover:bg-white/20 transition">
                Get Started
              </button>
              <button className="px-6 py-3 md:px-8 md:py-4 rounded-2xl border border-white/70 text-white font-semibold bg-white/10 hover:bg-white/20 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default HeroSection