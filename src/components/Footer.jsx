import { FaGithub, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
    const handleClick = () => {
    window.location.href = 'https://github.com/iman-jama';
  };

  const year = new Date().getFullYear(); 
    return (
        <div  className="contact px-6 sticky bottom-0 bg-rose-400">
        
                <a href="http://github.com/iman-jama">
                    <button
                        onClick={handleClick}
                        type="button"
                        className="  inline-block rounded-full px-4 py-1.5 text-l text-white bg-zinc-800 hover:bg-zinc-400">
                        <FaGithub />
                    </button>
                </a>
                <a href="http://linkedin.com/in/drimanjama">
                    <button
                        type="button"
                        className="inline-block rounded-full mx-2 px-4 py-1.5 text-l text-white bg-sky-800 hover:bg-sky-400">
                        <FaLinkedin />
                    </button>
                </a>
            
            <p className=' hover:text-sm'><a href="#">Back to top</a></p>
            <p className="text-black font-bold">
               &copy; IMAN JAMA ❤️ {year}
            </p>

        </div>
  
           
)};
       
   
export default Footer;