import hi from '../assets/hi.png';
const Hero = () => {
  return (
    <section className="relative w-full h-screen  mx-auto ">


      <div
        className="absolute inset-0 top-[120px]  max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5"
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-rose-950' />
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-rose-800 to-rose-200' />

        </div>

        <div >

          <div className="grid grid-cols-2">
            <div>
              <h1 className="font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-rose-600">
                Im <span className='text-pink-950'>Iman</span>
                <p className="font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-rose-600">
                  I am a full stack <br className='sm:block hidden' />Developer
                </p>
              </h1>
            </div>
            <div>
              <div className="flex-1 flex items-center justify-center h-full">
                <img src={hi} alt="" className="md:w-11/12 object-scale-down h-80 w-96" />
              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;