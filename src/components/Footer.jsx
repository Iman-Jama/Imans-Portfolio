import { FaGithub, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
    const handleClick = () => {
    window.location.href = 'https://github.com/iman-jama';
  };
    return (
        <div  className="contact px-6 grid grid-rows-3 flex sticky bottom-0">
            <div className="flex-auto place-items-center">
                <a href="http://github.com/iman-jama">
                    <button
                        onClick={handleClick}
                        type="button"
                        className="mb-1 inline-block rounded px-4 py-1.5 text-l text-white bg-zinc-800 hover:bg-zinc-400">
                        <FaGithub />
                    </button>
                </a>
            </div>
            <div>
                <a href="http://linkedin.com/in/drimanjama">
                    <button
                        type="button"
                        className="mb-1 inline-block rounded px-4 py-1.5 text-l text-white bg-sky-800 hover:bg-sky-400">
                        <FaLinkedin />
                    </button>
                </a>
            </div>
            <a class="contact" href="#">Back to top</a>
            <p class="fw-bolder text-black">
                &lt;&lt;&lt;&copy; IMAN JAMA ❤️ &gt;&gt;&gt;
            </p>

        </div>
  
           
)};
       
   
export default Footer;