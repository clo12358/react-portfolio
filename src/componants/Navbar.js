import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full py-4 bg-[#dce8e5] text-[#637c82] shadow-md backdrop-blur-md">
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
      <dialog id="contactModal" className="modal">
        <div className="modal-box bg-[#fafaf7]/90 backdrop-blur-md border border-white/40 rounded-3xl shadow-2xl p-10 max-w-lg mx-auto text-center">
          {/* Header */}
          <h3 className="font-handwriting text-4xl text-[#637c82] drop-shadow-md mb-2">
            Let’s Get in Touch
          </h3>
          <p className="text-[#637c82]/80 text-base mb-6">
            I’d love to hear from you! Whether it’s a project idea, question, or
            collaboration — feel free to reach out.
          </p>

          <div className="flex flex-col items-center gap-6 mt-4">

            {/* Email */}
            <div className="flex items-center gap-4 bg-white/50 backdrop-blur-sm border border-white/40 px-5 py-3 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.08334 4.16667H22.9167C23.4629 4.16667 23.9583 4.66205 23.9583 5.20833V19.7917C23.9583 20.338 23.4629 20.8333 22.9167 20.8333H2.08334C1.53705 20.8333 1.04167 20.338 1.04167 19.7917V5.20833C1.04167 4.66205 1.53705 4.16667 2.08334 4.16667ZM12.5 12.5L22.9167 6.25V5.20833L12.5 11.4583L2.08334 5.20833V6.25L12.5 12.5Z"
                  fill="#637c82"
                />
              </svg>
              <p className="text-[#637c82] text-lg font-medium break-all">
                chloedwyer2003@gmail.com
              </p>
            </div>
          </div>

          {/* Action Button */}
          <div className="modal-action flex justify-center mt-8">
            <form method="dialog">
              <button className="px-8 py-3 bg-white/60 backdrop-blur-md border border-[#637c82]/30 rounded-xl text-[#637c82] font-medium shadow-md hover:bg-[#dce8e5]/70 hover:shadow-lg hover:scale-105 transition-all duration-300">
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
