import sidebar from '../assets/sidebar.svg';
import close from '../assets/x.svg';
import { useState } from 'react';

function Navbar() {
    const [nav, setnav] = useState(false);
    const handlenav = () => {
      setnav(!nav);
    }

    return (
      <>
      <div className="overscroll-contain flex mt-0 mr-2 ml-2 rounded-xl backdrop-blur-md sticky top-0 z-50 h-12 items-center">
        <div className="flex-auto flex justify-left items-center pl-2">
          <span className="flex justify-center items-center size-1 sm:size-1 md:size-1.25 lg:size-1.5 xl:size-1.5 2xl:size-1.5 animate-ping rounded-full bg-emerald-600 opacity-75"></span>
          <p className="text-[#8a8a8a] font-[Sen] font-bold pr-14 pl-2 2xl:text-2xl xl:text-xl lg:text-lg md:text-lg sm:text-md text-lg ">Mumbai, India</p>
        </div>

        {/* desktop view */}
        <div className="flex justify-right items-center hidden sm:hidden md:block">
          <div>
            <ul className="flex space-x-2">
              <li>
                <a href="#home" className="hover:text-black hover:drop-shadow-sm hover:scale-105 text-[#8a8a8a] pr-4 pl-2 font-[Sen] font-bold 2xl:text-2xl xl:text-xl lg:text-lg md:text-md sm:text-sm inline-flex">
                  Home
                </a>
              </li>
              <li >
                <a href="#extras" className="hover:text-black hover:drop-shadow-sm hover:scale-105 text-[#8a8a8a] pr-4 pl-2 font-[Sen] font-bold 2xl:text-2xl xl:text-xl lg:text-lg md:text-md sm:text-sm  inline-flex">
                  Extras
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-black hover:drop-shadow-sm hover:scale-105 text-[#8a8a8a] pr-4 pl-2 font-[Sen] font-bold 2xl:text-2xl xl:text-xl lg:text-lg md:text-md sm:text-sm inline-flex">
                  Projects
                </a>
              </li>
              <li >
                <a href="#contact" className="hover:text-black hover:drop-shadow-sm hover:scale-105 text-[#8a8a8a] pr-4 pl-2 font-[Sen] font-bold 2xl:text-2xl xl:text-xl lg:text-lg md:text-md sm:text-sm inline-flex">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* mobile view */}
        <div onClick={handlenav} className="cursor-pointer md:hidden overscroll-contain overflow-hidden">
          {nav ? (
            <img src={sidebar} alt="sidebar icon" className="size-7 m-4 hidden" />
            ) : (
            <img src={sidebar} alt="sidebar icon" className="size-7 m-4" />
          )}
        </div>

        {nav && (
                <div className="fixed right-4 top-4 bg-white rounded-xl shadow-lg flex p-4 overscroll-contain overflow-hidden z-10">
                    
                    <ul>
                        <li className="p-4">
                            <a href="#home" className="text-[#8a8a8a] font-[Sen] font-bold">
                                Home
                            </a>
                        </li>
                        <li className="p-4">
                            <a href="#extras" className="text-[#8a8a8a] font-[Sen] font-bold">
                                Extras
                            </a>
                        </li>
                        <li className="p-4">
                            <a href="#projects" className="text-[#8a8a8a] font-[Sen] font-bold">
                                Projects
                            </a>
                        </li>
                        <li className="p-4">
                            <a href="#contact" className="text-[#8a8a8a] font-[Sen] font-bold">
                                Contact
                            </a>
                        </li>
                    </ul>

                    <div onClick={handlenav} className="cursor-pointer md:hidden">
                      {nav ? (
                         <img src={close} alt="close icon" className="size-5 m-4"/>
                         ) : null}
                    </div>
                    
                </div>
        )}
      </div>
      </>
    );
  }
  
  export default Navbar;