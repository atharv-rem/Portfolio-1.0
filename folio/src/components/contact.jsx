function Contactme(){
    return (
        <section id="contact" className="w-full min-h-screen flex flex-col">
        {/* Title Section */}
        <div className="flex items-center justify-center pt-10 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14">
            <div className="h-[1px] bg-[#e9e9e9] flex-grow mr-4" />
            <div className="font-[Fredoka] text-[#9e9e9e] text-[15px] sm:text-xl">contact me</div>
            <div className="h-[1px] bg-[#e9e9e9] flex-grow ml-4" />
        </div>

        {/* Iframe Container */}
        <div className="flex-grow flex items-center justify-center px-10 pb-10 mt-5">
            <iframe 
                 className="w-full h-[calc(100vh-100px)] sm:h-[calc(100vh-100px)] md:h-[calc(100vh-10px)]  rounded-[30px] shadow-md" 
                 src="https://formshare.ai/s/smmAnj6XPV" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen 
                title="Contact Form"/>
        </div>
        </section>

    );
}

export default Contactme;