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
    question: "What are some famous tourist places to visit in West Bengal?",
    answer: "West Bengal offers diverse attractions including the Sundarbans mangrove forest, the hill station Darjeeling, colonial heritage at Victoria Memorial, Marble Palace in Kolkata, and ancient temples across the region."
  },
  {
    question: "What types of Bengali food can I explore on this site?",
    answer: "Discover a variety of local cuisines such as Rosogolla, Mishti Doi (sweetened yogurt), Shorshe Ilish (Hilsa fish in mustard sauce), Kolkata Biryani, and popular street foods like Jhalmuri and Egg Rolls."
  },
  {
    question: "Does the site include information on Bengali art and crafts?",
    answer: "Yes, the site features traditional arts like Terracotta craft from Bankura, Kantha embroidery, Dokra metal craft, and Sholapith decorations widely used during festivals."
  },
  {
    question: "Are historical and heritage sites detailed for travelers?",
    answer: "Yes, you can find information on historical landmarks such as the Victoria Memorial, Marble Palace, and other iconic places representing Bengal’s rich history and architecture."
  },
  {
    question: "When is the best time to visit historical sites in West Bengal?",
    answer: "The best time to visit most historical places in West Bengal is from October to March when the weather is pleasant."
  },
  {
    question: "Are there any UNESCO recognized heritage sites in West Bengal?",
    answer: "While West Bengal has many historically significant sites, notable protected heritage sites include the Sundarbans and the Darjeeling Himalayan Railway, recognized by UNESCO."
  },
  {
    question: "Which historical places in West Bengal have rich architectural significance?",
    answer: "Sites like the Victoria Memorial (classical British architecture), Rasmancha (terracotta architecture), and the Italian-style Hazarduari Palace showcase Bengal’s rich architectural heritage."
  }
]

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div id="faqs" className="max-w-6xl mx-auto mt-12 px-4 md:px-0">
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
