import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import faqImage from '../assets/faq.jpg'

const FaqsSection = () => {
  const [openIndex, setOpenIndex] = useState(null)

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,  // Set false to enable repeat animations on scroll up/down
      mirror: true,
    })
  }, [])

  const faqs = [
    {
      question: "What Tourist Places Can I Explore?",
      answer:
        "Bengal Fusion showcases top attractions including the Sundarbans, Darjeeling, Victoria Memorial, and other must-visit destinations in West Bengal."
    },
    {
      question: "What Foods Are Featured?",
      answer:
        "Discover Bengal's rich culinary heritage with dishes like Rosogolla, Fish Curry, and Mishti Doi featured on the site."
    },
    {
      question: "Which Festivals Are Covered?",
      answer:
        "Learn about Durga Puja, Poila Boishakh, Diwali, and many other vibrant cultural festivals celebrated across Bengal."
    },
    {
      question: "What Cultural Traditions Can I Discover?",
      answer:
        "Explore traditional arts, crafts, dance, and Bengali customs that form the heart of Bengal's cultural identity."
    },
    {
      question: "Does The Site Highlight Bengal Music?",
      answer:
        "From classical Rabindra Sangeet to modern folk and contemporary music, Bengal Fusion covers a wide spectrum of musical heritage."
    },
    {
      question: "Can I Learn About Historical Places?",
      answer:
        "Yes, historical sites like the Victoria Memorial, Marble Palace, and ancient temples are detailed for visitors and history buffs."
    }
  ]

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="max-w-6xl mx-auto mt-12 px-4 md:px-0">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-14">
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col md:flex-row gap-10 items-center">
        {/* Left side FAQs */}
        <div className="flex-1 space-y-6">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                data-aos="fade-right"
                data-aos-delay={idx * 150} // staggered delay
                className={`bg-white rounded-2xl shadow-lg p-6 cursor-pointer transition-all duration-300 ${
                  isOpen ? ' ring-indigo-900 shadow-indigo-500' : ''
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="flex items-center w-full focus:outline-none"
                >
                  <span
                    className={`mr-5 text-2xl transition text-indigo-500 ${
                      isOpen ? 'rotate-90' : ''
                    }`}
                  >
                    &#9679;
                  </span>
                  <span className="flex-1 text-lg font-semibold text-gray-800 text-left">
                    {faq.question}
                  </span>
                  <span
                    className={`ml-5 text-3xl text-indigo-400 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    &#9660;
                  </span>
                </button>
                {isOpen && (
                  <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
                )}
              </div>
            )
          })}
        </div>

        {/* Right side image */}
        <div className="flex-1">
          <div className="p-2 rounded-3xl border-4 border-dashed border-blue-300">
            <div className="bg-yellow-100 rounded-3xl">
              <img
                src={faqImage}
                alt="FAQ visual representation"
                className="rounded-3xl shadow-xl object-cover w-full max-h-[380px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FaqsSection
