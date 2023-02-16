import React from 'react'
import WhyUsStyle from "./WhyUs.module.css";
import whyUsImage from "../Images/whyus-section.avif"
import { FaLinkedinIn } from "react-icons/fa";
const WhyUs = () => {
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
                    <img src={whyUsImage} alt="card-services-image"/>
                </div>
                
            </div>
            <div className={`${WhyUsStyle['middle-right-items']}`}>
                     {/* linkedIn Icons */}
                     <div className={`${WhyUsStyle['icon-holder']}`}>
                     <FaLinkedinIn/>
                     </div>
                     <div className={`${WhyUsStyle['middle-right-items-link']}`}>
                        BOOK A CALL
                     </div>
            </div>
      </div>
    </div>
  )
}

export default WhyUs;