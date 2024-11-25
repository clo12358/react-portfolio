const Home = () => {
    return (
        <>
       {/* First Part */}
        <div className="h-100 px-4 sm:px-8 md:px-16 py-20 bg-accent flex justify-center items-center flex flex-col md:flex-row gap-10">
                <div className="w-full md:w-1/2 flex flex-col justify-center items-center gap-5">
                    {/* Text */}
                    <div className="text-center text-primary text-[50px] sm:text-[70px] md:text-[90px] lg:text-[110px] font-handwriting">
                        <h1>
                            Hey, I'm Chloe
                        </h1>
                    </div>
                    
                    <div className="text-center text-secondary-content text-[20px] sm:text-[25px] md:text-[30px] lg:text-[35px] font-handwriting">
                        <p>
                            I’m a third-year Creative Computing student in IADT.
                        </p>
                    </div>
                    <button className="btn btn-primary btn-lg no-animation text-accent">Get to know me :)</button>
                </div>
                {/* Image */}
                <div className="w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-[470px] relative bg-[#d9d9d9] rounded-md"></div>
        </div>

        {/* Second Part */}
        <div className="h-auto px-4 sm:px-8 md:px-16 lg:px-32 py-10 bg-primary flex flex-col justify-start items-center gap-8 md:flex-col">
            <div className="text-center text-accent text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-semibold font-mono">
                <h1>Some of my projects...</h1>
            </div>
            <div className="w-full flex justify-center gap-8 flex-wrap">
                <div className="w-full sm:w-[500px] md:w-[600px] lg:w-[700px] h-[200px] sm:h-[250px] md:h-[300px] px-6 sm:px-12 md:px-20 bg-[#d9d9d9] rounded-md flex justify-center items-center">
                </div>
                <div className="w-full sm:w-[500px] md:w-[600px] lg:w-[700px] h-[200px] sm:h-[250px] md:h-[300px] px-6 sm:px-12 md:px-20 bg-[#d9d9d9] rounded-md flex justify-center items-center">
                </div>
            </div>
        </div>



        </>
    )
};

export default Home;