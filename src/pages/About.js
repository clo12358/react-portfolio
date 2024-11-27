import {  Link  } from 'react-router-dom';

import image02 from '../images/thumbnail_image0.png';

// Car Images
import car01 from '../images/car_drawing_01.png';
// import car02 from '../images/car_drawing_02.png';
// import car03 from '../images/car_drawing_03.png';
import car04 from '../images/car_drawing_04.png';
// import car05 from '../images/car_drawing_05.png';

// People Images
import people01 from '../images/people_drawing_01.png';
import people02 from '../images/people_drawing_02.png';
// import people03 from '../images/people_drawing_03.png';
// import people04 from '../images/people_drawing_04.png';

// Photography
import photo01 from '../images/photo_01.png';
import photo02 from '../images/photo_02.jpg';
import photo03 from '../images/photo_03.jpg';
import photo04 from '../images/photo_04.jpg';


const About = () => {
    return (
        <>
        <div className="px-6 sm:px-8 lg:px-12 py-12 bg-accent flex flex-col justify-center items-center">
            <div className="w-full max-w-screen-lg flex flex-col gap-10">
            {/* Introduction Section */}
            <div className="text-center text-primary-content text-5xl sm:text-6xl lg:text-7xl font-normal font-handwriting">
            <h1>Hey, I’m Chloe Dwyer!</h1>
            </div>
        
            {/* About Section */}
            <div className="flex flex-col lg:flex-row justify-start items-center gap-10">
                <div className="h-[300px] sm:h-[400px] md:h-[470px] relative rounded-md">
                    <img src={image02} alt="Myself" className='w-full h-[300px] sm:h-[400px] md:h-[470px] relative rounded-md'></img>
                </div>
                <div className="lg:w-1/2 text-black text-lg sm:text-xl lg:text-2xl font-normal font-handwriting">
                    <p>I am extremely passionate about UI/UX design and Front-End Development. I want to be able to turn my ideas into real-world projects!</p>
                    <br/><br/>
                    <p>I am skilled in Front-End Development with HTML, React, Figma, CSS and frameworks such as Tailwind and Bootstrap. I also have experience in JavaScript, C#, Laravel and p5.js.</p>
                </div>
            </div>

            {/* Interests Section */}
            <div>
                <div className="text-primary text-3xl sm:text-4xl lg:text-5xl font-normal font-handwriting">
                    <h1>Some of my Interests</h1>
                </div>
                
                {/* Art and Drawing */}
                <div className="flex flex-col gap-6 mt-8">
                    <div className="flex items-center gap-3">
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none">
                            <g id="Pen">
                            <path id="Pen_2" d="M28 0H24.5V3.5H21V7H17.5V10.5H14V14H10.5V17.5H7V21H3.5V24.5H0V35H10.5V31.5H14V28H17.5V24.5H21V21H24.5V17.5H28V14H31.5V10.5H35V7H31.5V3.5H28V0ZM28 14H24.5V17.5H21V21H17.5V24.5H14V28H10.5V24.5H7V21H10.5V17.5H14V14H17.5V10.5H21V7H24.5V10.5H28V14ZM7 24.5H3.5V31.5H10.5V28H7V24.5Z" fill="#7D9AA1"/>
                            </g>
                    </svg>
                        <div className="text-secondary-content text-xl sm:text-2xl lg:text-3xl font-normal font-handwriting">
                            <h2>Art and Drawing</h2>
                        </div>
                    </div>
                    <div className="text-black text-base sm:text-lg lg:text-xl font-normal font-mono">
                        <p>I have a strong passion for art and enjoy drawing in my free time. Toward the end of 2021, I began selling some of my work, creating personalized illustrations of people, pets, and cars. Starting near the holiday season helped me build momentum, and I completed 100 orders within the first three months, with most requests being for portraits of people and pets. As I entered my final year of school, I had to scale back to focus more on academics, though I still enjoyed taking on occasional projects. These days, I still love creating art, focusing mainly on car illustrations, which I often make for friends and family.</p>
                    </div>
                        <div>
                            <Link to={`https://www.instagram.com/designsbyclo_/profilecard/?igsh=eTE3bGNkMDFtaDA2`}>
                                <button className="btn btn-primary btn-lg no-animation text-accent">View My Instagram</button>
                            </Link>
                        </div>

                    {/* Carousel */}
                    <div className="carousel w-full">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img
                            src={car01}
                            alt='Drawing 1'
                            className="w-full" />
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img
                            src={people01}
                            alt='Drawing 2'
                            className="w-full" />
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img
                            src={car04}
                            alt='Drawing 3'
                            className="w-full" />
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <img
                            src={people02}
                            alt='Drawing 4'
                            className="w-full" />
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        {/* <div id="slide5" className="carousel-item relative w-full">
                            <img
                            src={car03}
                            className="w-full" />
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div> */}
                        {/* <div id="slide6" className="carousel-item relative w-full">
                            <img
                            src={people03}
                            className="w-full" />
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div> */}
                        </div>
                </div>

                {/* Photography */}
                <div className="flex flex-col gap-6 mt-8">
                    <div className="flex items-center gap-3">
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Camera">
                            <path id="Camera_2" d="M12.25 0H8.75V3.88889H0V35H35V3.88889H26.25V0H12.25ZM26.25 7.77778H31.5V31.1111H3.5V7.77778H12.25V3.88889H22.75V7.77778H26.25ZM14 11.6667H21V15.5556H14V11.6667ZM21 23.3333H14V27.2222H21V23.3333H24.5V15.5556H21V23.3333ZM10.5 15.5556H14V23.3333H10.5V15.5556Z" fill="#7D9AA1"/>
                        </g>
                    </svg>
                        <div className="text-secondary-content text-xl sm:text-2xl lg:text-3xl font-normal font-handwriting">
                            <h2>Photography</h2>
                        </div>
                    </div>
                    <div className="text-black text-base sm:text-lg lg:text-xl font-normal font-mono">
                        <p>I have a passion for photography and enjoy capturing a variety of subjects, especially nature and animals. I love going on hikes with my camera, taking the opportunity to snap a few shots along the way.</p>
                    </div>
                    <div>
                        <Link to={`https://www.instagram.com/chloe.dwyer_photography/profilecard/?igsh=ZmV0cG9zZmQ0MzNy`}>
                            <button className="btn btn-primary btn-lg no-animation text-accent">View My Instagram</button>
                        </Link>
                    </div>

                    {/* Caraousel */}
                    <div className="carousel w-full">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img
                            src={photo01}
                            alt='01'
                            className="w-full" />
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img
                            src={photo02}
                            alt='02'
                            className="w-full" />
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img
                            src={photo03}
                            alt='03'
                            className="w-full" />
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <img
                            src={photo04}
                            alt='04'
                            className="w-full" />
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    </div>

        </>
    )
};

export default About;