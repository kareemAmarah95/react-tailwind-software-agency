import React from 'react'
import navbarStyle from "./Navbar.module.css";
import NavbarImg from "../Images/nav-logo-one-removebg-preview.png";
import { Link, Outlet } from 'react-router-dom';
 const Navbar = () => {
  return (
    <div>
        <ul className={`flex relative z-10 ${navbarStyle['nav-height']}`}>
            {/* logo image */}
            <div className="container flex justify-between items-center">

            <div className="left-side">
            <Link to="/">
                <li>
                    <a href="#">
                        <img className={`${navbarStyle['navbarImageSize']}`} src={NavbarImg} alt="navbar-logo-image"/>
                    </a>
                </li>
            </Link>
            </div>
            <div className="right-side flex">
            <Link to="/">
                <li className="mr-4">
                    <a className={`text-white ${navbarStyle['link-font-family']} ${navbarStyle['link-hover']}`} href="#">
                        HOME
                    </a>
                </li>
            </Link>
            <Link to="/services">
                <li className="mr-4">
                    <a className={`text-white ${navbarStyle['link-font-family']} ${navbarStyle['link-hover']}`} href="#">
                        SERVICES
                    </a>
                </li>
            </Link>
            <Link to="/industries">
                <li className="mr-4">
                    <a className={`text-white ${navbarStyle['link-font-family']} ${navbarStyle['link-hover']}`} href="#">
                        INDUSTRIES
                    </a>
                </li>
            </Link>
            <Link to="/whyus">
                <li className="mr-4">
                    <a className={`text-white ${navbarStyle['link-font-family']} ${navbarStyle['link-hover']}`} href="#">
                        WHY-US
                    </a>
                </li>
            </Link>
            <Link to="/projects">
                <li className="mr-4">
                    <a className={`text-white ${navbarStyle['link-font-family']} ${navbarStyle['link-hover']}`} href="#">
                        PROJECTS
                    </a>
                </li>
            </Link>
            <Link to="/techstack">
                <li>
                    <a className={`text-white ${navbarStyle['link-font-family']} ${navbarStyle['link-hover']}`} href="#">
                        TECH STACK
                    </a>
                </li>
            </Link>
            </div>
            
            </div>
        </ul>
        <Outlet/>
    </div>
  )
}
export default Navbar; 