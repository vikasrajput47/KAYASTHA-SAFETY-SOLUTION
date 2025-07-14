import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
function Home() {
  const backgrounds = [
    "https://img.freepik.com/free-photo/closeup-red-fire-extinguishers_53876-147842.jpg?t=st=1745862998~exp=1745866598~hmac=ca8c5cf21066d7d4727d20e8ab2e36130adcd1702f924ec3d4ce2f10f4bf60ff&w=1060",
    "https://img.freepik.com/free-vector/hand-drawn-fire-prevention-illustration_23-2149129605.jpg?t=st=1745863159~exp=1745866759~hmac=b181dc3ffe43b7a11b6eb58cf84fa98ed1a8aecc05d68d896d2f60dc0010fb33&w=1060",
    "https://img.freepik.com/free-photo/firefighter-ready-his-mission_23-2149237344.jpg?t=st=1745863239~exp=1745866839~hmac=8ea48bd02fb519bbc8506fd580597563da2e2ab60ada21a83b527bce3a2759aa&w=1060",
    "https://img.freepik.com/free-photo/fire-alarm-switch_1339-1888.jpg?t=st=1745863370~exp=1745866970~hmac=8accf6b87ebc72b0d6d91f2a6d63e90518d9c3d7df62c0917d961f8909ae2583&w=1060",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <section className="relative flex items-center justify-center h-screen overflow-hidden">
        {/* Slider container */}
        <div
          className="flex transition-transform duration-1000 ease-in-out h-full w-full"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {backgrounds.map((bg, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-full h-full bg-center bg-cover"
              style={{ backgroundImage: `url(${bg})` }}
            ></div>
          ))}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="absolute z-10 text-center p-8 rounded-lg">
          <h1 className="text-6xl font-extrabold leading-tight mb-6 text-yellow-400">
            Protecting Lives & Property
          </h1>
          <p className="text-xl sm:text-2xl font-light max-w-3xl mb-8 text-gray-200">
            We are the leading Fire Protection Company providing top-notch fire
            safety equipment and emergency solutions.
          </p>
          <a
            href="/catalogue.pdf"
            download="Catalogue.pdf"
            className="px-8 py-4 bg-red-700 hover:bg-red-800 text-white font-semibold rounded-full shadow-lg transform transition duration-300 hover:scale-105"
          >
            Learn More
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;
