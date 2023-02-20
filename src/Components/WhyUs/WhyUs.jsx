import React from 'react'
import WhyUsStyle from "./WhyUs.module.css";
import whyUsImage from "../Images/whyus-section.avif"
import {BsTelephone} from "react-icons/bs" 
const WhyUs = () => {
  let url = "https://calendly.com/muddahany/30min";
  return (
    <div>
      <div className={`flex ${WhyUsStyle['background-color']}`}>
          <div className={`${WhyUsStyle['why-us-description']}`}>
          Why work with us?
          </div>
          <div className={`${WhyUsStyle['why-us-answer']}`}>
          BECAUSE WE BELEIVE IN THE VALUE OF YOUR PRODUCT LIKE OUR OWN .
          </div>
          <div className={`${WhyUsStyle['image-card']}`}>
                {/* layer that holds the image */}
                <div className={`${WhyUsStyle['image-holder']}`}>
                    {/* put the image inside the image holder */}
                    <img src={whyUsImage} className={`${WhyUsStyle['original-image']}`} alt="card-services-image"/>
                </div>
                
            </div>
            <div className={`${WhyUsStyle['middle-right-items']}`}>
                     {/* linkedIn Icons */}
                     <div className={`${WhyUsStyle['icon-holder']}`}>
                     <a target="_blank" href={url}>
                        <BsTelephone className={`${WhyUsStyle['responsive-mobile-icon']}`}/>
                      </a>
                     </div>
                     <div className={`${WhyUsStyle['middle-right-items-link']}`}>
                     <a target="_blank" href={url}>
                          BOOK A CALL
                        </a>
                     </div>
            </div>
      </div>
    </div>
  )
}

export default WhyUs;