import React, { useEffect, useRef, useState } from 'react'
import culture1 from '../assets/culture1.jpg'
import durga10 from '../assets/durga-10.jpg'
import misti1 from '../assets/misti1.jpg'
import tourist1 from '../assets/tourist1.webp'

const IMAGES = [
	{ src: culture1, alt: 'Bengal Culture' },
	{ src: tourist1, alt: 'Tourism in Bengal' },
	{ src: durga10, alt: 'Durga Puja' },
	{ src: misti1, alt: 'Bengali Sweets' },
]

export default function HeroCarousel({ autoPlayMs = 2000 }) {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [isPaused, setIsPaused] = useState(false)
	const intervalRef = useRef(null)

	const goTo = (index) => {
		const nextIndex = (index + IMAGES.length) % IMAGES.length
		setCurrentIndex(nextIndex)
	}

	const next = () => goTo(currentIndex + 1)
	const prev = () => goTo(currentIndex - 1)

	useEffect(() => {
		if (isPaused) return
		intervalRef.current = setInterval(() => {
			setCurrentIndex((i) => (i + 1) % IMAGES.length)
		}, autoPlayMs)
		return () => {
			if (intervalRef.current) clearInterval(intervalRef.current)
		}
	}, [autoPlayMs, isPaused])

	return (
		<div
			className="relative w-full h-[70vh] md:h-[80vh] lg:h-[88vh] overflow-hidden rounded-2xl shadow-2xl border border-white/10 bg-black"
			onMouseEnter={() => setIsPaused(true)}
			onMouseLeave={() => setIsPaused(false)}
		>
			{/* Slides */}
			<div className="absolute inset-0">
				{IMAGES.map((image, index) => (
					<img
						key={image.src}
						src={image.src}
						alt={image.alt}
						className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
						decoding="async"
						loading={index === currentIndex ? 'eager' : 'lazy'}
					/>
				))}
				{/* stronger but subtle gradient for legibility */}
				<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />
			</div>

			{/* Controls */}
			<div className="pointer-events-none absolute inset-0 flex items-center justify-between p-3">
				<button
					aria-label="Previous image"
					onClick={prev}
					className="pointer-events-auto p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition"
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path fillRule="evenodd" d="M15.78 3.72a.75.75 0 010 1.06L9.56 11l6.22 6.22a.75.75 0 11-1.06 1.06l-6.75-6.75a.75.75 0 010-1.06l6.75-6.75a.75.75 0 011.06 0z" clipRule="evenodd"/></svg>
				</button>
				<button
					aria-label="Next image"
					onClick={next}
					className="pointer-events-auto p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition"
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path fillRule="evenodd" d="M8.22 20.28a.75.75 0 010-1.06L14.44 13 8.22 6.78a.75.75 0 111.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 01-1.06 0z" clipRule="evenodd"/></svg>
				</button>
			</div>

			{/* Dots */}
			<div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
				{IMAGES.map((_, index) => (
					<button
						key={index}
						aria-label={`Go to slide ${index + 1}`}
						onClick={() => goTo(index)}
						className={`h-2.5 rounded-full transition-all ${index === currentIndex ? 'w-6 bg-white' : 'w-2.5 bg-white/50 hover:bg-white/80'}`}
					/>
				))}
			</div>
		</div>
	)
}
