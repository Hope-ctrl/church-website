import { HiOutlineShoppingCart } from "react-icons/hi";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";

const Header = ()=>{
    const [isOpen, setIsOpen] = useState(false);

    const handleMenu = ()=> setIsOpen(!isOpen);

    const location = useLocation();

    useEffect(()=>{
        setIsOpen(false)
    }, [location.pathname])

    return(
        <div >
            <div className="w-[100%] h-[50px] lg:flex justify-between items-center px-[40px] hidden text-[white] bg-[#000000a1] z-50">
                <div className="w-[200px]">
                <p>
                    CGEM
                </p>
            </div>
            <ul className="w-[300px] h-[100%] flex justify-center items-center gap-[40px]">
                <li className="cursor-pointer hover:opacity-[0.5] transition-all duration-75 ease-in-out"><Link to="/">Home</Link></li>
                <li className="cursor-pointer hover:opacity-[0.5] transition-all duration-75 ease-in-out"><Link to="/gallery">Gallery</Link></li>
                <li className="cursor-pointer hover:opacity-[0.5] transition-all duration-75 ease-in-out"><Link to="/sermon">Sermon</Link></li>
                <li className="cursor-pointer hover:opacity-[0.5] transition-all duration-75 ease-in-out">Contact</li>
            </ul>
            </div>
            <div className="lg:hidden w-[100%] h-[70px] flex justify-between items-center text-white  z-50 bg-[#000000a9]">
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
          <a href="/" className="text-lg font-medium"><Link to="/">Home</Link></a>
          <a href="/about" className="text-lg font-medium"><Link to="/gallery">Gallery</Link></a>
          <a href="/services" className="text-lg font-medium"><Link to="/sermon">Sermon</Link></a>
          <a href="/contact" className="text-lg font-medium">Contact</a>
        </nav>
                </div>
            </div>
        </div>
    )
}

export default Header;