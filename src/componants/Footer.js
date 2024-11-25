const Footer = () => {
    return (
        <>
        <div className="w-full px-10 sm:px-8 md:px-16 lg:px-32 py-10 bg-secondary flex flex-col md:flex-row justify-center items-center gap-20 ">
            <div className="text-center md:text-left text-accent text-[35px] sm:text-[45px] md:text-[55px] lg:text-[75px] font-normal">
                <h2>Let’s be friends :)</h2>
            </div>
            <div className="w-full md:w-auto flex flex-col justify-start items-start gap-4 font-mono">
                <div className="flex items-center gap-4">
                    <div className="w-[25px] h-[25px] bg-gray-200 rounded-full">
                        {/* <img src="../icons/Email.png"></img> */}
                    </div>
                    <div className="text-accent text-[16px] sm:text-[18px] md:text-[20px] lg:text-[25px] font-normal">
                        <p>chloedwyer2003@gmail.com</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-[25px] h-[25px] bg-gray-200 rounded-full" />
                    <div className="text-[#fafaf7] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[25px] font-normal">
                        <p>(085) 776 5393</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-[25px] h-[25px] bg-gray-200 rounded-full" />
                    <a 
                        href="https://github.com/clo12358" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[#fafaf7] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[25px] font-normal underline"
                    >
                        https://github.com/clo12358
                    </a>
                </div>
            </div>
        </div>
        </>
    );
}

export default Footer;
