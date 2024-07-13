import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="bg-[#6cd9f9] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-10 px-10 py-10 rounded-3xl justify-center ">
        <div className="flex flex-col items-center lg:items-start gap-5">
          <img src="/assets/logo.png" alt="footer logo" />
          <p className="text-center lg:text-start">
          Combines the flexibility of React Native with the reliability of Firebase authentication and seamless integration of character data, making it the ideal choice for individuals and teams looking to boost efficiency and manage tasks effectively.
          </p>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-5">
          <p className="text-xl font-medium">Product</p>
          <a href="" className="text-base">Download App</a>
          <a href="" className="text-base">Features</a>
         
        </div>
       
      
        <div className="flex items-center gap-5">
        
                <FontAwesomeIcon icon={faFacebook} className="footer-icon text-[#ea2b21]" />
                <FontAwesomeIcon icon={faWhatsapp} className="footer-icon text-[#ea2b21]" />
                <FontAwesomeIcon icon={faTwitter} className="footer-icon text-[#ea2b21]" />
                <FontAwesomeIcon icon={faInstagram} className="footer-icon text-[#ea2b21]" />
        </div>
      </div>
     


    </div>
  );
};

export default Footer;

      
      

         
   
