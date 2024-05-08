import React from 'react'
import logo from '../assets/Nlogo.png'
import app from '../assets/app.png'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'


export default function Footer() {
    return (
        <section>
            <div className='footerbg flex flex-col items-center justify-center p-[60px] gap-10'>
                <div className='flex justify-center items-center gap-1 mt-[60px]'>
                    <img src={logo} className='w-[82px] h-[59px]' alt="" />
                    <p className="text-center text-white text-[22px] font-normal font-['Salsa'] leading-tight">The</p>
                    <p className="text-center text-[#ffffff] text-[22px] font-normal font-['Salsa'] leading-tight">Coffee Cup</p>
                </div>

                <p className="w-[722px] text-center text-white text-base font-normal font-['Poppins'] leading-tight">
                    Sip, Savor, and Be Captivated by Coffee Cup Mastery.
                </p>

                <div>
                    <img src={app} alt="" />
                </div>
            </div>
           

           {/* 2nd Section */}
            <div className='bg-[#1B0B04] pt-[40px] pb-[20px] px-[90px]'>
                <div className='flex justify-between'>
                    <div className='flex flex-col w-fit gap-3 items-start'>
                        <h2 className="text-center text-white text-xl font-medium font-['Poppins'] capitalize leading-tight">
                            About Company
                        </h2>
                        <p className="w-72 text-white text-base font-normal font-['Poppins'] leading-tight mt-[20px]">
                            Sint metus, integer, sociis, aenean
                            <br />aenean nibh biben.
                        </p>
                        <div className='flex flex-col gap-3 mt-[20px]'>
                            <div className='flex gap-2'>
                                <img src={icon1} className="w-6 h-6 relative" alt="" />
                                <span className="text-white text-[15px] text-base font-normal font-['Poppins'] leading-tight" >
                                    3rd Street. LA
                                </span>
                            </div>
                            <div className='flex gap-2'>
                                <img src={icon2} className="w-6 h-6 relative" alt="" />
                                <span className="text-white text-[15px] text-base font-normal font-['Poppins'] leading-tight" >
                                    363576586798009
                                </span>
                            </div>
                            <div className='flex gap-2'>
                                <img src={icon3} className="w-6 h-6 relative" alt="" />
                                <span className="text-white text-[15px] text-base font-normal font-['Poppins'] leading-tight" >
                                    info@javajolt.com
                                </span>
                            </div>
                        </div>
                    </div>

                  
                    <div className='flex flex-col'>
                        <h2 className="text-center text-white text-xl font-medium font-['Poppins'] capitalize leading-tight">
                            Useful Links
                        </h2>
                        <div className='flex flex-col gap-4 mt-[36px]'>
                            <p className="text-center text-[15px] text-white text-base font-normal font-['Poppins'] leading-tight">link1</p>
                            <p className="text-center text-[15px] text-white text-base font-normal font-['Poppins'] leading-tight">link2</p>
                            <p className="text-center text-[15px] text-white text-base font-normal font-['Poppins'] leading-tight">link3</p>
                            <p className="text-center text-[15px] text-white text-base font-normal font-['Poppins'] leading-tight">link4</p>
                        </div>
                    </div>


                    <div className='flex flex-col items-start'>
                        <h2 className="text-center text-white text-xl font-medium font-['Poppins'] capitalize leading-tight">
                            Opening Hours
                        </h2>
                        <div className='flex flex-col gap-4 mt-[36px]'>
                            <p className="text-[15px] text-white text-base font-normal font-['Poppins'] leading-tight">
                                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tem
                            </p>
                            <div className='mt-[12px]'>
                                <span className="text-white text-base font-semibold font-['Poppins'] leading-tight">Monday - Friday:- </span>
                                <span className="text-white text-base font-normal font-['Poppins'] leading-tight">09:00 AM - 08:00 PM</span>
                            </div>
                            <div>
                                <span className="text-white text-base font-semibold font-['Poppins'] leading-tight">Monday - Friday:- </span>
                                <span className="text-white text-base font-normal font-['Poppins'] leading-tight">09:00 AM - 08:00 PM</span>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="w-[1240px] h-[0px] border border-white border-opacity-20 mt-[25px]"></div>

                {/* CopyRight */}
                <div className='flex items-center justify-between mt-[15px]'>
                    <p className="text-white text-opacity-60 text-[13px] font-normal font-['Poppins'] leading-tight">
                        © 2024 SyCo-Assassin. All right reserved.
                    </p>
                    <div className='flex justify-between gap-[50px]'>
                        <p className="text-right text-white text-opacity-60 text-[13px] font-normal font-['Poppins'] leading-tight">
                            Privacy Policy
                        </p>
                        <p className="text-right text-white text-opacity-60 text-[13px] font-normal font-['Poppins'] leading-tight">
                            Support
                        </p>
                        <p className="text-right text-white text-opacity-60 text-[13px] font-normal font-['Poppins'] leading-tight">
                            Terms & Condition
                        </p>
                    </div>
                </div>

            </div>

        </section>
    )
}
