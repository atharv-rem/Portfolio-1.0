import react from "../assets/react icon.png";
import tailwind from "../assets/tailwind icon.png";
import figma from "../assets/figma icon.png";
import framer from "../assets/framer icon.png";
import python from "../assets/python icon.png";
import plus from "../assets/plus icon.png";

function Stack() {
  return (
    <>
      <div className="flex items-center justify-center pb-0 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14">
        <div className="h-[1px] bg-[#e9e9e9] flex-grow mr-4" />
        <div className="font-[Fredoka] text-[#9e9e9e] text-[15px] sm:text-xl">stack</div>
        <div className="h-[1px] bg-[#e9e9e9] flex-grow ml-4" />
      </div>

      <div className="grid grid-cols-5 gap-y-4 sm:gap-x-1 md:gap-x-2 lg:gap-x-2 xl:gap-x-2 2xl:gap-x-2 mx-6 sm:mx-40 md:mx-50 lg:mx-60 xl:mx-70 2xl:mx-80 mt-5 mb-5 p-2 justify-center justify-items-center">
        <div className="p-2 sm:p-2 size-10 sm:size-12 rounded-[10px] border-[1px] bg-white border-[#dfdfdf] hover:scale-105 transition-transform duration-300 ease-in-out flex-auto">
          <img src={react} alt="React logo" className="aspect-square object-center" />
        </div>
        <div className="p-2 sm:p-2 size-10 sm:size-12 rounded-[10px] border-[1px] bg-white border-[#dfdfdf] hover:scale-105 transition-transform duration-300 ease-in-out flex-auto">
          <img src={tailwind} alt="Tailwind CSS logo" className="aspect-square object-center" />
        </div>
        <div className="p-2 sm:p-2 size-10 sm:size-12 rounded-[10px] border-[1px] bg-white border-[#dfdfdf] hover:scale-105 transition-transform duration-300 ease-in-out flex-auto">
          <img src={figma} alt="Figma logo" className="aspect-square object-center" />
        </div>
        <div className="p-2 sm:p-2 size-10 sm:size-12 rounded-[10px] border-[1px] bg-white border-[#dfdfdf] hover:scale-105 transition-transform duration-300 ease-in-out flex-auto">
          <img src={framer} alt="Framer logo" className="aspect-square object-center" />
        </div>
        <div className="p-2 sm:p-2 size-10 sm:size-12 rounded-[10px] border-[1px] bg-white border-[#dfdfdf] hover:scale-105 transition-transform duration-300 ease-in-out flex-auto">
          <img src={python} alt="Python logo" className="aspect-square object-center" />
        </div>
        <div className="p-3 sm:p-2 size-10 sm:size-12 rounded-[10px] border-[1px] bg-white border-[#dfdfdf] hover:scale-105 transition-transform duration-300 ease-in-out flex-auto">
          <img src={plus} alt="Plus icon" className="aspect-square object-center" />
        </div>
        <div className="p-3 sm:p-2 size-10 sm:size-12 rounded-[10px] border-[1px] bg-white border-[#dfdfdf] hover:scale-105 transition-transform duration-300 ease-in-out flex-auto">
          <img src={plus} alt="Plus icon" className="aspect-square object-center" />
        </div>
        <div className="p-3 sm:p-2 size-10 sm:size-12 rounded-[10px] border-[1px] bg-white border-[#dfdfdf] hover:scale-105 transition-transform duration-300 ease-in-out flex-auto">
          <img src={plus} alt="Plus icon" className="aspect-square object-center" />
        </div>
        <div className="p-3 sm:p-2 size-10 sm:size-12 rounded-[10px] border-[1px] bg-white border-[#dfdfdf] hover:scale-105 transition-transform duration-300 ease-in-out flex-auto">
          <img src={plus} alt="Plus icon" className="aspect-square object-center" />
        </div>
        <div className="p-3 sm:p-2 size-10 sm:size-12 rounded-[10px] border-[1px] bg-white border-[#dfdfdf] hover:scale-105 transition-transform duration-300 ease-in-out flex-auto">
          <img src={plus} alt="Plus icon" className="aspect-square object-center" />
        </div>
      </div>
    </>
  );
}

export default Stack;