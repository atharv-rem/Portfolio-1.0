function Navbar() {
    return (
      <>
      <div className="overscroll-contain flex mt-0 mr-2 ml-2 rounded-xl backdrop-blur-md sticky top-0 z-50 h-12">
        <div className="flex-auto flex justify-left items-center pl-2">
          <span className="flex justify-center items-center h-1 w-1 animate-ping rounded-full bg-emerald-600 opacity-75"></span>
          <p className="text-[#8a8a8a] text-sm font-[Sen] font-bold pr-14 pl-2 2xl:font-4xl xl:font-4xl lg:font-3xl md:font-2xl sm:font-2xl ">Mumbai, India</p>
        </div>
        <nav className="flex justify-right items-center">
          <div>
            <ul className="flex space-x-2">
              <li>
                <a href="#home" className="hover:text-black hover:drop-shadow-sm hover:scale-105 text-[#8a8a8a] pr-4 pl-2 font-[Sen] font-bold text-sm transition-all duration-300 ease-in-out inline-flex">
              Home
                </a>
              </li>
              <li >
                <a href="#extras" className="hover:text-black hover:drop-shadow-sm hover:scale-105 text-[#8a8a8a] pr-4 pl-2 font-[Sen] font-bold text-sm transition-all duration-300 ease-in-out inline-flex">
                  Extras
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-black hover:drop-shadow-sm hover:scale-105 text-[#8a8a8a] pr-4 pl-2 font-[Sen] font-bold text-sm transition-all duration-300 ease-in-out inline-flex">
                  Projects
                </a>
              </li>
              <li >
                <a href="#contact" className="hover:text-black hover:drop-shadow-sm hover:scale-105 text-[#8a8a8a] pr-4 pl-2 font-[Sen] font-bold text-sm transition-all duration-300 ease-in-out inline-flex">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      </>
    );
  }
  
  export default Navbar;