import { FaGithub, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
    const handleClick = () => {
    window.location.href = 'https://github.com/iman-jama';
  };

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
              className="text-gray-900 text-sm hover:text-white hover:text-base ml-6"
            >
              <FaGithub className="inline-block mr-1 text-lg" />
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
              <FaLinkedin className="inline-block mr-1 text-lg" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto border-t border-gray-800 py-4">
        <div className="flex flex-wrap justify-center text-sm">
        <p className=' hover:text-sm'><a href="#">Back to top</a></p>
        </div>
        <p className="text-xs text-center mt-4">
          &copy; {year} Iman Jama. All rights reserved.
        </p>
      </div>
    </footer>
  
           
)};
       
   
export default Footer;