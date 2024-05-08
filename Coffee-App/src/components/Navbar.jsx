import React from 'react'
import logo from '../assets/Nlogo.png'
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";

export default function Navbar() {
    return (
        <section className='nav-container'>
            <div className='flex justify-between py-[8px] px-2 max-w-[80%] mx-auto'>
                <div className='flex justify-center items-center gap-1'>
                    <img src={logo} className='w-[82px] h-[59px]' alt="" />
                    <p className="text-center text-black text-[22px] font-normal font-['Salsa'] leading-tight">The</p>
                    <p className="text-center text-[#432010] text-[22px] font-normal font-['Salsa'] leading-tight">Coffee Cup</p>
                </div>

                <div className='flex'>
                    <ul className='flex items-center justify-between gap-[35px]'>
                        <a href="#" className="text-yellow-950 text-normal font-semibold font-['Poppins'] capitalize leading-tight">
                            Home
                        </a>
                        <a href="#" className="text-yellow-950 text-normal font-normal font-['Poppins'] capitalize leading-tight">
                            Services
                        </a>
                        <a href="#" className="text-yellow-950 text-normal font-normal font-['Poppins'] capitalize leading-tight">
                            Menu
                        </a>
                        <a href="#" className="text-yellow-950 text-normal font-normal font-['Poppins'] capitalize leading-tight">
                            Reviews
                        </a>
                    </ul>
                </div>

                <div className='flex items-center justify-between gap-4'>
                    <div className='flex gap-3'>
                        <MdOutlineShoppingCart className='w-6 h-6 relative' />
                        <IoIosSearch className='w-6 h-6 relative' />
                    </div>
                    <div>
                        <button className="text-white text-[15px] font-normal font-['Poppins'] capitalize leading-tight
                    pl-[25px] pr-6 py-2 bg-yellow-950 rounded-[100px]">
                            Signup
                        </button>
                    </div>
                </div>

            </div>

        </section>
    )
}
