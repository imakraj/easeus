import React from 'react'
import { Link } from "react-router-dom"
import logo from "../assets/easeus.png"
import { useState } from "react"
import close from "../assets/close.png"
import menu from "../assets/menu.png"

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="w-full px-6 md:px-8 py-6 absolute top-0 z-50">
      <div className='mx-auto max-w-screen-2xl flex'>
        <Link to="/" className="pointer-events-auto">
          <img src={logo} alt="" className='w-8' />
        </Link>
        <nav className="items-center justify-evenly hidden flex-1 max-w-md mx-auto font-light text-base text-light sm:flex">
          <Link to="/" className='hover:font-medium hover:text-white pointer-events-auto'>Home</Link>
          <Link to="/work" className='hover:font-medium hover:text-white pointer-events-auto'>Work</Link>
          <Link to="/about" className='hover:font-medium hover:text-white pointer-events-auto'>About</Link>
        </nav>

        {/* Mobile Navigation */}
        <div className='sm:hidden flex flex-1 justify-end items-center z-50'>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className={`${toggle ? "w-[16px] [h-16px] opacity-30 fixed" : "w-[24px] h-[24px]"} object-contain`}
            onClick={() => setToggle(!toggle)}
          />
        </div>

        {/* SideBar */}
        <div className={`${!toggle ? "hidden" : "flex"} flex-col justify-between p-6 bg-black fixed top-0 right-0 min-w-[240px] h-screen`} >
          <nav className='sm:hidden flex flex-col gap-4 mt-2'>
            <Link to="/" className='hover:font-medium hover:text-white pointer-events-auto'>Home</Link>
            <Link to="/work" className='hover:font-medium hover:text-white pointer-events-auto'>Work</Link>
            <Link to="/about" className='hover:font-medium hover:text-white pointer-events-auto'>About</Link>
          </nav>

          <div className="sm:hidden justify-center items-center md:flex-initial pointer-events-auto">
            <Link className="font-medium py-2 px-7 text-base md:text-base border-none bg-light hover:bg-rose-600 rounded-full transition-colors" to="/contact">Let's Talk</Link>
          </div>
        </div>

        <div className="sm:flex hidden justify-center items-center md:flex-initial pointer-events-auto">
          <Link className="font-medium py-2 px-7 text-base md:text-base border-none bg-light hover:bg-rose-600 rounded-full transition-colors" to="/contact">Let's Talk</Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar