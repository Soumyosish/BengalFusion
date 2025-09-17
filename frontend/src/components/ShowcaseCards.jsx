import React, { useEffect, useRef, useState } from 'react'
import howrah_bridge from '../assets/howrah_bridge.jpg'
import tourist from '../assets/tourist2.webp'
import festivals from '../assets/durga-10.jpg'
import foods from '../assets/misti1.jpg'
import music1 from '../assets/music1.jpg'

const CARDS = [
  {
    id: 'story',
    title: 'A Living Story',
    image: howrah_bridge,
    description:
      'Bengal is a living story—from Kolkata’s streets to Sundarbans backwaters—inviting journeys through history-rich landmarks.',
  },
  {
    id: 'landmarks',
    title: 'Historic Landmarks',
    image: tourist,
    description:
      'Wander through palaces, forts, and colonial heritage—each telling an unforgettable tale of Bengal’s past.',
  },
  {
    id: 'foods',
    title: 'Famous Foods',
    image: foods,
    description:
      'Taste mishti, sandesh, machher jhol, and more—Bengal’s beloved sweets, street foods, and traditional recipes.',
  },
  {
    id: 'festivals',
    title: 'Festivals & Traditions',
    image: festivals,
    description:
      'Celebrate rituals, crafts, and customs through the seasons—from Durga Puja to Poila Boishakh.',
  },
  {
    id: 'music',
    title: 'Music & Culture',
    image: music1,
    description:
      'Hear Rabindra Sangeet and Baul folk, and witness artistic traditions passed down generations.',
  },
]

export default function ShowcaseCards({ autoPlayMs = 3500 }) {
  const [active, setActive] = useState(1)
  const [armed, setArmed] = useState(null)
  const [hovered, setHovered] = useState(null)
  const timerRef = useRef(null)

  const next = () => setActive((i) => (i + 1) % CARDS.length)
  const prev = () => setActive((i) => (i - 1 + CARDS.length) % CARDS.length)

  useEffect(() => {
    if (armed !== null) return // pause autoplay when a card is armed for reveal
    timerRef.current = setInterval(next, autoPlayMs)
    return () => clearInterval(timerRef.current)
  }, [autoPlayMs, armed])

  const handleCardClick = (index) => {
    // Clicking arms this card; clicking a different card re-arms to that card
    setArmed(index)
    setActive(index)
  }

  const shouldShowDescription = (index) => armed === index && hovered === index

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="relative flex items-end justify-center gap-6 md:gap-10 py-10">
        {CARDS.map((card, index) => {
          const isActive = index === active
          const baseClasses =
            'relative cursor-pointer select-none transition-all duration-500 rounded-3xl overflow-hidden ring-1 ring-black/10 shadow-[0_25px_80px_rgba(0,0,0,0.18)]'
          const sizeClasses = isActive
            ? 'w-[70%] md:w-[60%] lg:w-[52%] h-[340px] md:h-[420px] lg:h-[480px] z-20'
            : 'w-[32%] md:w-[28%] lg:w-[24%] h-[260px] md:h-[300px] lg:h-[340px] z-10'
          const visualClasses = isActive
            ? 'opacity-100 backdrop-blur-0 scale-100'
            : 'opacity-85 backdrop-blur-[3px] scale-[0.96]'
          const sideTint = isActive ? '' : 'after:absolute after:inset-0 after:bg-gradient-to-b after:from-black/30 after:to-black/10'

          return (
            <div
              key={card.id}
              onClick={() => handleCardClick(index)}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className={`${baseClasses} ${sizeClasses} ${visualClasses} ${sideTint}`}
            >
              <img src={card.image} alt={card.title} className="absolute inset-0 w-full h-full object-cover" />

              {/* Center glow */}
              {isActive && <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/0 to-white/20" />}

              {/* Title + conditional description */}
              <div className={`absolute left-0 right-0 -bottom-2 md:bottom-0 mx-auto ${isActive ? 'w-[80%]' : 'w-[90%]'} bg-white/70 backdrop-blur-md rounded-[28px] p-4 md:p-6 text-center ring-1 ring-black/10`}>
                <h4 className={`font-extrabold ${isActive ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'} text-emerald-800`}>{card.title}</h4>
                {shouldShowDescription(index) && (
                  <p className="mt-2 md:mt-3 text-slate-700 text-base md:text-lg leading-relaxed">
                    {card.description}
                  </p>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-2">
        <button onClick={prev} className="px-3 py-2 rounded-full bg-black/10 hover:bg-black/20 transition">Prev</button>
        <div className="flex gap-2">
          {CARDS.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} className={`h-2.5 w-2.5 rounded-full ${i === active ? 'bg-emerald-600' : 'bg-emerald-300'}`} />
          ))}
        </div>
        <button onClick={next} className="px-3 py-2 rounded-full bg-black/10 hover:bg-black/20 transition">Next</button>
      </div>
    </div>
  )
}
