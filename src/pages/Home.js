const Home = () => {
    return (
        <>
       {/* First Part */}
        <div className="h-[710px] px-4 sm:px-8 md:px-16 py-[120px] bg-[#fafaf7] flex justify-center items-center">
            <div className="w-full max-w-screen-lg flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
                <div className="w-full md:w-1/2 flex flex-col justify-center items-center gap-4">
                    <div className="text-center text-[#abdbae] text-[50px] sm:text-[70px] md:text-[90px] lg:text-[110px] font-normal font-['Myhandwriting']">
                        Hey, I’m Chloe
                    </div>
                    <div className="text-center text-[#7d9aa1] text-[20px] sm:text-[25px] md:text-[30px] lg:text-[35px] font-normal font-['Myhandwriting']">
                        I’m a third-year Creative Computing student in IADT.
                    </div>
                    <div className="px-4 py-2 bg-[#abdbae] rounded-md flex justify-center items-center">
                        <div className="text-[#fafaf7] text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal font-['Myhandwriting']">
                            Get to know me :)
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-[470px] relative bg-[#d9d9d9] rounded-md" />
            </div>
        </div>

        {/* Second Part */}
        <div className="h-auto px-4 sm:px-8 md:px-16 lg:px-32 py-10 bg-primary flex flex-col justify-start items-center gap-8">
            <div className="text-center text-[#fafaf7] text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] font-semibold font-['Aleo']">
                Some of my projects...
            </div>
            <div className="w-full flex justify-center gap-8 flex-wrap">
                <div className="w-full sm:w-[200px] md:w-[300px] lg:w-[400px] h-[200px] sm:h-[250px] md:h-[300px] px-6 sm:px-12 md:px-20 bg-[#d9d9d9] rounded-md flex justify-center items-center">
                    <div className="text-center text-black text-[30px] sm:text-[40px] md:text-[50px] font-semibold font-['Aleo']">
                        Project 1
                    </div>
                </div>
                <div className="w-full sm:w-[200px] md:w-[300px] lg:w-[400px] h-[200px] sm:h-[250px] md:h-[300px] px-6 sm:px-12 md:px-20 bg-[#d9d9d9] rounded-md flex justify-center items-center">
                    <div className="text-center text-black text-[30px] sm:text-[40px] md:text-[50px] font-semibold font-['Aleo']">
                        Project 2
                    </div>
                </div>
            </div>
        </div>



        </>
    )
};

export default Home;