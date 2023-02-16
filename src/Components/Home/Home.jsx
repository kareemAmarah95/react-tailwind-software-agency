import React from 'react'
import myStyle from "./Home.module.css";
import { FaLinkedinIn } from "react-icons/fa";
 const Home = () => {
  return (
    <div className={`${myStyle['text-align-left']}`}>
        <div className={`${myStyle['background-image']}`}>
        <div className={`${myStyle['background-overlay']}`}></div>
        
            <div className={`text-white ${myStyle['section-description']}`}>
                Premier Software Development Services  
            </div>
            <div className={`${myStyle['triangle-parent']}`}>
                <div className={`${myStyle['triangle-shape']}`}></div>
                <div className={`${myStyle['triangle-gradient']}`}>
                </div>
                <div className={`${myStyle['triangle-description']}`}>
                    check our work
                </div>
            </div>
                
            <div className={`${myStyle['middle-right-items']}`}>
                     {/* linkedIn Icons */}
                     <div className={`${myStyle['icon-holder']}`}>
                     <FaLinkedinIn/>
                     </div>
                     <div className={`${myStyle['middle-right-items-link']}`}>
                        BOOK A CALL
                     </div>
            </div>
        </div>
        </div>
    
  )
}

export default Home;
