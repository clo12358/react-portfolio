import {  Link  } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-accent">
            {/* LinkedIn Button */}
            <div className="flex-1">
                {/* Logo Image */}
            <div className="w-12 rounded">
                <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="Tailwind-CSS-Avatar-component" />
            </div>
                <Link to={`https://www.linkedin.com/in/chloe-dwyer-548b42272/`}>
                    <button className="btn no-animation btn-accent text-primary hover:bg-primary hover:text-accent active:bg-primary-content">LinkedIn</button>
                </Link>
            </div>
            <div className='gap-2'>
                {/* Projects Button */}
                <div>
                    <Link to={"/projects"}>
                        <button className="btn no-animation btn-accent text-primary hover:bg-primary hover:text-accent active:bg-primary-content">Projects</button>
                    </Link>
                </div>
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto bg-accent" />
                </div>
                {/* Contact Me Button */}
                <div>
                    <button className="btn no-animation btn-accent text-primary hover:bg-primary hover:text-accent active:bg-primary-content" onClick={()=>document.getElementById('my_modal_1').showModal()}>Contact Me</button>
                        <dialog id="my_modal_1" className="modal">
                        <div className="modal-box bg-accent flex flex-col items-center justify-center text-center">
                            <h3 className="font-bold text-5xl font-handwriting text-primary">Lets get in touch</h3>

                            <div className="divider divider-secondary"></div>

                            <div className="flex items-center gap-4">
                                <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Phone">
                                        <path id="Phone_2" d="M0 0.5H25V25.5H0V0.5ZM20.8333 22.7222V3.27778H16.6667V6.05556H8.33333V3.27778H4.16667V22.7222H20.8333ZM10.4167 17.1667H14.5833V19.9444H10.4167V17.1667Z" fill="#7D9AA1"/>
                                    </g>
                                </svg>

                                <div className="text-black text-[16px] sm:text-[18px] md:text-[20px] lg:text-[25px] font-normal">
                                    <p>(085) 776 5393</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Email">
                                        <path id="Email_2" d="M0 2.16667H1.25V0.5H23.75V2.16667H25V23.8333H23.75V25.5H1.25V23.8333H0V2.16667ZM2.5 22.1667H22.5V8.83333H21.25V10.5H18.75V12.1667H16.25V13.8333H13.75V15.5H11.25V13.8333H8.75V12.1667H6.25V10.5H3.75V8.83333H2.5V22.1667ZM22.5 3.83333H2.5V5.5H5V7.16667H7.5V8.83333H10V10.5H15V8.83333H17.5V7.16667H20V5.5H22.5V3.83333Z" fill="#7D9AA1"/>
                                    </g>
                                </svg>

                                <div className="text-black text-[16px] sm:text-[18px] md:text-[20px] lg:text-[25px] font-normal">
                                    <p>chloedwyer2003@gmail.com</p>
                                </div>
                            </div>

                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn no-animation btn-accent text-primary hover:bg-primary hover:text-accent active:bg-primary-content">Close</button>
                                </form>
                            </div>
                        </div>

                        </dialog>
                </div>
            </div>

        </div>
    );
};

export default Navbar;