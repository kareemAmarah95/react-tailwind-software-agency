import React from 'react'
import myStyle from "./Home.module.css";
import {BsTelephone} from "react-icons/bs" 
 const Home = () => {
    let url = "https://calendly.com/muddahany/30min";
  return (
    <div className={`${myStyle['text-align-left']}`}>
        <div className={`${myStyle['background-image']}`}>
        <div className={`${myStyle['background-overlay']}`}></div>
        
            <div className={`text-white ${myStyle['section-description']} sm:font-thin`}>
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
                     <a target="_blank" href={url}>
                        <BsTelephone className={`${myStyle['responsive-mobile-icon']}`}/>
                     </a>
                     </div>
                     <div className={`${myStyle['middle-right-items-link']}`}>
                     <a target="_blank" href={url}>
                        BOOK A CALL
                     </a>
                     </div>
            </div>
        </div>
        </div>
    
  )
}

export default Home;
