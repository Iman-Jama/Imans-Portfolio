import hi from '../assets/hi.png';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
const Hero = () => {
  return (
    <section className=" w-screen z-0 h-96  mx-auto flex flex-wrap justify-center">


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
              <h1 className="font-black lg:text-[100px] sm:text-[70px] xs:text-[60px] text-[40px] lg:leading-[98px] mt-2 text-rose-600">
              I&apos;m<span className='text-pink-950'>&nbsp;&nbsp; Iman</span>
                <p className="font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-rose-600">
                  I am a Full Stack Developer
                </p>
              </h1>
            </div>
            <div className='mb-[-200px]'>
              <div className="flex-1 flex items-center justify-center h-full">
                <img src={hi} alt="" className="md:w-11/12 object-scale-down h-80 w-96" />
              </div>

            </div>
          </div>
          <div className="container mt-5 p-1 flex flex-row justify-start">
         

         <div>
           <a
             href="https://github.com/iman-jama"
             target="_blank"
             rel="noopener noreferrer"
             className=" text-xl hover:text-black hover:text-2xl ml-6"
           >
             <FaGithub className="inline-block mr-1 text-2xl text-pink-950" />
             GitHub
           </a>
         </div>

         <div>
           <a
             href="https://www.linkedin.com/in/drimanjama/"
             target="_blank"
             rel="noopener noreferrer"
             className="text-xl hover:text-black hover:text-2xl ml-6"
           >
             <FaLinkedin className="inline-block mr-1 text-2xl text-pink-950" />
             LinkedIn
           </a>
         </div>

         <div>
           <a
             href="mailto:iman.jama891@gmail.com?subject=Hello%20from%20Portfolio%20Website&body=I%20found%20your%20website%20and%20wanted%20to%20connect."
             className="text-xl hover:text-black hover:text-2xl ml-6"
           >
             <FaEnvelope className="inline-block mr-1 text-2xl text-pink-950" />
             Email
           </a>
         </div>
       </div>
     </div>
        </div>

      

    </section>
  );
};

export default Hero;