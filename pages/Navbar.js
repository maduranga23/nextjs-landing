import React from 'react'

const Navbar = () => {
  return (
    <div className=''>
        <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
            <img src="/assets/logo.png" alt="logo" />
            <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
               <a href=''>Home</a>
               <a href=''>App Features</a>
               <a href=''>Download</a>
               <a href=''>About</a>
               <a href=''>Contact</a>
            </div>
            <button className='py-3 px-5 btn bg-white text-[#ea2b21] border-none hover:bg-[#ea2b21] hover:text-white capitalize rounded-full'>
                Get Started
            </button>
        </div>
    </div>
  )
}

export default Navbar