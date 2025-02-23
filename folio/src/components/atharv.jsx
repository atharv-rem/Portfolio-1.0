import favicon from '../assets/favicon.png';

function Atharv() {
    return (
      <section id="home">
      <div className="font-[Suwannaphum] text-black w-full h-screen flex flex-col justify-center items-center p-2 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-14 2xl:text-8xl lg:text-8xl md:text-7xl sm:text-6xl text-6xl drop-shadow-md">
        <img src={favicon} alt="favicon" className="w-50 h-50 block sm:hidden mb-10 rounded-[30px] shadow-2xl border-1 border-[#eeeeee]" />
        <p className="hover:scale-110 transition-all duration-300 ease-in-out">ATHARV</p>
        <p className="hover:scale-110 transition-all duration-300 ease-in-out">REMESHAN</p>
      </div>
      </section>
    );
  }
  
  export default Atharv;