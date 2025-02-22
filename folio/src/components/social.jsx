import twitter from "../assets/twitter icon.png";
import linkedin from "../assets/linkedin icon.png";
import github from "../assets/github icon.png";
import instagram from "../assets/instagram icon.png";
import medium from "../assets/medium icon.png";

function Social() {
  return (
    <div className="justify-center">
      <div className="flex items-center justify-center pb-0 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14">
        <div className="h-[1px] bg-[#e9e9e9] flex-grow mr-4" />
        <div className="font-[Fredoka] text-[#9e9e9e] text-[15px] sm:text-xl">socials</div>
        <div className="h-[1px] bg-[#e9e9e9] flex-grow ml-4" />
    </div>

      <div className="grid grid-cols-5 gap-1 sm:gap-1 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-2 mx-6 sm:mx-40 md:mx-50 lg:mx-60 xl:mx-70 2xl:mx-80 mt-5 mb-5 p-2 justify-center justify-items-center ">
        <div className="p-2 sm:p-3 size-10 sm:size-12 rounded-[10px] bg-white hover:scale-110  flex-auto shadow-md shadow-gray-100">
          <a href="https://x.com/atharv_rem" target="_blank" rel="noreferrer">
            <img src={twitter} alt="X logo" className="aspect-square object-center" />
          </a>
        </div>
        <div className="p-2 sm:p-3 size-10 sm:size-12 rounded-[10px]  bg-white hover:scale-110  flex-auto shadow-md shadow-gray-100">
          <a href="https://www.instagram.com/atharv_remeshan" target="_blank" rel="noreferrer">
            <img src={instagram} alt="Instagram logo" className="aspect-square object-center" />
          </a>
        </div>
        <div className="p-2 sm:p-3 size-10 sm:size-12 rounded-[10px]  bg-white hover:scale-110  flex-auto shadow-md shadow-gray-100">
          <a href="https://github.com/atharv-rem" target="_blank" rel="noreferrer">
            <img src={github} alt="GitHub logo" className="aspect-square object-center" />
          </a>
        </div>
        <div className="p-2 sm:p-3 size-10 sm:size-12 rounded-[10px]  bg-white hover:scale-110  flex-auto shadow-md shadow-gray-100">
          <a href="https://www.linkedin.com/in/atharv-rem" target="_blank" rel="noreferrer">
            <img src={linkedin} alt="LinkedIn logo" className="aspect-square object-center" />
          </a>
        </div>
        <div className="p-2 sm:p-3 size-10 sm:size-12 rounded-[10px]  bg-white hover:scale-110  flex-auto shadow-md shadow-gray-100">
          <a href="https://medium.com/@atharv.rem" target="_blank" rel="noreferrer">
            <img src={medium} alt="Medium logo" className="aspect-square object-center" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Social;