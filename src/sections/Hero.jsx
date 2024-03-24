function Hero() {
  return (
    <section className="relative z-10 overflow-hidden bg-[#e39847] h-full  sm:h-[100%]">
      <div className="container-wrapper  flex flex-col sm:flex-row  justify-between pt-[10%] pb-12 items-center  lg:drop-shadow-[0_0_10rem_white]">
        <div className=" w-full">
          <img
            src="/images/hero.png"
            className=" mx-auto "
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-duration="1500"
            data-aos-easing="ease-in-sine"
            alt=""
          />

          <div className=" hidden   sm:flex  justify-center items-center gap-6 mt-7 sm:mt-8">
            <div className=" relative">
           
            </div>
            <div className=" relative">
              <a
                href="https://www.dextools.io/app/en/solana/pair-explorer/CQkXghxSsndkQx4CoN5VhjbrtibRpoTYYUtEWyCj1YAq?t=1711267574247"
                target="_blank"
                className="  btn-main  font-bold text-sm sm:text-xl rounded-full px-12 py-2"
              >
            DexTools
              </a>
            </div>
          </div>
        </div>
        <div className=" flex   sm:hidden  justify-center items-center  mt-7 sm:mt-8">
      
        </div>
        <div className="  mt-4 sm:mt-0">
          <h1 className=" text-[#000000] text-2xl sm:text-3xl lg:text-4xl font-dream uppercase pb-2  max-w-4xl mx-auto">
            {" "}
            Become the part of DogeWIF family and let's chase our dreams together!
          </h1>
          <p className=" max-w-3xl  text-[#000000] text-xl mx-auto">
          Hey there, fellow dog lovers and crypto enthusiasts! 🐶🌈⛑️ DogeWIF – the coolest dog on Solana with a rainbow hat, is all about memes, speed, and having a blast in the crypto world! Get ready for a wild ride with the cutest coins in town!
          </p>
            <p className="text-[#000000] text-xl my-3 font-bold">
            Contract Address 
            </p>
          <a href="https://solscan.io/token/4WV2aySGezXy6TkZpFHMpxcS8WLvs1reaEG8GkVLTVzu" target="_blank" className="max-w-3xl  text-[#000000] text-xl mx-auto  font-bold">
          4WV2aySGezXy6TkZpFHMpxcS8WLvs1reaEG8GkVLTVzu
          </a>

          <div className="hidden sm:flex items-center gap-5 justify-center  mt-4">
            <a href="https://t.me/dogewifs" target="_blank">
              <img src="TELEGRAM.png" alt="" className="w-auto h-[55px]" />
            </a>

            <a href="https://twitter.com/DogeWIF_" target="_blank">
              <img src="X.png" alt="" className="w-auto h-[55px]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
