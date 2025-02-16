import comingsoon from '../assets/coming soon.png';
import data from '../assets/data analysis.png';
import arrrow from '../assets/link arrow.png';

function Project() {
    return (
      <>
      <section id="projects">
        <div className="flex items-center justify-center pb-0 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14">
          <div className="h-[1px] bg-[#e9e9e9] flex-grow mr-4" />
          <div className="font-[Fredoka] text-[#9e9e9e] text-[15px] sm:text-xl">projects</div>
          <div className="h-[1px] bg-[#e9e9e9] flex-grow ml-4" />
        </div>

        <div>
          <p className="font-[Aleo] font-medium text-black flex flex-col items-start pt-4 pb-0 sm:pb-2 md:pb-2 lg:pb-2 xl:pb-2 2xl:pb-2 p-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14 2xl:text-8xl lg:text-8xl md:text-7xl sm:text-6xl text-5xl mr-[200px]">
            Projects
          </p>
        </div>

        <div className="font-[Fredoka] font-regular text-[#787878] flex flex-col items-start pb-2 pt-1 sm:pt-0 md:pt-0 lg:pt-0 xl:pt-0 2xl:pt-0 p-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14 2xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl text-xl mr-[50px] text-wrap leading-[24px] sm:leading-[24px] md:leading-[28px] lg:leading-[28px] xl:leading-[28px] 2xl:leading-[28px]">
          <p>
          currently learning cool stuff but here are some of my projects..
          </p>
        </div>

        <div className="flex flex-col sm:flex-col md:flex-row pt-4 pb-4 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14 justify-center items-center gap-4 md:space-x-4 mt-4">
          {/* first box*/}
          <a href="https://github.com/atharv-rem/Bas.AI" target="_blank" rel="noreferrer">
            <div className="justify-center items-center flex-col pt-2 pb-1 px-2 rounded-[22px] shadow-md sm:shadow-md hover:shadow-lg hover:bg-[#f9f9f9]" >
              <div className="flex bg-white rounded-[18px]">
                <img src={data} alt="data analysis" className="w-full h-auto object-cover" />
              </div>
              <div className='flex items-center justify-center'>
                <div className="text-black  rounded-[18px] text-[18px] sm:text-xl md:text-lg lg:text-xl xl:text-xl font-[Fredoka] mt-1 mb-1 pt-1 px-2 justify-center items-center w-full h-auto">
                  bas.ai
                </div>
                <img src={arrrow} alt="arrow" className="w-6 h-6 p-1.5 object-cover" />
              </div>
            </div>
          </a>
  
          {/* second box*/}
          <div className="justify-center items-center flex-col pt-2 pb-1 px-2 rounded-[22px] shadow-sm opacity-50" >
            <div className="flex bg-white rounded-[18px]">
              <img src={comingsoon} alt="coming soon" className="w-full h-auto object-cover" />
            </div>
            <div className="text-black rounded-[18px] text-[18px] sm:text-xl md:text-lg lg:text-xl xl:text-xl font-[Sen] mt-1 pt-1 px-2 justify-start items-center w-full h-auto">...</div>
          </div>

          {/* third box*/}
          <div className="justify-center items-center flex-col pt-2 pb-1 px-2 rounded-[22px] shadow-sm opacity-50" >
            <div className="flex bg-white rounded-[18px]">
              <img src={comingsoon} alt="coming soon" className="w-full h-auto object-cover" />
            </div>
            <div className="text-black rounded-[18px] text-[18px] sm:text-xl md:text-lg lg:text-xl xl:text-xl font-[Sen] mt-1 pt-1 px-2 justify-start items-center w-full h-auto">...</div>
          </div>

        </div> 
      </section>
      </>
    );
  }
  
  export default Project;