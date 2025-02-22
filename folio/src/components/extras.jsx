import cheerful from "../assets/Cheerful Man in Maroon Turtleneck.jpeg";
import cloudy from "../assets/contemplative Girl Under Cloudy Sky.jpeg";
import earthy from "../assets/Contemplative Young Man in Earthy Tones.jpeg";
import tattoo from "../assets/Profile of a Young Man with Tattoo.jpeg";
import white from "../assets/Young Man in White Shirt.jpeg";
import couple from "../assets/couple.png";

function Extras() {
    return (
      <>
        <section id="extras">
        <div className="flex items-center justify-center pt-10 pb-0 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14">
            <div className="h-[1px] bg-[#e9e9e9] flex-grow mr-4" />
            <div className="font-[Fredoka] text-[#9e9e9e] text-[15px] sm:text-xl">extras</div>
            <div className="h-[1px] bg-[#e9e9e9] flex-grow ml-4" />
        </div>

        <div>
          <p className="font-[Aleo] font-medium text-black flex flex-col items-start pt-4 pb-0 sm:pb-2 md:pb-2 lg:pb-2 xl:pb-2 2xl:pb-2 p-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14 2xl:text-8xl lg:text-8xl md:text-7xl sm:text-6xl text-5xl mr-[80px]"
          style={{textShadow:"0px 119px 33px rgba(168, 168, 168, 0.00), 0px 76px 30px rgba(168, 168, 168, 0.01), 0px 43px 26px rgba(168, 168, 168, 0.05), 0px 19px 19px rgba(168, 168, 168, 0.09), 0px 5px 10px rgba(168, 168, 168, 0.10)",}}>
            no more <span className="text-[#DA15E1] inline-flex">boring</span> stock photos
          </p>
        </div>

        <div className="font-[Fredoka] font-regular text-[#787878] flex flex-col items-start pb-2 pt-1 sm:pt-0 md:pt-0 lg:pt-0 xl:pt-0 2xl:pt-0 p-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14 2xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl text-xl mr-[50px] text-wrap leading-[24px] sm:leading-[24px] md:leading-[28px] lg:leading-[28px] xl:leading-[28px] 2xl:leading-[28px]">
          <p>
          made possible by <span className="text-black text-bold">Lummi.ai</span>
          </p>
        </div>

        <div className="flex pt-4 pb-4 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14 justify-start items-center w-full">
          <div className="font-[Doto] font-extrabold text-black text-2xl rounded-[15px] p-4 justify-center items-center shadow-sm sm:shadow-sm hover:shadow-md">
            9.2k+ views
          </div>
          <div className="font-[Doto] font-extrabold text-black text-2xl rounded-[15px] p-4 justify-center items-center shadow-sm sm:shadow-sm hover:shadow-md mx-4">
            3.2k+ downloads
          </div>
        </div>
        <div className="flex pt-1 pb-4 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14 justify-start items-center w-full">
          <div className="font-[Doto] font-extrabold text-black text-2xl rounded-[15px] p-4 justify-center items-center shadow-sm sm:shadow-sm hover:shadow-md">
            Visit account
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-5 gap-4 sm:gap-5 md:gap-6 mx-4 sm:mx-5 md:mx-6 mt-5 opacity-80 mb-10">
                <img class="aspect-4/5 object-cover my-2  sm:my-2.5 md:my-3 sm:shadow-lg md:shadow-xl rounded-4xl" src={cheerful} alt="Cheerful Man in Maroon Turtleneck"/>
                <img class="aspect-4/5 object-cover my-2  sm:my-2.5 md:my-3 sm:shadow-lg md:shadow-xl rounded-4xl" src={cloudy} alt="contemplative Girl Under Cloudy Sky"/>
                <img class="aspect-4/5 object-cover my-2  sm:my-2.5 md:my-3 sm:shadow-lg md:shadow-xl rounded-4xl" src={earthy} alt="Contemplative Young Man in Earthy Tones"/>
                <img class="aspect-4/5 object-cover my-2  sm:my-2.5 md:my-3 sm:shadow-lg md:shadow-xl rounded-4xl" src={tattoo} alt="Profile of a Young Man with Tattoo"/>
                <img class="aspect-4/5 object-cover my-2  sm:my-2.5 md:my-3 sm:shadow-lg md:shadow-xl rounded-4xl hidden sm:block" src={white} alt="Young Man in White Shirt"/>
                <img class="aspect-4/5 object-cover my-2  sm:my-2.5 md:my-3 sm:shadow-lg md:shadow-xl rounded-4xl hidden sm:block" src={couple} alt="couple in love"/>
        </div>
        
        </section>
      </>
    );
}

export default Extras;