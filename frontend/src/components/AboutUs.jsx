import React, { useEffect, useRef } from 'react'
import AboutFeaturesSection from './AboutFeaturesSection'

const SectionCard = ({ title, children, image, alt, reverse = false }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
    <div
      className={`bg-white/60 rounded-2xl p-6 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.08)] ring-1 ring-black/5 backdrop-blur supports-[backdrop-filter]:bg-white/50 ${reverse ? 'md:order-2' : 'md:order-1'}`}
      data-animate={reverse ? 'right' : 'left'}
    >
      <h3 className="text-2xl md:text-3xl font-extrabold mb-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
        {title}
      </h3>
      <div className="text-black/80 md:text-lg leading-relaxed">
        {children}
      </div>
    </div>
    <div
      className={`relative w-full h-[220px] md:h-[300px] lg:h-[360px] overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-[0_12px_28px_rgba(0,0,0,0.10)] group ${reverse ? 'md:order-1' : 'md:order-2'}`}
      data-animate={reverse ? 'left' : 'right'}
    >
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none" />
    </div>
  </div>
)

export default function AboutUs() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const root = sectionRef.current
    if (!root) return

    const items = root.querySelectorAll('[data-animate]')

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target
          if (entry.isIntersecting) {
            el.classList.add('is-visible')
          } else {
            el.classList.remove('is-visible')
          }
        }
      },
      { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.15 }
    )

    items.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-16 md:py-24 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="mb-10 text-center" data-animate="left">
        <h2 className="text-4xl md:text-6xl font-extrabold text-black drop-shadow-[0_3px_12px_rgba(0,0,0,0.06)]">
          About Us
        </h2>
        <p className="mt-4 md:mt-6 max-w-4xl mx-auto text-black/80 md:text-xl leading-relaxed">
          Welcome to Bengal Fusion, where every corner of Bengal’s enchanting tapestry comes alive. Our mission is to immerse you in the diverse world of Bengal—its scenic beauty, rich traditions, vibrant festivals, soul-stirring music, and legendary cuisine.
        </p>
      </div>

      {/* About features displayed inside About Us */}
      <div className="mb-12 md:mb-16">
        <AboutFeaturesSection />
      </div>

      <div className="mt-12 md:mt-16 text-center" data-animate="right">
        <p className="text-black/80 md:text-lg max-w-3xl mx-auto">
          Bengal Fusion is your gateway to understanding the harmony of heritage and modernity that defines Bengal. Whether you are a traveler, a curious food lover, a culture explorer, or someone longing for the flavors of home, our site welcomes you to experience the true spirit of Bengal—all in one place.
        </p>
      </div>

      
    </section>
  )
}
