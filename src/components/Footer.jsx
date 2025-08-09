
import { FaFacebook, FaInstagram, FaTwitter, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full h-[300px] bg-[#000000] border-t border-[#232323] flex justify-center items-center flex-col">
     
        
      
          <h3 className="font-semibold text-[100px] text-transparent" style={{
    WebkitTextStroke: "1px #FF9863",
  }}>CGEM</h3>
          <p className="text-white mt-[-20px]">
            Christ goodnews evangelistic mission 
          </p>
          <div className="flex gap-[20px] mt-[10px]">
            <button className="cursor-pointer hover:opacity-[0.5]">
                <FaFacebook size={30} className="text-white"/>
            </button>
            <button className="cursor-pointer hover:opacity-[0.5]">
                <FaInstagram size={30} className="text-white w-[20px]"/>
            </button>
            <button className="cursor-pointer hover:opacity-[0.5]">
                <FaXTwitter size={30} className="text-white w-[20px]"/>
            </button>
          </div>

      

      
    </footer>
  );
};

export default Footer;
