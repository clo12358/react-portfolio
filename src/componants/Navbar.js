import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-accent px-4 sm:px-8 md:px-12 lg:px-16">
            {/* Logo and LinkedIn */}
            <div className="flex-1 flex items-center gap-4">
                {/* Logo */}
                <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        alt="Logo"
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* LinkedIn Button */}
                <Link to="https://www.linkedin.com/in/chloe-dwyer-548b42272/">
                    <button className="btn btn-accent no-animation text-primary border-none hover:bg-primary hover:text-accent transition duration-300">
                        LinkedIn
                    </button>
                </Link>
            </div>

            {/* Navbar Actions */}
            <div className="flex items-center gap-4">
                {/* Projects Button */}
                <Link to="/projects">
                    <button className="btn btn-accent no-animation text-primary border-none hover:bg-primary hover:text-accent transition duration-300">
                        Projects
                    </button>
                </Link>

                {/* Search Bar */}
                <div className="form-control hidden md:block">
                    <input
                        type="text"
                        placeholder="Search"
                        className="input input-bordered w-full max-w-xs bg-accent text-primary placeholder-primary focus:outline-none focus:border-primary"
                    />
                </div>

                {/* Contact Me Button */}
                <button
                    className="btn btn-accent no-animation text-primary border-none hover:bg-primary hover:text-accent transition duration-300"
                    onClick={() => document.getElementById('contactModal').showModal()}
                >
                    Contact Me
                </button>

                {/* Contact Modal */}
                <dialog id="contactModal" className="modal">
                    <div className="modal-box bg-accent text-center">
                        <h3 className="font-bold text-4xl font-handwriting text-primary">
                            Let’s Get in Touch
                        </h3>

                        <div className="divider"></div>

                        <div className="flex flex-col items-center gap-6">
                            {/* Phone */}
                            <div className="flex items-center gap-4">
                                <svg
                                    width="25"
                                    height="26"
                                    viewBox="0 0 25 26"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0 0.5H25V25.5H0V0.5ZM20.8333 22.7222V3.27778H16.6667V6.05556H8.33333V3.27778H4.16667V22.7222H20.8333ZM10.4167 17.1667H14.5833V19.9444H10.4167V17.1667Z"
                                        fill="#7D9AA1"
                                    />
                                </svg>
                                <p className="text-primary text-lg">(+353) 85 776 5393</p>
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-4">
                                <svg
                                    width="25"
                                    height="26"
                                    viewBox="0 0 25 26"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0 2.16667H1.25V0.5H23.75V2.16667H25V23.8333H23.75V25.5H1.25V23.8333H0V2.16667ZM2.5 22.1667H22.5V8.83333H21.25V10.5H18.75V12.1667H16.25V13.8333H13.75V15.5H11.25V13.8333H8.75V12.1667H6.25V10.5H3.75V8.83333H2.5V22.1667ZM22.5 3.83333H2.5V5.5H5V7.16667H7.5V8.83333H10V10.5H15V8.83333H17.5V7.16667H20V5.5H22.5V3.83333Z"
                                        fill="#7D9AA1"
                                    />
                                </svg>
                                <p className="text-primary text-lg">chloedwyer2003@gmail.com</p>
                            </div>
                        </div>

                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn btn-primary no-animation text-accent hover:bg-primary-content hover:text-white">
                                    Close
                                </button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default Navbar;
