import { Link } from 'react-router-dom';

import image02 from '../images/thumbnail_image0.png';

// Car Images
import car01 from '../images/car_drawing_01.png';
import car04 from '../images/car_drawing_04.png';

// People Images
import people01 from '../images/people_drawing_01.png';
import people02 from '../images/people_drawing_02.png';

// Photography
import photo01 from '../images/photo_01.png';
import photo02 from '../images/photo_02.jpg';
import photo03 from '../images/photo_03.jpg';
import photo04 from '../images/photo_04.jpg';

const About = () => {
    return (
        <div className="px-6 sm:px-8 lg:px-12 py-12 bg-accent flex flex-col justify-center items-center">
            <div className="w-full max-w-screen-lg flex flex-col gap-10">
                {/* Introduction Section */}
                <div className="text-center text-primary-content text-5xl sm:text-6xl lg:text-7xl font-normal font-handwriting">
                    <h1>Hey, I’m Chloe Dwyer!</h1>
                </div>

                {/* About Section */}
                <div className="flex flex-col lg:flex-row justify-start items-center gap-10">
                    <div className="lg:w-1/2 text-black text-lg sm:text-xl lg:text-2xl font-normal font-handwriting leading-relaxed">
                        <p>
                            I am passionate about UI/UX design and Front-End Development. I bring ideas to life through creative and functional solutions. Let's build something great together!
                        </p>
                    </div>

                    {/* Picture Section */}
                    <div className="h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] relative rounded-md lg:ml-10">
                        <img
                            src={image02}
                            alt="Myself"
                            className="w-full h-full object-cover relative rounded-md shadow-lg"
                        />
                    </div>
                </div>

                {/* Skills & Experience Section */}
                <div className="bg-primary text-accent py-16 mt-20 rounded-lg shadow-lg">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl sm:text-4xl font-semibold mb-6 font-handwriting">My Skills & Experience</h2>
                        <p className="text-lg sm:text-xl font-light opacity-90">Experienced in front-end development and passionate about creative problem solving.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
                        <div className="flex flex-col items-center bg-primary-content p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4 font-handwriting">UI/UX Design</h3>
                            <p className="text-lg text-center opacity-90">I craft beautiful and intuitive user interfaces and experiences with a strong focus on design details and user needs.</p>
                        </div>
                        <div className="flex flex-col items-center bg-primary-content p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4 font-handwriting">Front-End Development</h3>
                            <p className="text-lg text-center opacity-90">Proficient in HTML, React, JavaScript, CSS, and frameworks like Tailwind and Bootstrap to create responsive and interactive web applications.</p>
                        </div>
                        <div className="flex flex-col items-center bg-primary-content p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4 font-handwriting">Creative Coding</h3>
                            <p className="text-lg text-center opacity-90">Exploring creative coding through JavaScript, C#, and p5.js to create engaging interactive projects and visualizations.</p>
                        </div>
                    </div>
                </div>

                {/* Interests Section */}
                <div>
                    <div className="text-primary text-3xl sm:text-4xl lg:text-5xl font-normal font-handwriting text-center">
                        <h1>Some of my Interests</h1>
                    </div>

                    {/* Art and Drawing */}
                    <div className="flex flex-col gap-6 mt-8">
                        <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
                            <div className="lg:w-1/2">
                                <h3 className="text-2xl sm:text-3xl lg:text-4xl text-secondary-content mb-4 font-handwriting">Art & Drawing</h3>
                                <p className="text-lg sm:text-xl text-black mb-6">
                                    Art is my personal outlet and passion. I create custom illustrations of people, pets, and cars. It's been a rewarding journey, and I still love taking on occasional projects.
                                </p>
                                <Link to="https://www.instagram.com/designsbyclo_/">
                                    <button className="btn btn-primary btn-md no-animation text-accent">View My Instagram</button>
                                </Link>
                            </div>

                            <div className="lg:w-1/2">
                                <div className="carousel w-full">
                                    <div id="car_slide1" className="carousel-item relative w-full">
                                        <img src={car01} alt="Car Illustration 1" className="w-full rounded-lg" />
                                        <div className="absolute top-1/2 left-5 right-5 flex justify-between transform -translate-y-1/2">
                                            <a href="#car_slide4" className="btn btn-circle text-white">
                                                ❮
                                            </a>
                                            <a href="#car_slide2" className="btn btn-circle text-white">
                                                ❯
                                            </a>
                                        </div>
                                    </div>
                                    <div id="car_slide2" className="carousel-item relative w-full">
                                        <img src={people01} alt="Drawing 2" className="w-full rounded-lg" />
                                        <div className="absolute top-1/2 left-5 right-5 flex justify-between transform -translate-y-1/2">
                                            <a href="#car_slide1" className="btn btn-circle text-white">
                                                ❮
                                            </a>
                                            <a href="#car_slide3" className="btn btn-circle text-white">
                                                ❯
                                            </a>
                                        </div>
                                    </div>
                                    <div id="car_slide3" className="carousel-item relative w-full">
                                        <img src={car04} alt="Drawing 3" className="w-full rounded-lg" />
                                        <div className="absolute top-1/2 left-5 right-5 flex justify-between transform -translate-y-1/2">
                                            <a href="#car_slide2" className="btn btn-circle text-white">
                                                ❮
                                            </a>
                                            <a href="#car_slide4" className="btn btn-circle text-white">
                                                ❯
                                            </a>
                                        </div>
                                    </div>
                                    <div id="car_slide4" className="carousel-item relative w-full">
                                        <img src={people02} alt="Drawing 4" className="w-full rounded-lg" />
                                        <div className="absolute top-1/2 left-5 right-5 flex justify-between transform -translate-y-1/2">
                                            <a href="#car_slide3" className="btn btn-circle text-white">
                                                ❮
                                            </a>
                                            <a href="#car_slide1" className="btn btn-circle text-white">
                                                ❯
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Photography Section */}
                    <div className="flex flex-col gap-6 mt-8">
                        <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
                            <div className="lg:w-1/2">
                                <h3 className="text-2xl sm:text-3xl lg:text-4xl text-secondary-content mb-4 font-handwriting">Photography</h3>
                                <p className="text-lg sm:text-xl text-black mb-6">
                                    I capture moments through my lens, exploring landscapes, portraits, and events. My photography journey allows me to connect with others while showcasing my perspective.
                                </p>
                                <Link to="https://www.instagram.com/chloe.dwyer_photography/">
                                    <button className="btn btn-primary btn-md no-animation text-accent">View My Instagram</button>
                                </Link>
                            </div>

                            <div className="lg:w-1/2">
                                <div className="carousel w-full">
                                    <div id="photo_slide1" className="carousel-item relative w-full">
                                        <img src={photo01} alt="Car Illustration 1" className="w-full rounded-lg" />
                                        <div className="absolute top-1/2 left-5 right-5 flex justify-between transform -translate-y-1/2">
                                            <a href="#photo_slide4" className="btn btn-circle text-white">
                                                ❮
                                            </a>
                                            <a href="#photo_slide2" className="btn btn-circle text-white">
                                                ❯
                                            </a>
                                        </div>
                                    </div>
                                    <div id="photo_slide2" className="carousel-item relative w-full">
                                        <img src={photo02} alt="Drawing 2" className="w-full rounded-lg" />
                                        <div className="absolute top-1/2 left-5 right-5 flex justify-between transform -translate-y-1/2">
                                            <a href="#photo_slide1" className="btn btn-circle text-white">
                                                ❮
                                            </a>
                                            <a href="#photo_slide3" className="btn btn-circle text-white">
                                                ❯
                                            </a>
                                        </div>
                                    </div>
                                    <div id="photo_slide3" className="carousel-item relative w-full">
                                        <img src={photo03} alt="Drawing 3" className="w-full rounded-lg" />
                                        <div className="absolute top-1/2 left-5 right-5 flex justify-between transform -translate-y-1/2">
                                            <a href="#photo_slide2" className="btn btn-circle text-white">
                                                ❮
                                            </a>
                                            <a href="#photo_slide4" className="btn btn-circle text-white">
                                                ❯
                                            </a>
                                        </div>
                                    </div>
                                    <div id="photo_slide4" className="carousel-item relative w-full">
                                        <img src={photo04} alt="Drawing 4" className="w-full rounded-lg" />
                                        <div className="absolute top-1/2 left-5 right-5 flex justify-between transform -translate-y-1/2">
                                            <a href="#photo_slide3" className="btn btn-circle text-white">
                                                ❮
                                            </a>
                                            <a href="#photo_slide1" className="btn btn-circle text-white">
                                                ❯
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
