import { HiOutlineShoppingCart } from "react-icons/hi";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";

const Header = ()=>{
    const [isOpen, setIsOpen] = useState(false);

    const [more, setMore] = useState(false);

    const handleMenu = ()=> setIsOpen(!isOpen);

    const location = useLocation();

    useEffect(()=>{
        setIsOpen(false)
    }, [location.pathname])

    return(
        <div >
            <div className="w-[100%] h-[70px] lg:flex justify-between items-center px-[60px] hidden text-[black] bg-[#ffffff] z-50">
                <div className="w-[100px]">
                <p>
                    CGEM
                </p>
            </div>
            <ul className="w-[500px] h-[100%] flex justify-center items-center gap-[40px]">
                <li className="cursor-pointer hover:opacity-[0.5] transition-all duration-75 ease-in-out"><Link to="/">Home</Link></li>
                <li className="cursor-pointer hover:opacity-[0.5] transition-all duration-75 ease-in-out"><Link to="/gallery">Gallery</Link></li>
                <li className="cursor-pointer hover:opacity-[0.5] transition-all duration-75 ease-in-out"><Link to="/sermon">Sermon</Link></li>
                <li className="cursor-pointer hover:opacity-[0.5] transition-all duration-75 ease-in-out"><Link to="/events">Events</Link></li>
                <li className="cursor-pointer transition-all duration-75 ease-in-out relative" onMouseMove={()=>setMore(true)} >
                    <p className="hover:opacity-[0.5]">
                        Contact
                    </p>
                    {
                        more && <ul className="w-[150px] h-[70px] absolute top-7 left-0 appear rounded-xl bg-white shadow-xl" onMouseLeave={()=>setMore(false)}>
                            <li className="cursor-pointer w-full h-[50%] flex items-center hover:bg-[#e3e3e3] transition-all duration-75 ease-in-out pl-[10px]"><Link to="/contact">contact us</Link></li>
                            <li className="cursor-pointer w-full h-[50%] rounded-b-xl hover:bg-[#e3e3e3] transition-all duration-75 ease-in-out pl-[10px]"><Link to="/prayerRequest">prayer request</Link></li>
                    </ul>
                    }

                </li>
            </ul>
            </div>
            <div className="lg:hidden w-[100%] h-[70px] flex justify-between items-center text-black  z-50 bg-[#ffffff]">
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
          <li className="text-lg font-medium list-none"><Link to="/">Home</Link></li>
          <li className="text-lg font-medium list-none"><Link to="/gallery">Gallery</Link></li>
          <li className="text-lg font-medium list-none"><Link to="/sermon">Sermon</Link></li>
          <li className="text-lg font-medium list-none"><Link to="/events">Events</Link></li>
          <li className="text-lg font-medium list-none"><Link to="/contact">contact</Link></li>
          <li className="text-lg font-medium list-none"><Link to="/prayerRequest">Prayer Request</Link></li>
          
        </nav>
                </div>
            </div>
        </div>
    )
}

export default Header;