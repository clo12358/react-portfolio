const Footer = () => {
    return (
        <div className="w-full px-4 sm:px-8 md:px-16 lg:px-32 py-10 bg-[#afd5de] flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left text-[#fafaf7] text-[40px] sm:text-[50px] md:text-[60px] lg:text-[80px] font-normal font-['Myhandwriting']">
                Let’s be friends :)
            </div>
            <div className="w-full md:w-auto flex flex-col justify-start items-start gap-4">
                <div className="flex items-center gap-4">
                    <div className="w-[25px] h-[25px] bg-gray-200 rounded-full" />
                    <div className="text-[#fafaf7] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[25px] font-normal font-['Aleo']">
                        chloedwyer2003@gmail.com
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-[25px] h-[25px] bg-gray-200 rounded-full" />
                    <div className="text-[#fafaf7] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[25px] font-normal font-['Aleo']">
                        (085) 776 5393
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-[25px] h-[25px] bg-gray-200 rounded-full" />
                    <a 
                        href="https://github.com/clo12358" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[#fafaf7] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[25px] font-normal font-['Aleo'] underline"
                    >
                        https://github.com/clo12358
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
