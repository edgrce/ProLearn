import Navbar from "./Navbar";
import heroImage from "../assets/hero.png"; // pastikan path benar

export default function Hero() {
  return (
    <section
      className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <Navbar />

      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Hero Content */}
      <div className="relative z-10 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          AI Project Based <br /> e-Learning
        </h1>
        <p className="text-white text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          Empowering Learning Through Projects and Insights, Where Collaboration
          Meets Intelligence.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <button className="px-6 py-3 bg-white text-indigo-600 rounded font-semibold hover:bg-gray-200 transition">
            Explore Instructor Features
          </button>
          <button className="px-6 py-3 bg-indigo-600 text-white rounded font-semibold hover:bg-indigo-700 transition">
            Start Creating Now
          </button>
        </div>
      </div>
    </section>
  );
}
