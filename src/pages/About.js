const About = () => {
    return (
        <>
        <div className="min-h-screen px-6 sm:px-8 lg:px-12 py-12 bg-accent flex flex-col justify-center items-center">
            <div className="w-full max-w-screen-lg flex flex-col gap-10">
            {/* Introduction Section */}
            <div className="text-center text-primary-content text-4xl sm:text-5xl lg:text-6xl font-normal font-handwriting">
            Hey, I’m Chloe Dwyer!
            </div>
        
        {/* About Section */}
        <div className="flex flex-col lg:flex-row justify-start items-center gap-10">
            <div className="lg:w-1/2 text-black text-lg sm:text-xl lg:text-2xl font-normal font-handwriting">
                I am extremely passionate about UI/UX design and Front-End Development. I want to be able to turn my ideas into real-world projects!
                <br/><br/>
                I am skilled in Front-End Development with HTML, React, Figma, CSS and frameworks such as Tailwind and Bootstrap. I also have experience in JavaScript, C#, Laravel and p5.js.
            </div>
            <div className="lg:w-1/2 h-64 bg-[#d9d9d9] rounded-md" />
        </div>

        {/* Interests Section */}
        <div>
            <div className="text-primary text-3xl sm:text-4xl lg:text-5xl font-normal font-handwriting">
                <h1>Some of my Interests</h1>
            </div>
            
            {/* Art and Drawing */}
            <div className="flex flex-col gap-6 mt-8">
                <div className="flex items-center gap-3">
                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Pen">
                        <path id="Pen_2" d="M28 0H24.5V3.5H21V7H17.5V10.5H14V14H10.5V17.5H7V21H3.5V24.5H0V35H10.5V31.5H14V28H17.5V24.5H21V21H24.5V17.5H28V14H31.5V10.5H35V7H31.5V3.5H28V0ZM28 14H24.5V17.5H21V21H17.5V24.5H14V28H10.5V24.5H7V21H10.5V17.5H14V14H17.5V10.5H21V7H24.5V10.5H28V14ZM7 24.5H3.5V31.5H10.5V28H7V24.5Z" fill="#7D9AA1"/>
                        </g>
                </svg>
                    <div className="text-secondary-content text-xl sm:text-2xl lg:text-3xl font-normal font-handwriting">
                        Art and Drawing
                    </div>
                </div>
                <div className="text-black text-base sm:text-lg lg:text-xl font-normal font-mono">
                    I have a strong passion for art and enjoy drawing in my free time. Toward the end of 2021, I began selling some of my work, creating personalized illustrations of people, pets, and cars...
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="h-56 bg-[#d9d9d9] rounded-md" />
                    <div className="h-56 bg-[#d9d9d9] rounded-md" />
                    <div className="h-56 bg-[#d9d9d9] rounded-md" />
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
                        Photography
                    </div>
                </div>
                <div className="text-black text-base sm:text-lg lg:text-xl font-normal font-mono">
                    I have a passion for photography and enjoy capturing a variety of subjects, especially nature and animals...
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="h-56 bg-[#d9d9d9] rounded-md" />
                    <div className="h-56 bg-[#d9d9d9] rounded-md" />
                    <div className="h-56 bg-[#d9d9d9] rounded-md" />
                </div>
            </div>
        </div>
    </div>
</div>

        </>
    )
};

export default About;