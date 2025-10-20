import { Link } from "react-router-dom";
import { useState } from "react";
import image02 from "../images/thumbnail_image0.png";

// Car & People Drawings
import car01 from "../images/car_drawing_01.png";
import car04 from "../images/car_drawing_04.png";
import people01 from "../images/people_drawing_01.png";
import people02 from "../images/people_drawing_02.png";

// Photography
import photo01 from "../images/photo_01.png";
import photo02 from "../images/photo_02.jpg";
import photo03 from "../images/photo_03.jpg";
import photo04 from "../images/photo_04.jpg";

// Sketches
import sketch01 from "../images/sketch1.png";
import sketch02 from "../images/sketch2.png";
import sketch03 from "../images/sketch3.png";
import sketch04 from "../images/sketch4.png";
import sketch05 from "../images/sketch5.png";
import sketch06 from "../images/sketch6.png";
import sketch07 from "../images/sketch7.png";

const About = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const artImages = [car01, people01, car04, people02];
  const photoImages = [photo01, photo02, photo03, photo04];

  const tools = [
    "Figma",
    "VS Code",
    "Canva",
    "Git & GitHub",
    "Miro",
    "Procreate",
    "Notion",
    "TablePlus",
  ];

  const funFacts = [
    {
      title: "Cat Co-Worker",
      text: "Pixel, my cat, sometimes sits on my keyboard mid-project 😸",
      emoji: "🐱",
      bg: "bg-yellow-200",
      rotation: "rotate-2",
    },
    {
      title: "Coffee Alchemist",
      text: "I can't start the day without creating the perfect latte ☕",
      emoji: "☕",
      bg: "bg-red-200",
      rotation: "-rotate-1",
    },
    {
      title: "Sketch Everywhere",
      text: "You might find napkin sketches or doodles on sticky notes everywhere ✏️",
      emoji: "✏️",
      bg: "bg-blue-200",
      rotation: "rotate-1",
    },
    {
      title: "Music Addict",
      text: "I have playlists for coding, relaxing, and even for making coffee 🎶",
      emoji: "🎶",
      bg: "bg-green-200",
      rotation: "-rotate-2",
    },
  ];

  const scatteredSketches = [
    // Top row sketches
    { src: sketch01, top: "-80px", left: "5%", w: "w-32", rotate: "rotate-12" },
    { src: sketch02, top: "-60px", left: "35%", w: "w-16", rotate: "-rotate-6" },
    { src: sketch03, top: "-90px", right: "10%", w: "w-28", rotate: "rotate-[-15deg]" },
    
    // Side sketches
    { src: sketch04, top: "20%", left: "-80px", w: "w-24", rotate: "rotate-[8deg]" },
    { src: sketch05, top: "40%", right: "-70px", w: "w-20", rotate: "-rotate-12" },
    
    // Bottom row sketches
    { src: sketch06, bottom: "-70px", left: "15%", w: "w-36", rotate: "-rotate-6" },
    { src: sketch07, bottom: "-50px", right: "25%", w: "w-16", rotate: "rotate-[20deg]" },
  ];

  const handleImageClick = (img) => {
    setSelectedImage(img);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* Top Hero Gradient Section */}
      <div className="w-full bg-gradient-to-br from-primary via-accent to-secondary py-24 px-6 sm:px-12 md:px-20 flex flex-col items-center gap-16">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-handwriting text-[#637c82] drop-shadow-md">
            Hey, I'm Chloe Dwyer!
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl w-full">
          <div className="lg:w-1/2 text-[#637c82] text-lg sm:text-xl lg:text-2xl leading-relaxed">
            <p>
              I am passionate about UI/UX design and Front-End Development. I bring ideas to life through creative and functional solutions. Let's build something great together!
            </p>
          </div>

          <div className="lg:w-1/2 relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={image02}
              alt="Chloe Dwyer"
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Skills & Tools Section */}
      <div className="w-full bg-white/10 backdrop-blur-md py-16 px-6 sm:px-12 md:px-20 flex flex-col items-center gap-12">
        <div className="max-w-6xl w-full text-center">
          <h2 className="text-4xl sm:text-5xl font-handwriting text-[#637c82] mb-4">
            Skills & Tools
          </h2>
          <p className="text-[#637c82] opacity-90 text-lg sm:text-xl">
            Here are some of the key skills and tools I use to bring ideas to life:
          </p>
        </div>

        {/* Bigger Skills Cards */}
        <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center bg-white/20 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:scale-105">
            <h3 className="text-2xl font-handwriting text-[#637c82] mb-2">Design & UX</h3>
            <ul className="text-[#637c82] opacity-90 text-center list-disc list-inside space-y-1">
              <li>Wireframing & Prototyping</li>
              <li>User Research & Personas</li>
              <li>Visual Design & Layout</li>
            </ul>
          </div>

          <div className="flex flex-col items-center bg-white/20 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:scale-105">
            <h3 className="text-2xl font-handwriting text-[#637c82] mb-2">Front-End</h3>
            <ul className="text-[#637c82] opacity-90 text-center list-disc list-inside space-y-1">
              <li>React.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          <div className="flex flex-col items-center bg-white/20 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:scale-105">
            <h3 className="text-2xl font-handwriting text-[#637c82] mb-2">Soft Skills</h3>
            <ul className="text-[#637c82] opacity-90 text-center list-disc list-inside space-y-1">
              <li>Collaboration & Teamwork</li>
              <li>Problem-Solving & Critical Thinking</li>
            </ul>
          </div>
        </div>

        {/* Tools Cards */}
        <div className="max-w-6xl w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 mt-8">
          {tools.map((tool, i) => (
            <div
              key={i}
              className="flex items-center justify-center bg-primary text-white/90 font-medium py-3 rounded-2xl shadow-md transform transition-transform duration-300 hover:scale-105"
            >
              {tool}
            </div>
          ))}
        </div>
      </div>

      {/* Fun Facts / Quirky Section */}
      <div className="w-full py-24 px-6 sm:px-12 md:px-20 flex flex-col items-center gap-12 relative">
        <div className="max-w-6xl w-full text-center">
          <h2 className="text-4xl sm:text-5xl font-handwriting text-primary mb-4">
            Fun & Quirky Facts About Me
          </h2>
          <p className="text-white/90 text-lg sm:text-xl mb-8">
            Here's a peek into some of the things that make me uniquely me!
          </p>
        </div>

        {/* Container for cards and sketches with increased padding */}
        <div className="max-w-6xl w-full relative px-20 py-16">
          {/* Fun Facts Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {funFacts.map((fact, i) => (
              <div
                key={i}
                className={`flex flex-col items-center p-6 rounded-3xl shadow-md transition-transform duration-300 hover:scale-105 ${fact.bg} ${fact.rotation}`}
              >
                <div className="text-4xl mb-2">{fact.emoji}</div>
                <h3 className="text-2xl font-handwriting text-white mb-2">{fact.title}</h3>
                <p className="text-white/90 text-center">{fact.text}</p>
              </div>
            ))}
          </div>

          {/* Sketches scattered around */}
          {scatteredSketches.map((sketch, i) => (
            <img
              key={i}
              src={sketch.src}
              alt={`sketch-${i}`}
              className={`absolute ${sketch.w} ${sketch.rotate} transition-transform duration-300 hover:scale-110`}
              style={{
                top: sketch.top || 'auto',
                bottom: sketch.bottom || 'auto',
                left: sketch.left || 'auto',
                right: sketch.right || 'auto'
              }}
            />
          ))}
        </div>
      </div>

      {/* Art & Drawing */}
      <div className="w-full py-16 px-6 sm:px-12 md:px-20 flex flex-col items-center gap-6">
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-handwriting text-[#637c82] mb-4 text-center">
          Art & Drawing
        </h3>
        <p className="text-[#637c82] text-lg sm:text-xl mb-8 text-center max-w-3xl">
          Art is my personal outlet and passion. I create custom illustrations of people, pets, and cars. It's been a rewarding journey, and I still love taking on occasional projects.
        </p>
        <Link to="https://www.instagram.com/designsbyclo_/">
          <button className="bg-[#637c82] text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:bg-[#4f6165] transition duration-300 mb-12 mx-auto block">
            View My Instagram
          </button>
        </Link>

        {/* Updated Art Gallery */}
        <div className="max-w-7xl w-full px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {artImages.map((img, i) => (
              <div 
                key={i} 
                className="group relative overflow-hidden rounded-3xl shadow-2xl aspect-[3/4] cursor-pointer"
                onClick={() => handleImageClick(img)}
              >
                <img
                  src={img}
                  alt={`Art ${i}`}
                  className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Click to expand
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Photography */}
      <div className="w-full py-16 px-6 sm:px-12 md:px-20 flex flex-col items-center gap-6 bg-white/10 backdrop-blur-md">
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-handwriting text-[#637c82] mb-4 text-center">
          Photography
        </h3>
        <p className="text-[#637c82] text-lg sm:text-xl mb-8 text-center max-w-3xl">
          I capture moments through my lens, exploring landscapes, portraits, and events. My photography journey allows me to connect with others while showcasing my perspective.
        </p>
        <Link to="https://www.instagram.com/chloe.dwyer_photography/">
          <button className="bg-[#637c82] text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:bg-[#4f6165] transition duration-300 mb-12 mx-auto block">
            View My Instagram
          </button>
        </Link>

        {/* Updated Photography Gallery */}
        <div className="max-w-7xl w-full px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {photoImages.map((img, i) => (
              <div 
                key={i} 
                className="group relative overflow-hidden rounded-3xl shadow-2xl aspect-[4/5] cursor-pointer"
                onClick={() => handleImageClick(img)}
              >
                <img
                  src={img}
                  alt={`Photo ${i}`}
                  className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Click to expand
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={handleCloseModal}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors duration-300"
              aria-label="Close modal"
            >
              ×
            </button>
            <img
              src={selectedImage}
              alt="Full size view"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default About;