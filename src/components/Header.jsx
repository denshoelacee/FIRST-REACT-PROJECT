function Header() {
  return (
    <div className="w-full bg-[#070524] h-32  place-content-center " data-aos="fade-up">
      <div className="w-full max-w-xl mx-auto px-4">
        <header className="border flex justify-center items-center h-16 gap-3 sm:gap-8 md:gap-10 text-white rounded-lg 
          bg-white/10 border-white/20 backdrop-blur-md shadow-lg">
          <a
            href="#projects"
            className="text-xs sm:text-base md:text-sm px-1 sm:px-3 py-1.5 sm:py-2 hover:bg-emerald-500/40 hover:scale-110 transition-all duration-300 rounded-lg"
          >
            PROJECTS
          </a>
          <a
            href="#experience"
            className="text-xs sm:text-base md:text-sm  px-1 sm:px-3 py-1.5 sm:py-2 hover:bg-emerald-500/40 hover:scale-110 transition-all duration-300 rounded-lg"
          >
            EXPERIENCE
          </a>
          <a
            href="#skills"
            className="text-xs sm:text-base md:text-sm px-1 sm:px-3 py-1.5 sm:py-2 hover:bg-emerald-500/40 hover:scale-110 transition-all duration-300 rounded-lg"
          >
            SKILLS
          </a>
          <a
            href="#contacts"
            className="text-xs sm:text-base md:text-sm  px-1 sm:px-3 py-1.5 sm:py-2 hover:bg-emerald-500/40 hover:scale-110 transition-all duration-300 rounded-lg"
          >
            CONTACT
          </a>
        </header>
      </div>
    </div>
  )
}

export default Header
