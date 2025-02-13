function Navbar() {
    return (
      <div className="flex mt-2 mr-2 ml-2 rounded-xl backdrop-blur-md sticky top-0 z-50">
        <div className="flex-auto flex justify-left items-center pl-2">
          <span className="flex justify-center items-center h-1 w-1 animate-ping rounded-full bg-black opacity-75"></span>
          <p className="text-[#8a8a8a] text-sm font-[Sen] font-bold pr-14 pl-2">Mumbai, India</p>
        </div>
        <nav className="inline-flex justify-right items-center">
          <div>
            <ul className="flex space-x-2">
              <li>
                <a href="#Home" className="hover:text-black hover:drop-shadow-sm hover:translate-y-1 hover:scale-105 text-[#8a8a8a] pr-4 pl-2 font-[Sen] font-bold text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#About" className="hover:text-black hover:drop-shadow-sm hover:translate-y-1 hover:scale-105 text-[#8a8a8a] px-4 font-[Sen] font-bold text-sm">
                  Extras
                </a>
              </li>
              <li>
                <a href="#Projects" className="hover:text-black hover:drop-shadow-sm hover:translate-y-1 hover:scale-105 text-[#8a8a8a] px-4 font-[Sen] font-bold text-sm">
                  Projects
                </a>
              </li>
              <li>
                <a href="#Contact" className="hover:text-black hover:drop-shadow-sm hover:translate-y-1 hover:scale-105 text-[#8a8a8a] pl-4 pr-2 font-[Sen] font-bold text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
  
  export default Navbar;