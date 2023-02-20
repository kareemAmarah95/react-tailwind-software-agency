import React from 'react'
import navbarStyle from "./Navbar.module.css";
import NavbarImg from "../Images/nav-logo-one-removebg-preview.png";
import { Link, NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai";
const Navbar = () => {
    let [open, setOpen] = useState(false);
  return (
    <div>
        <nav className='relative'>
            
        <ul className={`flex relative z-10 ${navbarStyle['nav-height']} ${open} ? 'top-20' : 'top[-490px]'`}>
            {/* logo image */}
            <div className="container flex justify-between items-center">

                <div className="left-side">

                <Link>
                    <li>
                        <NavLink to="/">
                            <img className={`${navbarStyle['navbarImageSize']}`} src={NavbarImg} alt="navbar-logo-image"/>
                        </NavLink>
                    </li>
                    
                </Link>
                </div>
                <div id="right-side" className="right-side active flex absolute md:relative flex-col md:flex-row top-[75px] bg-black w-full z-[200] left-0 text-left pl-10 h-0 transition-all overflow-hidden md:h-full md:top-0 md:text-right md:justify-end md:bg-transparent">
                <Link>
                    <li className="mr-4 my-5">
                        <NavLink to="/" className={`text-white ${navbarStyle['link-font-family']} ${navbarStyle['link-hover']}`}>
                            HOME
                        </NavLink>
                    </li>
                </Link>
                <Link>
                    <li className="mr-4 my-5">
                        <NavLink className={`text-white ${navbarStyle['link-font-family']} ${navbarStyle['link-hover']}`} to="/services">
                            SERVICES
                        </NavLink>
                    </li>
                </Link>
            
                <Link>
                    <li className="mr-4 my-5">
                        <NavLink className={`text-white ${navbarStyle['link-font-family']} ${navbarStyle['link-hover']}`} to="/whyus">
                            WHY-US
                        </NavLink>
                    </li>
                </Link>
                <Link to="/projects">
                    <li className="mr-4 my-5">
                        <NavLink className={`text-white ${navbarStyle['link-font-family']} ${navbarStyle['link-hover']}`} to="/projects">
                            PROJECTS
                        </NavLink>
                    </li>
                </Link>
                <Link to="/techstack">
                    <li className="my-5">
                        <NavLink className={`text-white ${navbarStyle['link-font-family']} ${navbarStyle['link-hover']}`} to="/techstack">
                            TECH STACK
                        </NavLink>
                    </li>
                </Link>
            
                </div>
                <div onClick={()=>{setOpen(!open)
                   const rightSide =  document.getElementById("right-side");
                   open ? rightSide.style.height = "0px" : rightSide.style.height = "320px"
                }} className={`text-3xl cursor-pointer md:hidden`}>
                    
                    {open ? <AiOutlineClose className={`z-10 text-white font-bold`}/> : <AiOutlineMenu className={`z-10 text-white font-bold`}/> }
                </div>
            </div>
        </ul>
        <Outlet/>
        
  
</nav>
    </div>
  )
}
export default Navbar; 