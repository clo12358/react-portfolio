// import email from '../icons/';

const Footer = () => {
    return (
        <>
        <div className="w-full px-10 sm:px-8 md:px-16 lg:px-32 py-10 bg-secondary flex flex-col md:flex-row justify-center items-center gap-[300px] ">
            <div className="text-center md:text-left text-accent text-[30px] sm:text-[35px] md:text-[45px] lg:text-[50px] font-handwriting">
                <h2>Let’s be friends :)</h2>
            </div>
            <div className="w-full md:w-auto flex flex-col justify-start items-start gap-4 font-mono">
                <div className="flex items-center gap-4">
                <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Email">
                        <path id="Email_2" d="M0 2.16667H1.25V0.5H23.75V2.16667H25V23.8333H23.75V25.5H1.25V23.8333H0V2.16667ZM2.5 22.1667H22.5V8.83333H21.25V10.5H18.75V12.1667H16.25V13.8333H13.75V15.5H11.25V13.8333H8.75V12.1667H6.25V10.5H3.75V8.83333H2.5V22.1667ZM22.5 3.83333H2.5V5.5H5V7.16667H7.5V8.83333H10V10.5H15V8.83333H17.5V7.16667H20V5.5H22.5V3.83333Z" fill="#7D9AA1"/>
                    </g>
                </svg>
                    <div className="text-accent text-[16px] sm:text-[18px] md:text-[20px] lg:text-[25px] font-normal">
                        <p>chloedwyer2003@gmail.com</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Phone">
                        <path id="Phone_2" d="M0 0.5H25V25.5H0V0.5ZM20.8333 22.7222V3.27778H16.6667V6.05556H8.33333V3.27778H4.16667V22.7222H20.8333ZM10.4167 17.1667H14.5833V19.9444H10.4167V17.1667Z" fill="#7D9AA1"/>
                    </g>
                </svg>

                    <div className="text-accent text-[16px] sm:text-[18px] md:text-[20px] lg:text-[25px] font-mono">
                        <p>(085) 776 5393</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Github">
                        <path id="Vector" d="M5 0.5H10V3H7.5V5.5H5V0.5ZM5 13H2.5V5.5H5V13ZM7.5 15.5H5V13H7.5V15.5ZM10 18V15.5H7.5V18H2.5V15.5H0V18H2.5V20.5H7.5V25.5H10V20.5H12.5V18H10ZM10 18V20.5H7.5V18H10ZM17.5 3V5.5H10V3H17.5ZM22.5 5.5H20V3H17.5V0.5H22.5V5.5ZM22.5 13V5.5H25V13H22.5ZM20 15.5V13H22.5V15.5H20ZM17.5 18V15.5H20V18H17.5ZM17.5 20.5H15V18H17.5V20.5ZM17.5 20.5H20V25.5H17.5V20.5Z" fill="#7D9AA1"/>
                    </g>
                </svg>
                    <a 
                        href="https://github.com/clo12358" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-accent text-[16px] sm:text-[18px] md:text-[20px] lg:text-[25px] font-normal underline"
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
