import React from 'react'
import servicesStyle from "./Services.module.css";
import servicesIconOne from "../Images/service-icon-1.svg";
import servicesIconTwo from "../Images/service-icon-2.svg";
import servicesIconThree from "../Images/service-icon-3.svg";
import cardServicesImage from "../Images/services-section-image.webp";
import { FaLinkedinIn } from "react-icons/fa";
const Services = () => {
  return (
    <div>
        {/* Background Image Color */}
        <div className={` flex ${servicesStyle['background-color']}`}>
            <h1 className={`font-bold ${servicesStyle['services-header']}`}>we enable seamless digital engagement</h1>
            <ul className={`flex flex-row ${servicesStyle['services-icon']}`}>
                <li className={`flex flex-col mr-24 text-white items-center justify-center`}>
                    <img src={servicesIconOne} alt="services-icon-one" />
                    <div className='mt-6'>
                        Platforms
                    </div>
                </li>
                <li className={`flex flex-col mr-24 text-white items-center justify-center`}>
                    <img src={servicesIconTwo} alt="services-icon-one" />
                    <div className='mt-6'>
                        Ecommerce
                    </div>
                </li>
                <li className={`flex flex-col text-white items-center justify-center`}>
                    <img src={servicesIconThree} alt="services-icon-one" />
                    <div className='mt-6'>
                        Apps
                    </div>
                </li>
            </ul>
            <div className={`flex flex-row items-center ${servicesStyle['triangle-parent']}`}>
                <div className={`${servicesStyle['triangle-shape']}`}></div>
                <div className={`${servicesStyle['triangle-gradient']}`}>
                </div>
                <div className={`${servicesStyle['triangle-description']}`}>
                    START A PROJECT
                </div>
            </div>
            {/* Image Card   */}
            <div className={`${servicesStyle['image-card']}`}>
                {/* layer that holds the image */}
                <div className={`${servicesStyle['image-holder']}`}>
                    {/* put the image inside the image holder */}
                    <img src={cardServicesImage} alt="card-services-image"/>
                </div>
                <div className={`${servicesStyle['text-holder']}`}>
                product-design
                </div>
            </div>
            <div className={`${servicesStyle['middle-right-items']}`}>
                     {/* linkedIn Icons */}
                     <div className={`${servicesStyle['icon-holder']}`}>
                     <FaLinkedinIn/>
                     </div>
                     <div className={`${servicesStyle['middle-right-items-link']}`}>
                        BOOK A CALL
                     </div>
            </div>
        </div>
    </div>
  )
}

export default Services