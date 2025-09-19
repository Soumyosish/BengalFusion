import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Features", id: "features" },
    { name: "Faqs", id: "faqs" },
    { name: "Contact", id: "newsletter" },
  ];

  const handleNavClick = (id) => {
    setOpen(false); // close mobile menu if open

    if (location.pathname !== "/") {
      // Navigate to root with hash to trigger routing
      navigate(`/#${id}`);
    } else {
      // Scroll to the element with the id on the home page
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-lg shadow-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Brand */}
          <a href="#" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Brand Logo"
              className="w-10 h-10 rounded-full shadow-md border border-white/30"
            />
            <span className="text-2xl md:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              BengalFusion
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map(({ name, id }) => (
              <button
                key={name}
                onClick={() => handleNavClick(id)}
                className="relative group text-xl md:text-2xl lg:text-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent"
                type="button"
              >
                {name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-pink-500 to-indigo-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
            aria-label="Toggle menu"
            type="button"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden flex flex-col space-y-3 py-4 animate-fade-in-down">
            {navLinks.map(({ name, id }) => (
              <button
                key={name}
                onClick={() => handleNavClick(id)}
                className="text-white/90 hover:text-white transition text-lg font-medium text-left"
                type="button"
              >
                {name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
