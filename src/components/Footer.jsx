
const Footer = () => {
  
  const year = new Date().getFullYear(); 
    return (
        <footer className="text-gray-900 bg-pink-300 bg-opacity-75 w-full">
  

      <div >
        <div className="flex flex-wrap justify-center text-lg cursor-pointer">
        <a  href="#">Back to top</a>
        </div>
        <p className="text-lg text-center mt-4">
          &copy; {year} Iman Jama. All rights reserved.
        </p>
      </div>
    </footer>
  
           
)};
       
   
export default Footer;