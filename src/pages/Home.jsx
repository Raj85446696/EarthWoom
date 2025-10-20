import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import mushroomimg from "../assets/Mushroom.jpg";
import flowerimg from "../assets/Flower.jpg";
import tshirtimg from "../assets/Tshirt.jpg";
import Footor from "../components/Footor";

function Home() {
  const slides = [
    {
      id: 1,
      title: "Organic Mushroom",
      image: mushroomimg,
      description: "Rich in essential nutrients and antioxidants. Sustainably cultivated and 100% organic.",
      details: ["Vitamin D rich", "Boosts immunity", "Sustainably grown"],
    },
    {
      id: 2,
      title: "Eco-Friendly Flower",
      image: flowerimg,
      description: "Naturally grown flower collection. Perfect for home decor and botany lovers.",
      details: ["Fresh blooms", "Zero chemical use", "Eco-certified packaging"],
    },
    {
      id: 3,
      title: "Earthwoom T-Shirt",
      image: tshirtimg,
      description: "Made from mushroom-infused bio-fabric, breathable and durable for daily wear.",
      details: ["100% biodegradable fabric", "Soft & lightweight", "Eco printed design"],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        setFade(true);
      }, 500);
    }, 3500);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
      setFade(true);
    }, 500);
  };

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
      setFade(true);
    }, 500);
  };

  const currentSlide = slides[currentIndex];

  const brandImages = [
    "https://1000logos.net/wp-content/uploads/2021/02/Flipkart-logo.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8eSb4lGANjKmXnj-qOz6dX-tvglN7u-0STA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAhx1eku3Jmu-Sr-E8TTHo_47a8thLxBYGfg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4bW7LpZfsb8HDjcY04_3RNaLa3dNxGthhUw&s",
    "https://www.visa.com/images/merchantoffers/2025-05/1748510129625.SwiggyInstamart.png",
    "https://upload.wikimedia.org/wikipedia/commons/1/10/CityMall_PH.svg",
  ];

  return (
    <>
      <Navbar />
      {/* Image text Slider */}
      <div className="bg-[#f3ede2] min-h-screen text-[#3e2f26] flex flex-col items-center py-16 px-6">
        {/* Hero Section */}
        <div className="max-w-4xl text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Explore{" "}
            <span className="text-[#d9b382]">Earthwoom Collection</span>
          </h1>
          <p className="text-lg md:text-xl text-[#5a4638]">
            Every product tells a story — crafted with care, sustainability,
            and nature’s wisdom.
          </p>
        </div>

        {/* Image + Info Section */}
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl gap-10">
          {/* Left Text */}
          <div
            key={`text-${currentIndex}`}
            className={`md:w-1/3 text-left space-y-5 md:block hidden text-lg md:text-xl transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"
              }`}
          >
            <h2 className="text-3xl font-semibold text-[#3e2f26]">
              {currentSlide.title}
            </h2>
            <p className="text-[#5a4638]">{currentSlide.description}</p>
            <ul className="list-disc list-inside text-[#5a4638] ml-5">
              {currentSlide.details.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="relative md:w-1/2 flex justify-center">
            <img
              key={`image-${currentIndex}`}
              src={currentSlide.image}
              alt={currentSlide.title}
              className={`rounded-lg shadow-lg w-full max-w-lg hover:scale-105 transition-transform duration-300 transition-opacity duration-500 ease-in-out ${fade ? "opacity-100" : "opacity-0"
                }`}
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#3e2f26]/70 text-[#f3ede2] p-3 rounded-full hover:bg-[#3e2f26]/90 transition"
              aria-label="Previous Slide"
            >
              ◄
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#3e2f26]/70 text-[#f3ede2] p-3 rounded-full hover:bg-[#3e2f26]/90 transition"
              aria-label="Next Slide"
            >
              ►
            </button>
          </div>

          {/* Right Text (mobile) */}
          <div
            key={`text-mobile-${currentIndex}`}
            className={`md:w-1/3 md:hidden text-center mt-6 space-y-5 text-lg transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"
              }`}
          >
            <h2 className="text-3xl font-semibold text-[#3e2f26]">
              {currentSlide.title}
            </h2>
            <p className="text-[#5a4638]">{currentSlide.description}</p>
            <ul className="list-disc list-inside text-[#5a4638] text-left inline-block ml-5">
              {currentSlide.details.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex space-x-3 mt-8">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setFade(false);
                setTimeout(() => {
                  setCurrentIndex(idx);
                  setFade(true);
                }, 500);
              }}
              className={`w-4 h-4 rounded-full ${idx === currentIndex ? "bg-[#d9b382]" : "bg-[#b7c6a0]"
                } hover:bg-[#d9b382] transition`}
              aria-label={`Go to slide ${idx + 1}`}
            ></button>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section className="max-w-4xl mx-auto mt-20 text-center px-6 md:px-0">
        <h2 className="text-3xl font-bold text-[#3e2f26] mb-6">
          Why Choose Earthwoom?
        </h2>
        <p className="text-[#5a4638] mb-12 text-lg">
          We combine sustainability, innovation, and the natural power of mushrooms to bring you products that are good for you and the planet.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-10">
          {[
            { title: "Sustainability", desc: "Eco-friendly production with zero waste." },
            { title: "Organic Quality", desc: "Certified organic ingredients and materials." },
            { title: "Innovation", desc: "Mushroom-based products pushing boundaries." },
          ].map(({ title, desc }) => (
            <div key={title} className="bg-[#d9b382] rounded-lg p-6 shadow-lg">
              <h3 className="font-semibold text-[#3e2f26] text-xl mb-2">{title}</h3>
              <p className="text-[#3e2f26]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="mt-20 bg-[#b7c6a0] text-[#3e2f26] py-16 px-6 rounded-xl text-center max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-4">Lead the Change with Earthwoom</h2>
        <p className="text-lg max-w-3xl mx-auto mb-8">
          Join us in transforming the world with products that blend nature, sustainability, and style.
        </p>
        <button className="bg-[#3e2f26] text-[#f3ede2] px-8 py-3 rounded-full font-semibold hover:bg-[#2f241f] transition">
          Shop Now
        </button>
      </section>

      {/* Certificate Section */}
      <section className="max-w-7xl mx-auto mt-20 px-6 md:px-0">
        <h2 className="text-3xl font-bold text-[#3e2f26] mb-10 text-center">Our Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            {
              icon: "🌿",
              title: "Organic Certified",
              desc: "All products meet international organic standards.",
            },
            {
              icon: "♻️",
              title: "Eco-Friendly",
              desc: "Committed to sustainable and zero-waste production.",
            },
            {
              icon: "✅",
              title: "Quality Assurance",
              desc: "Strict testing for premium quality and safety.",
            },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-[#d9b382] rounded-lg p-8 shadow-lg flex flex-col items-center">
              <div className="text-6xl mb-4">{icon}</div>
              <h3 className="font-semibold text-[#3e2f26] text-2xl mb-2">{title}</h3>
              <p className="text-[#5a4638]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto my-20 px-6 md:px-0">
        <h2 className="text-3xl font-bold text-[#3e2f26] mb-12 text-center">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              name: "Anna W.",
              feedback: "Earthwoom products transformed my wellness routine. Truly sustainable and effective!",
            },
            {
              name: "David L.",
              feedback: "Excellent quality and fast delivery. The mushroom t-shirt is incredibly comfortable.",
            },
            {
              name: "Samantha K.",
              feedback: "Love the eco-friendly packaging and care put into every product.",
            },
          ].map(({ name, feedback }) => (
            <div key={name} className="bg-[#f0e8d8] rounded-lg p-6 shadow-md">
              <p className="italic text-[#5a4638] mb-4">"{feedback}"</p>
              <h4 className="text-[#3e2f26] font-semibold">- {name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto mb-20 px-6 md:px-0 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { number: "100%", description: "Organic & Natural" },
            { number: "5000+", description: "Happy Customers" },
            { number: "30+", description: "Products & Growing" },
          ].map(({ number, description }) => (
            <div key={description} className="bg-[#b7c6a0] rounded-lg p-10 shadow-lg">
              <span className="text-5xl font-extrabold text-[#3e2f26]">{number}</span>
              <p className="mt-2 text-[#3e2f26] font-medium">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trusted Retainer */}
      <section className="my-20 max-w-7xl mx-auto px-6 md:px-0">
        <h2 className="text-3xl font-bold text-[#3e2f26] mb-6 text-center">
          Our Trusted Retainer
        </h2>

        <div className="overflow-hidden relative h-20">
          <div
            className="flex whitespace-nowrap marquee"
            style={{
              animationDuration: "20s",
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
              display: "flex",
            }}
          >
            {[...brandImages, ...brandImages].map((src, idx) => (
              <div key={idx} className="mx-10 flex-shrink-0 flex items-center justify-center mt-5">
                <img
                  src={src}
                  alt={`Brand ${idx + 1}`}
                  className="h-12 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
    @keyframes marquee {
      0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(-100%);
      }
    }
    .marquee {
      animation-name: marquee;
    }
  `}</style>
      </section>

      {/* Footer */}
      <Footor />
    </>
  );
}

export default Home;
