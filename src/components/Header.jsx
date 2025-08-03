import { HiOutlineShoppingCart } from "react-icons/hi";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = ()=>{
    const [isOpen, setIsOpen] = useState(false);

    const handleMenu = ()=> setIsOpen(!isOpen);
    return(
        <div >
            <div className="w-[100%] h-[50px] lg:flex justify-between items-center px-[40px] hidden text-[white] bg-[#ffffff56] fixed z-50">
                <div className="w-[200px]">
                <p>
                    CGEM
                </p>
            </div>
            <ul className="w-[300px] h-[100%] flex justify-center items-center gap-[40px]">
                <li className="cursor-pointer hover:opacity-[0.5] transition-all duration-75 ease-in-out">Home</li>
                <li className="cursor-pointer hover:opacity-[0.5] transition-all duration-75 ease-in-out">Gallery</li>
                <li className="cursor-pointer hover:opacity-[0.5] transition-all duration-75 ease-in-out">Sermon</li>
                <li className="cursor-pointer hover:opacity-[0.5] transition-all duration-75 ease-in-out">Contact</li>
            </ul>
            </div>
            <div className="lg:hidden w-[100%] h-[70px] flex justify-between items-center text-white fixed z-50 bg-[#ffffff56]">
              <div className="w-[200px] h-[100%] flex justify-center items-center">
                <p className="text-[30px]">
                   CGEM

                </p>
            </div>
                <button className="w-[50px] h-[100%] cursor-pointer hover:opacity-[0.5]" onClick={handleMenu}><Menu/></button>
                <div className={`fixed w-64 overflow-hidden text-black h-full top-0 left-0 z-20 bg-[#ffffffe6] tranform transition-transform duration-300 ease-in-out ${isOpen? 'translate-x-0' : '-translate-x-full'}`}>
                    
                        {isOpen &&
                        <div className="w-[100%] h-[50px] cursor-pointer flex justify-end items-center px-[20px] hover:opacity-300" onClick={handleMenu}>
                            <X size={24} />

                        </div>
}
                    <nav className="flex flex-col p-6 space-y-4">
          <a href="/" className="text-lg font-medium">Home</a>
          <a href="/about" className="text-lg font-medium">About</a>
          <a href="/services" className="text-lg font-medium">Services</a>
          <a href="/contact" className="text-lg font-medium">Contact</a>
        </nav>
                </div>
            </div>
        </div>
    )
}

export default Header;