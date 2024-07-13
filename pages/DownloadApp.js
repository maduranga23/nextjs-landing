import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlay, faApple } from '@fortawesome/free-brands-svg-icons';
const DownloadApp = () => {
  return (
    <div className='container mx-auto flex flex-col gap-5 items-center justify-center py-20'>
            <p className=' text-xl md:text-2xl lg:text-4xl font-medium text-center'>Download and Enjoy Now!</p>
            <p className='text-base sm:text-lg lg:text-2xl font-medium text-center'>Start fulfilling your language dreams with our school</p>
         
            <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5 py-10">
           
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="mx-2 download-icon">
            <img src="/assets/googleplay.png" alt="" />
        </a>
        <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" className="mx-2 download-icon">
       
        <img src="/assets/appstore.png" alt="" />
        </a>
        </div>
    </div>
  )
}



export default DownloadApp;
