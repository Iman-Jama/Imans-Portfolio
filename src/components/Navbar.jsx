import { useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';
import { ReactComponent as ReactClose } from '../assets/close.svg';
import { ReactComponent as ReactMenu } from '../assets/menu.svg';
import logo from '../assets/logo.png';


const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/src/assets/MyCv_ImanJama.pdf'; 
    link.download = '/src/assets/MyCv_ImanJama.pdf'; 
    link.click();
  };

  return (
    <nav className="sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 bg-gradient-to-r from-rose-400 to-pink-400">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} className='w-8 rounded-full'/>
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Dr Iman Jama<span></span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? 'text-white' : 'text-pink-950'} hover:text-black px-3 hover:bg-pink-300 hover: rounded transition-all duration-300 font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <li
            className="text-pink-950 hover:text-black px-3 hover:bg-pink-300 hover:rounded transition-all duration-300 font-medium cursor-pointer"
            onClick={handleDownload}
          >
            <a href="/src/assets/MyCv_ImanJama.pdf" download="resume.pdf">Download Resume</a>
          </li>
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items center">
          <img
            src={toggle ? <ReactClose /> : <ReactMenu />}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient bg-pink-400 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? 'text-white' : 'text-pink-950'} hover:text-black px-2 hover:bg-pink-300 hover: rounded font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
                ))}
               <li
                 className="text-pink-950 hover:text-black px-3 hover:bg-pink-300 hover:rounded transition-all duration-300 font-medium cursor-pointer"
                 onClick={handleDownload}
               >
                 <a href="/src/assets/MyCv_ImanJama.pdf" download="resume.pdf">Download Resume</a>
               </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
