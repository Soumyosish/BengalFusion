import React from "react";
import logo from "../assets/logo.png";
import email from "../assets/email.png"
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 md:mt-24 relative w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="relative">
          {/* Glow */}
          <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-orange-400/40 via-orange-500/40 to-orange-500/40 blur-2xl"></div>
          <div className="relative rounded-3xl bg-gradient-to-r from-[#FFFDD0] to-[#F9F4B9] text-white shadow-[0_20px_60px_rgba(124,58,237,0.25)] overflow-hidden">
          <div className="p-6 md:p-10">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
              {/* Brand and description */}
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-4">
                  <img src={logo} alt="BengalFusion logo" className="w-10 h-10 rounded-md bg-white/80 p-1" />
                  <span className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">BengalFusion</span>
                </div>
                <p className="text-xl md:text-xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                  Bengal Fusion is your gateway to understanding the harmony of heritage and modernity
                 <br/>that defines Bengal by discovering tourist places, foods, festivals, culture, music,
                 <br/> and history with engaging visuals and concise information.
                </p>
                <div className="flex items-center gap-4 mt-6">
                  {/* Social icons */}
                  <a href="https://www.linkedin.com/in/soumyosishpal" aria-label="LinkedIn" className="hover:opacity-90">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-[#0077b5]"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
                  </a>
                  <a href="https://github.com/Soumyosish" aria-label="GitHub" className="hover:opacity-90">
                    <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="currentColor" className="text-black"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.218.694.825.576 4.765-1.588 8.199-6.084 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                  <a href="https://www.youtube.com/" aria-label="YouTube" className="hover:opacity-90">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-[#FF0000]"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112c-1.863-.502-9.386-.502-9.386-.502s-7.523 0-9.386.502a2.994 2.994 0 0 0-2.112 2.112c-.502 1.863-.502 5.754-.502 5.754s0 3.891.502 5.754a2.994 2.994 0 0 0 2.112 2.112c1.863.502 9.386.502 9.386.502s7.523 0 9.386-.502a2.994 2.994 0 0 0 2.112-2.112c.502-1.863.502-5.754.502-5.754s0-3.891-.502-5.754zm-13.498 9.314v-7.001l6.5 3.5-6.5 3.501z"/></svg>
                  </a>
                  <a href="mailto:soumyosishpal.108@gmail.com" aria-label="Mail" className="hover:opacity-90">
                    <img src={email} alt="Email" style={{height: '1.5em', width: '1.5em', objectFit: 'contain'}} />
                  </a>
                </div>
              </div>
              
              {/* Violet gradient divider */}
              <nav className="flex flex-wrap items-center gap-x-3 gap-y-2 text-lg font-medium md:text-xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                <a href="#home" className="hover:underline">Home</a>
                <a href="#about" className="hover:underline">About</a>
                <a href="#features" className="hover:underline">Features</a>
                <a href="#faqs" className="hover:underline">Faqs</a>
                <a href="#newsletter" className="hover:underline">Contact</a>
              </nav>
            </div>
            {/* <div className="h-[2px] w-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-indigo-500 rounded-full shadow-[0_0_16px_rgba(139,92,246,0.8)]"/> */}
              {/* Navigation links */}
            <div className="mt-8 border-t border-white/40 pt-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-3 ">
              <p className="text-xl md:text-xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">© {year} BengalFusion. All rights reserved.</p>
              <div className="flex items-center gap-6 text-xl md:text-xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                <a href="#" className="hover:underline">Privacy Policy</a>
                <a href="#" className="hover:underline">Terms of Service</a>
                <a href="#" className="hover:underline">Cookies Settings</a>
              </div>
          </div>
          </div>
        </div>
        </div>
        </div>
    </footer>
  );
}


