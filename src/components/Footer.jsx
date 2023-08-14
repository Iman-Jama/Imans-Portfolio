import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
const Footer = () => {
  
  const year = new Date().getFullYear(); 
    return (
        <footer className="text-gray-900 mb-0 bg-pink-300 bg-opacity-75 border-t-0 mt-10 left-0 w-full z-0">
      <div className="py-10">
        <div className="container mx-auto flex flex-col md:flex-col justify-between items-center sm:items-start">
         

          <div className="flex items-center mt-2 md:mt-0">
            <a
              href="https://github.com/iman-jama"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 text-sm hover:text-white hover:text-lg ml-6"
            >
              <FaGithub className="inline-block mr-1 text-2xl" />
              GitHub
            </a>
          </div>

          <div className="flex items-center mt-2 md:mt-0">
            <a
              href="https://www.linkedin.com/in/drimanjama/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 text-sm hover:text-white hover:text-base ml-6"
            >
              <FaLinkedin className="inline-block mr-1 text-2xl" />
              LinkedIn
            </a>
          </div>

          <div className="flex items-center mt-2 md:mt-0">
            <a
              href="mailto:iman.jama891@gmail.com?subject=Hello%20from%20Portfolio%20Website&body=I%20found%20your%20website%20and%20wanted%20to%20connect."
              className="text-gray-900 text-sm hover:text-white hover:text-base ml-6"
            >
              <FaEnvelope className="inline-block mr-1 text-2xl" />
              Email
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto border-t border-gray-800 py-4">
        <div className="flex flex-wrap justify-center text-sm">
        <a className=' text-lg hover:text-base' href="https://iman-jama.github.io/Imans-Portofolio/">Back to top</a>
        </div>
        <p className="text-lg text-center mt-4">
          &copy; {year} Iman Jama. All rights reserved.
        </p>
      </div>
    </footer>
  
           
)};
       
   
export default Footer;