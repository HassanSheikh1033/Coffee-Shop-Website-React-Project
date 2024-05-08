import React from 'react'
import arrow from '../assets/arrow.png'
import cup from '../assets/cup.png'
import rectangle from '../assets/rectangle.png'
import frame1 from '../assets/frame1.png'
import frame2 from '../assets/frame2.png'
import frame3 from '../assets/frame3.png'
import arrow1 from '../assets/arrowup.png'
import beans from '../assets/beans.png'
import category1 from '../assets/Category1.png'
import category2 from '../assets/Category2.png'
import category3 from '../assets/Category3.png'
import category4 from '../assets/Category4.png'
import category5 from '../assets/Category5.png'
import category6 from '../assets/Category6.png'
import phone1 from '../assets/phone1.png'
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import lessthan from '../assets/lessthan.png'
import greaterthan from '../assets/greaterthan.png'
import Timg from '../assets/Timg.png'
import Timg2 from '../assets/Timg2.png'



export default function Home() {
    return (
        <>
            {/* // ====================Hero-Section============================ */}
            <section className=''>
                <div className='flex items-center justify-center flex-shrink-0 mb-[50px]'>
                    <div className='ml-[150px]'>
                        <div className=''>
                            <h1 className="text-yellow-950 text-[60px] font-normal font capitalize leading-[90px] text-wrap">
                                Discover the Art of Perfect Coffee.
                            </h1>

                            <p className="text-yellow-950 text-base font-normal font-['Poppins'] leading-tight mt-5">
                                Experience the difference as we meticulously select and roast the finest <br /> beans to create
                                a truly unforgettable cup of coffee. Join us on a journey of taste and awaken your senses,
                                one sip at a time.
                            </p>
                            <button className='flex p-[7px] bg-[#432010] rounded-[100px] items-center mt-8'>
                                <span className="px-[22px] ml-[5px] text-white text-lg font-normal font-['Poppins'] capitalize leading-tight text-center">
                                    Order Now
                                </span>
                                <div className="w-[41px] h-[41px] bg-white rounded-[22px] items relative" >
                                    <img src={arrow} className="w-6 h-6 absolute top-[6px] left-[8px]" alt="" />
                                </div>
                            </button>
                        </div>




                        <div className='flex gap-7 mt-6'>
                            <div>
                                <div>
                                    <span className="text-yellow-950 text-[45px] font-normal font1 capitalize leading-tight">
                                        1K
                                    </span>
                                    <span className="text-[#DDB772] text-[45px] font-normal font-['Secular One'] capitalize leading-tight">
                                        +
                                    </span>
                                </div>
                                <p className="text-yellow-950 text-lg font-normal font-['Poppins'] capitalize leading-tight">Reviews</p>
                            </div>

                            <div>
                                <div>
                                    <span className="text-yellow-950 text-[45px] font-normal font1 capitalize leading-tight">
                                        3K
                                    </span>
                                    <span className="text-[#DDB772] text-[45px] font-normal font-['Secular One'] capitalize leading-tight">
                                        +
                                    </span>
                                </div>
                                <p className="text-yellow-950 text-lg font-normal font-['Poppins'] capitalize leading-tight">Best Sell</p>
                            </div>

                            <div className='flex items-center flex-col'>
                                <div>
                                    <span className="text-yellow-950 text-[45px] font-normal font1 capitalize leading-tight">
                                        130K
                                    </span>
                                    <span className="text-[#DDB772] text-[45px] font-normal font-['Secular One'] capitalize leading-tight">
                                        +
                                    </span>
                                </div>
                                <p className="text-yellow-950 text-lg font-normal font-['Poppins'] capitalize leading-tight">Menu</p>
                            </div>

                        </div>

                    </div>

                    <div className=''>
                        <div className='relative'>
                            <img src={cup} className="w-[1181.21px] h-[724.35px]" alt="" />
                            <div className='absolute top-[136px] right-0 z-[-1]'>
                                <div className="text-yellow-950 text-opacity-20 text-[100px] font-normal font capitalize leading-[140px]">Coffee</div>
                                <div className="text-yellow-950 text-opacity-20 text-[100px] font-normal font capitalize leading-[140px]">Coffee</div>
                                <div className="text-yellow-950 text-opacity-20 text-[100px] font-normal font capitalize leading-[140px]">Coffee</div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>







            {/* // ========================= About-Section=========================== */}
            <section>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className="text-center text-yellow-950 text-[38px] font-medium font-['Poppins'] uppercase leading-tight">
                        Our Delicious SERVICES
                    </h1>
                    <div className='flex gap-[40px]'>
                        <hr className="w-[120px] h-[0px] border-[1px] border-orange-300" />
                        <hr className="w-[120px] h-[0px] border-[1px] border-orange-300" />
                    </div>
                    <p className="w-[722px] text-center text-yellow-950 text-base font-normal font-['Poppins'] leading-tight mt-[25px]">
                        we offer a carefully curated collection that showcases the distinct characteristics of beans sourced from specific regions.
                    </p>
                </div>



                <div className='px-[120px] py-[90px] flex'>
                    <div className='flex justify-center items-center gap-[60px]'>
                        <div className='box-container'>
                            <div className='flex flex-col items-center justify-center gap-4'>
                                <img src={frame1} alt="" />
                                <h1 className="text-center text-yellow-950 text-2xl font-medium font-['Poppins'] capitalize leading-tight">
                                    Coffee Types
                                </h1>
                                <p className="text-center text-[15px] text-yellow-950 text-base font-normal font-['Poppins'] leading-tight">
                                    We offer a tantalizing variety of coffee types to cater to your unique preferences.
                                </p>
                                <button className="text-center text-[#BF9C7A] text-base font-normal font-['Poppins'] underline leading-tight
                            flex items-center gap-2">
                                    Learn More
                                    <img src={arrow1} className="w-[16px] h-[16px]" alt="" />
                                </button>
                            </div>
                        </div>

                        <div className='box-container'>
                            <div className='flex flex-col items-center justify-center gap-4'>
                                <img src={frame2} alt="" />
                                <h1 className="text-center text-yellow-950 text-2xl font-medium font-['Poppins'] capitalize leading-tight">
                                    Different Beans
                                </h1>
                                <p className="text-center text-[15px] text-yellow-950 text-base font-normal font-['Poppins'] leading-tight">
                                    We offer a tantalizing variety of coffee types to cater to your unique preferences.
                                </p>
                                <button className="text-center text-[#BF9C7A] text-base font-normal font-['Poppins'] underline leading-tight
                            flex items-center gap-2">
                                    Learn More
                                    <img src={arrow1} className="w-[16px] h-[16px]" alt="" />
                                </button>
                            </div>
                        </div>

                        <div className='box-container'>
                            <div className='flex flex-col items-center justify-center gap-4'>
                                <img src={frame3} alt="" />
                                <h1 className="text-center text-yellow-950 text-2xl font-medium font-['Poppins'] capitalize leading-tight">
                                    Cold Coffee
                                </h1>
                                <p className="text-center text-[15px] text-yellow-950 text-base font-normal font-['Poppins'] leading-tight">
                                    We offer a tantalizing variety of coffee types to cater to your unique preferences.
                                </p>
                                <button className="text-center text-[#BF9C7A] text-base font-normal font-['Poppins'] underline leading-tight
                            flex items-center gap-2">
                                    Learn More
                                    <img src={arrow1} className="w-[16px] h-[16px]" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='flex items-center justify-center'>
                    <img src={beans} className="w-[1440px] h-[424px]" alt="" />
                </div>
            </section>




            {/* ======================   Category-Section  ========================= */}
            <section className='mt-[120px]'>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className="text-center text-yellow-950 text-[38px] font-medium font-['Poppins'] uppercase leading-tight">
                        ENJOY a new blend of Coffee style
                    </h1>
                    <div className='flex gap-[40px]'>
                        <hr className="w-[120px] h-[0px] border-[1px] border-orange-300" />
                        <hr className="w-[120px] h-[0px] border-[1px] border-orange-300" />
                    </div>
                    <p className="w-[722px] text-center text-yellow-950 text-base font-normal font-['Poppins'] leading-tight mt-[25px]">
                        Explore all flavours of coffee with us.<br /> There is always a new cup worth experiencing.
                    </p>
                </div>


                <div className='grid grid-cols-3 gap-[90px] px-[120px] py-[50px] mt-[30px]'>

                    <div className='relative flex flex-col items-center justify-center'>
                        <div>
                            <img src={category1} alt="" />
                        </div>
                        <div className='flex p-5 gap-[150px] bg-[#DDB77233] w-full'>
                            <p className="text-center text-yellow-950 text-lg font-medium font-['Inter'] leading-tight">
                                Cappuccino
                            </p>
                            <p className="text-center text-yellow-950 text-lg font-medium font-['Inter'] leading-tight">
                                ₹ 349/-
                            </p>
                        </div>
                        <div className='absolute top-[382px] flex items-center'>
                            <button className="pl-[19px] pr-[18px] py-1 bg-yellow-950 rounded-[100px] text-white
                            text-[13px] font-normal font-['Poppins'] capitalize leading-tight">
                                Buy Now
                            </button>
                        </div>
                    </div>


                    <div className='relative flex flex-col w-fit items-center justify-center'>
                        <div>
                            <img src={category2} alt="" />
                        </div>
                        <div className='flex p-5 gap-[150px] bg-[#DDB77233] w-full'>
                            <p className="text-center text-yellow-950 text-lg font-medium font-['Inter'] leading-tight">
                                Chai latte
                            </p>
                            <p className="text-center text-yellow-950 text-lg font-medium font-['Inter'] leading-tight">
                                ₹ 349/-
                            </p>
                        </div>
                        <div className='absolute top-[382px] flex items-center'>
                            <button className="pl-[19px] pr-[18px] py-1 bg-yellow-950 rounded-[100px] text-white
                            text-[13px] font-normal font-['Poppins'] capitalize leading-tight">
                                Buy Now
                            </button>
                        </div>
                    </div>


                    <div className='relative flex flex-col w-fit items-center justify-center'>
                        <div>
                            <img src={category3} alt="" />
                        </div>
                        <div className='flex p-5 gap-[150px] bg-[#DDB77233] w-full'>
                            <p className="text-center text-yellow-950 text-lg font-medium font-['Inter'] leading-tight">
                                Macchiato
                            </p>
                            <p className="text-center text-yellow-950 text-lg font-medium font-['Inter'] leading-tight">
                                ₹ 349/-
                            </p>
                        </div>
                        <div className='absolute top-[382px] flex items-center'>
                            <button className="pl-[19px] pr-[18px] py-1 bg-yellow-950 rounded-[100px] text-white
                            text-[13px] font-normal font-['Poppins'] capitalize leading-tight">
                                Buy Now
                            </button>
                        </div>
                    </div>


                    <div className='relative flex flex-col w-fit items-center justify-center'>
                        <div>
                            <img src={category4} alt="" />
                        </div>
                        <div className='flex p-5 gap-[150px] bg-[#DDB77233] w-full'>
                            <p className="text-center text-yellow-950 text-lg font-medium font-['Inter'] leading-tight">
                                Americano
                            </p>
                            <p className="text-center text-yellow-950 text-lg font-medium font-['Inter'] leading-tight">
                                ₹ 349/-
                            </p>
                        </div>
                        <div className='absolute top-[382px] flex items-center'>
                            <button className="pl-[19px] pr-[18px] py-1 bg-yellow-950 rounded-[100px] text-white
                            text-[13px] font-normal font-['Poppins'] capitalize leading-tight">
                                Buy Now
                            </button>
                        </div>
                    </div>


                    <div className='relative flex flex-col w-fit items-center justify-center'>
                        <div>
                            <img src={category5} alt="" />
                        </div>
                        <div className='flex p-5 gap-[150px] bg-[#DDB77233] w-full'>
                            <p className="text-center text-yellow-950 text-lg font-medium font-['Inter'] leading-tight">
                                Expresso
                            </p>
                            <p className="text-center text-yellow-950 text-lg font-medium font-['Inter'] leading-tight">
                                ₹ 349/-
                            </p>
                        </div>
                        <div className='absolute top-[382px] flex items-center'>
                            <button className="pl-[19px] pr-[18px] py-1 bg-yellow-950 rounded-[100px] text-white
                            text-[13px] font-normal font-['Poppins'] capitalize leading-tight">
                                Buy Now
                            </button>
                        </div>
                    </div>


                    <div className='relative flex flex-col w-fit items-center justify-center'>
                        <div>
                            <img src={category6} alt="" />
                        </div>
                        <div className='flex p-5 gap-[150px] bg-[#DDB77233] w-full'>
                            <p className="text-center text-yellow-950 text-lg font-medium font-['Inter'] leading-tight">
                                Cappuccino
                            </p>
                            <p className="text-center text-yellow-950 text-lg font-medium font-['Inter'] leading-tight">
                                ₹ 349/-
                            </p>
                        </div>
                        <div className='absolute top-[382px] flex items-center'>
                            <button className="pl-[19px] pr-[18px] py-1 bg-yellow-950 rounded-[100px] text-white
                            text-[13px] font-normal font-['Poppins'] capitalize leading-tight">
                                Buy Now
                            </button>
                        </div>
                    </div>

                </div>
            </section>




            {/* ======================   Testimonial-Section  ========================= */}
            <section className='mt-[120px] bg-[#DDB77233] py-[120px]'>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className="text-center text-yellow-950 text-[45px] font-medium font-['Poppins'] uppercase leading-tight">
                        FROM OUR CUSTOMERS
                    </h1>
                    <div className='flex gap-[40px]'>
                        <hr className="w-[120px] h-[0px] border-[1px] border-orange-300" />
                        <hr className="w-[120px] h-[0px] border-[1px] border-orange-300" />
                    </div>
                </div>


                <div className='mt-[80px] flex gap-[40px]'>
                    <div className='px-[120px] mt-[20px]'>
                        <div className='flex flex-col relative'>
                            <RiDoubleQuotesL className="w-[79.73px] h-[79.73px] text-orange-300" />
                            <p className="w-[538px] text-yellow-950 text-3xl font-normal font-['Poppins'] leading-[35px]
                            ml-[65px]">
                                I've tried coffee from various places, but Coffee Cup stands out from the rest.
                                The quality and consistency of their blends are unmatched. Each cup is a flavor
                                journey that takes my taste buds to new heights. Their commitment to sourcing
                                the finest beans and their meticulous roasting process truly shines through
                                in every sip.
                            </p>
                            <RiDoubleQuotesR className="w-[79.73px] h-[79.73px] text-orange-300" />
                        </div>
                        <p className="text-yellow-950 text-3xl font-bold font-['Signika SC'] capitalize leading-tight
                        mt-[70px] ml-[65px]">
                            - SAMANTHA R
                        </p>
                        <div className='flex gap-0 ml-[65px] mt-[40px]'>
                            <img src={lessthan} alt="" />
                            <img src={greaterthan} alt="" />
                        </div>
                    </div>


                    <div className="relative">
                        {/* <div className="relative"> */}
                        <img
                            src={Timg}
                            className="w-[445px] h-[641px] rounded-tl-[225px] rounded-tr-[225px] rounded-bl-[10px] rounded-br-[10px] z-1"
                            alt=""
                        />
                        {/* </div> */}
                        <img 
                            src={Timg2}
                            className="w-[528.86px] h-[607.98px] absolute top-[145px] right-[240px] z-[-1] transform1"
                            alt="" />
                    </div>
                </div>
            </section>

        </>
    )
}
