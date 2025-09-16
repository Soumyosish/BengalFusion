import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-20 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          Welcome to <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">BengalFusion</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8">
          Explore the future of design and technology with our cutting-edge platform.
          Beautiful UI, seamless experience, and powerful features await you.
        </p>
        <div className="space-x-4">
          <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-500 to-indigo-500 text-white font-semibold shadow-lg hover:opacity-90 transition">
            Get Started
          </button>
          <button className="px-6 py-3 rounded-2xl border border-gray-600 text-gray-300 font-semibold hover:bg-white/10 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Dummy sections to scroll */}
      <section id="features" className="h-screen flex items-center justify-center text-4xl font-bold">
        Features Section
      </section>
      <section id="services" className="h-screen flex items-center justify-center text-4xl font-bold">
        Services Section
      </section>
      <section id="about" className="h-screen flex items-center justify-center text-4xl font-bold">
        About Section
      </section>
      <section id="contact" className="h-screen flex items-center justify-center text-4xl font-bold">
        Contact Section
      </section>
    </div>
  );
}
