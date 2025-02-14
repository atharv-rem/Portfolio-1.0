import globe from "../assets/globe.svg";

function Intro(){
    return(
        <>
        <div className= "font-[Aleo] font-medium text-black flex flex-col items-start pb-0 sm:pb-2 md:pb-2 lg:pb-2 xl:pb-2 2xl:pb-2 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-14 2xl:text-8xl lg:text-8xl md:text-7xl sm:text-6xl text-5xl mr-[50px] text-wrap 2xl:leading-[70px] xl:leading-[70px] lg:leading-[70px] md:leading-[70px] sm:leading-[55px]">
            <p>
                i <span className="font-regular text-[#0548ff]">code</span> and <span className="font-regular text-[#da15e1]">design</span> stuff on the internet.
            </p>
        </div>
        <div className="font-[Fredoka] font-regular text-[#787878] flex flex-col items-start  pt-1 sm:pt-0 md:pt-0 lg:pt-0 xl:pt-0 2xl:pt-0 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-14 2xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl text-xl mr-[50px] text-wrap leading-[24px] sm:leading-[24px] md:leading-[28px] lg:leading-[28px] xl:leading-[28px] 2xl:leading-[28px]">
            <p>
            Hello there! i'm an 18-year-old kid passionate about coding and designing, and the art of playing the keyboard. chess is my other love—strategic thinking is a part of everything I do. i'm also nurturing a dream of becoming an entrepreneur, and i believe that my diverse interests and skills are paving the way for an exciting entrepreneurial journey. 
            </p>
            <p className="pt-2">
            let's connect and share our passions!
            </p>
        </div>
        </>
    )
}

export default Intro;