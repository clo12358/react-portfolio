import { Link } from "react-router-dom";
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

const About = () => {
  const artImages = [car01, people01, car04, people02];
  const photoImages = [photo01, photo02, photo03, photo04];

  return (
    <div className="flex flex-col items-center w-full">
      {/* Top Hero Gradient Section */}
      <div className="w-full bg-gradient-to-br from-primary via-accent to-secondary py-24 px-6 sm:px-12 md:px-20 flex flex-col items-center gap-16">
        {/* Introduction */}
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-handwriting text-[#637c82] drop-shadow-md">
            Hey, I’m Chloe Dwyer!
          </h1>
        </div>

        {/* About Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl w-full">
          {/* Text */}
          <div className="lg:w-1/2 text-[#637c82] text-lg sm:text-xl lg:text-2xl leading-relaxed">
            <p>
              I am passionate about UI/UX design and Front-End Development. I bring ideas to life through creative and functional solutions. Let's build something great together!
            </p>
          </div>

          {/* Picture */}
          <div className="lg:w-1/2 relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={image02}
              alt="Chloe Dwyer"
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Skills & Experience Section */}
      <div className="w-full bg-white/10 backdrop-blur-md py-16 px-6 sm:px-12 md:px-20 flex flex-col items-center gap-12">
        <div className="max-w-6xl w-full text-center">
          <h2 className="text-4xl sm:text-5xl font-handwriting text-[#637c82] mb-4">
            My Skills & Experience
          </h2>
          <p className="text-[#637c82] opacity-90 text-lg sm:text-xl">
            Experienced in front-end development and passionate about creative problem solving.
          </p>
        </div>

        <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center bg-white/20 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-handwriting text-[#637c82] mb-2">UI/UX Design</h3>
            <p className="text-[#637c82] opacity-90 text-center">
              I craft beautiful and intuitive user interfaces and experiences with a strong focus on design details and user needs.
            </p>
          </div>
          <div className="flex flex-col items-center bg-white/20 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-handwriting text-[#637c82] mb-2">Front-End Development</h3>
            <p className="text-[#637c82] opacity-90 text-center">
              Proficient in HTML, React, JavaScript, CSS, and frameworks like Tailwind and Bootstrap to create responsive and interactive web applications.
            </p>
          </div>
          <div className="flex flex-col items-center bg-white/20 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-handwriting text-[#637c82] mb-2">Creative Coding</h3>
            <p className="text-[#637c82] opacity-90 text-center">
              Exploring creative coding through JavaScript, C#, and p5.js to create engaging interactive projects and visualizations.
            </p>
          </div>
        </div>
      </div>

      {/* Art & Drawing */}
      <div className="w-full py-16 px-6 sm:px-12 md:px-20 flex flex-col items-center gap-6">
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-handwriting text-[#637c82] mb-4 text-center">
          Art & Drawing
        </h3>
        <p className="text-[#637c82] text-lg sm:text-xl mb-4 text-center max-w-3xl">
          Art is my personal outlet and passion. I create custom illustrations of people, pets, and cars. It's been a rewarding journey, and I still love taking on occasional projects.
        </p>
        <Link to="https://www.instagram.com/designsbyclo_/">
          <button className="bg-[#637c82] text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:bg-[#4f6165] transition duration-300 mb-6 mx-auto block">
            View My Instagram
          </button>
        </Link>

        {/* Horizontal Scroll Gallery */}
        <div className="flex overflow-x-auto gap-6 py-4">
          {artImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Art ${i}`}
              className="w-72 h-64 rounded-3xl shadow-2xl flex-shrink-0 object-cover transform transition-transform duration-500 hover:scale-105"
            />
          ))}
        </div>
      </div>

      {/* Photography */}
      <div className="w-full py-16 px-6 sm:px-12 md:px-20 flex flex-col items-center gap-6 bg-white/10 backdrop-blur-md">
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-handwriting text-[#637c82] mb-4 text-center">
          Photography
        </h3>
        <p className="text-[#637c82] text-lg sm:text-xl mb-4 text-center max-w-3xl">
          I capture moments through my lens, exploring landscapes, portraits, and events. My photography journey allows me to connect with others while showcasing my perspective.
        </p>
        <Link to="https://www.instagram.com/chloe.dwyer_photography/">
          <button className="bg-[#637c82] text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:bg-[#4f6165] transition duration-300 mb-6 mx-auto block">
            View My Instagram
          </button>
        </Link>

        {/* Horizontal Scroll Gallery */}
        <div className="flex overflow-x-auto gap-6 py-4">
          {photoImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Photo ${i}`}
              className="w-72 h-64 rounded-3xl shadow-2xl flex-shrink-0 object-cover transform transition-transform duration-500 hover:scale-105"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
