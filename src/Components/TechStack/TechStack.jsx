import React from 'react'
import myStyle from "./Tech-Stack.module.css";
import TechStackImageOne from "../Images/tech-stack-1.jpg";
import TechStackImageTwo from "../Images/tech-stack-2.jpg";
import TechStackImageThree from "../Images/tech-stack-3.jpg";
import {BsTelephone} from "react-icons/bs"; 
 const TechStack = () => {
  let url = "https://calendly.com/muddahany/30min";
  return (
    <div>
      <div className={`flex ${myStyle['background-color']}`}>
          <h1 className={`text-white ${myStyle['techstack-title']}`}>
          Tech-Stack
          </h1>
           {/* Cards Section */}
           <div className={`flex ${myStyle['boxes-parent']} container`}>
              {/* Image Card   */}
            <div className={`mr-4 ${myStyle['image-card']}`}>
                {/* layer that holds the image */}
                <div className={`${myStyle['image-holder']}`}>
                    {/* put the image inside the image holder */}
                    <img src={TechStackImageOne} alt="tech-stack-image-one"/>
                </div>
                <div className={`${myStyle['text-holder']}`}>
                  <div className={`${myStyle['card-title']}`}>
                  Front-End Team
                  </div>
                  <div className={`${myStyle['card-description']}`}>
                    <span className={`text-white`}>Angular</span>,
                    <span className={`text-white`}>React</span>,
                    <span className={`text-white`}>Vue</span>
                  </div>
                  
                  
                </div>
            </div>
            <div className={`mr-4 ${myStyle['image-card']}`}>
                {/* layer that holds the image */}
                <div className={`${myStyle['image-holder-two']}`}>
                    {/* put the image inside the image holder */}
                    <img className={`${myStyle['image-two-height']}`}src={TechStackImageTwo} alt="tech-stack-image-one"/>
                </div>
                <div className={`${myStyle['text-holder']}`}>
                  <div className={`${myStyle['card-title']}`}>
                  Back-End Team
                  </div>
                  <div className={`${myStyle['card-description']}`}>
                    <span className={`text-white`}>Node.js</span>,
                    <span className={`text-white`}>AWS</span>
                  </div>
                  
                  
                </div>
            </div>
            <div className={`ml-4 ${myStyle['image-card']}`}>
                {/* layer that holds the image */}
                <div className={`${myStyle['image-holder-three']}`}>
                    {/* put the image inside the image holder */}
                    <img className={`${myStyle['image-three-height']}`} src={TechStackImageThree} alt="tech-stack-image-one"/>
                </div>
                <div className={`${myStyle['text-holder']}`}>
                  <div className={`absolute top-[1px]  ${myStyle['card-title']} ${myStyle['card-title-three']}`}>
                  Mobile Team
                  </div>
                  <div className={`w-[267px] absolute top-[50px] ${myStyle['card-description']}`}>
                    <span className={`text-white`}>Android</span>,
                    <span className={`text-white`}>React Native</span>,
                    <span className={`text-white`}>Flutter</span>
                    <div className={`text-white`}>IOS</div>
                  </div>
                  
                  
                </div>
            </div>
           </div>
           <div className={`${myStyle['middle-right-items']}`}>
                     {/* linkedIn Icons */}
                     <div className={`${myStyle['icon-holder']}`}>
                      <a target="_blank" href={url}>
                        <BsTelephone/>
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

export default TechStack;
