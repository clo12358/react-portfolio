const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-primary via-accent to-secondary text-[#333] py-12 px-6 sm:px-12 md:px-20 lg:px-32 relative">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-6 md:gap-10 relative z-10">

        {/* Heading Section */}
        <div className="bg-white/10 p-4 rounded-xl backdrop-blur-md">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-handwriting drop-shadow-md mb-2 text-white">
            Let’s be friends :)
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-xl mx-auto leading-relaxed">
            I’d love to hear from you — whether you’re interested in collaborating,
            chatting about projects, or just saying hi!
          </p>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-8 text-white">
          {/* Email */}
          <a
            href="mailto:chloedwyer2003@gmail.com"
            className="flex items-center gap-2 sm:gap-3 hover:text-accent transition duration-300"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 25 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 4.5H22.5V21.5H2.5V4.5ZM22.5 4.5L12.5 13L2.5 4.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm sm:text-base md:text-lg font-medium break-words">
              chloedwyer2003@gmail.com
            </span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/clo12358"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 sm:gap-3 hover:text-accent transition duration-300"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 0.5C5.6 0.5 0 6.1 0 13C0 18.4 3.6 23 8.5 24.5C9 24.6 9.2 24.3 9.2 24V21.7C5.8 22.5 5.1 20.1 5.1 20.1C4.7 18.9 4.1 18.6 4.1 18.6C3.2 18 4.2 18.1 4.2 18.1C5.3 18.2 5.9 19.2 5.9 19.2C6.8 20.8 8.4 20.4 9 20.1C9.1 19.4 9.4 18.9 9.7 18.6C7.1 18.3 4.3 17.2 4.3 12.5C4.3 11.2 4.8 10.1 5.6 9.2C5.5 8.9 5.1 7.7 5.7 6C5.7 6 6.8 5.6 9.2 7.2C10.3 6.9 11.4 6.8 12.5 6.8C13.6 6.8 14.7 6.9 15.8 7.2C18.2 5.6 19.3 6 19.3 6C19.9 7.7 19.5 8.9 19.4 9.2C20.2 10.1 20.7 11.2 20.7 12.5C20.7 17.2 17.9 18.3 15.3 18.6C15.7 19 16 19.7 16 20.7V24C16 24.3 16.2 24.6 16.7 24.5C21.6 23 25.2 18.4 25.2 13C25 6.1 19.4 0.5 12.5 0.5Z"
                fill="currentColor"
              />
            </svg>
            <span className="text-sm sm:text-base md:text-lg font-medium underline underline-offset-4 decoration-white/40 hover:decoration-accent">
              github.com/clo12358
            </span>
          </a>
        </div>

        {/* Bottom line */}
        <div className="pt-6 border-t border-white/30 w-full text-xs sm:text-sm md:text-base text-white/70">
          © {new Date().getFullYear()} Chloe Dwyer — Designed & Built with 💻 + ☕
        </div>
      </div>

      <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
