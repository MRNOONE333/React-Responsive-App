import  logo from "../assets/logo.png" ;
import { navItems } from "../constants";
import {Menu, X} from "lucide-react";
import { useState } from "react";

const Navbar = () => {
    const [mobileDrawerOpen,setMobileDrawerOpen] = useState(false);

    // function to toggle the value of responsive nav bar
    const toggleNavbar =()=>{
        setMobileDrawerOpen(!mobileDrawerOpen);
    }

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <img className="h-10 w-10 mr-2" src={logo} alt="Logo_icon" />
                    <span className="text-xl  tracking-tight" >WebName</span>
                    </div>
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item,index)=>(
                            <li>
                                <a href="{item.href}">{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden lg:flex justify-center space-x-12 items-center">
                        <a className="py-2 px-3 border rounded-md"  href="#">Sign in </a>
                        <a className="px-2 py-3 bg-gradient-to-r from-orange-500 to-orange-800 rounded-md  " href="#">Create account </a>
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                    <button  onClick={toggleNavbar}>
                            {/* conditional rendering */}
                            {mobileDrawerOpen ? <X/> : <Menu/> }
                        </button>
                    </div>
            </div>
            {mobileDrawerOpen && (
                <div className="lg:hidden fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col 
                justify-center items-center">
                    <ul>
                        {navItems.map((item,index)=>(
                            <li  className="py-3" key={index}>
                                <a href="{item.href}">{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex space-x-6">
                    <a className="py-2 px-3 border rounded-md"  href="#">Sign in </a>
                    <a className="px-2 py-3 bg-gradient-to-r from-orange-500 to-orange-800 rounded-md  " href="#">Create account </a>
                    </div>
                </div>   )}
        </div>
    </nav>
  )
}

export default Navbar