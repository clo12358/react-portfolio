import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full py-4 bg-[#dce8e5] text-[#637c82] shadow-md">
      <div className="max-w-6xl mx-auto flex justify-center items-center gap-6">
        {/* Projects Button */}
        <Link to="/projects">
          <button className="px-4 py-2 rounded-xl font-medium hover:text-[#37514c] transition duration-300">
            Projects
          </button>
        </Link>

        {/* About Me Button */}
        <Link to="/about">
          <button className="px-4 py-2 rounded-xl font-medium hover:text-[#37514c] transition duration-300">
            About Me
          </button>
        </Link>

        {/* Contact Me Button */}
        <button
          className="px-4 py-2 rounded-xl font-medium hover:text-[#37514c] transition duration-300"
          onClick={() => document.getElementById("contactModal").showModal()}
        >
          Contact Me
        </button>

        {/* LinkedIn Button */}
        <a
          href="https://www.linkedin.com/in/chloe-dwyer-548b42272/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-xl font-medium border border-[#637c82] hover:text-[#37514c] transition duration-300"
        >
          LinkedIn
        </a>
      </div>

      {/* Contact Modal */}
      <dialog
        id="contactModal"
        className="modal bg-[#dce8e5] text-[#637c82]"
      >
        <div className="modal-box text-center">
          <h3 className="font-bold text-4xl font-handwriting drop-shadow-md">
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
                  fill="#637c82"
                />
              </svg>
              <p className="text-[#637c82] text-lg">(+353) 85 776 5393</p>
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
                  fill="#637c82"
                />
              </svg>
              <p className="text-[#637c82] text-lg">chloedwyer2003@gmail.com</p>
            </div>
          </div>

          <div className="modal-action">
            <form method="dialog">
              <button className="px-6 py-2 rounded-xl font-medium border border-[#637c82] hover:text-[#37514c] transition duration-300">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </nav>
  );
};

export default Navbar;
