import React from 'react';
import { 
  GiFlexibleLamp, 
  GiTable, 
  GiFlowerPot, 
  GiSofa, 
  GiBed, 
  GiBookshelf,
  GiOfficeChair,
} from "react-icons/gi";
import Image from 'next/image';

const categories = [
  { icon: GiTable, label: "Tables & Desks" },
  { icon: GiFlexibleLamp, label: "Lighting & Lamps" },
  { icon: GiFlowerPot, label: "Flower Pots & Planters" },
  { icon: GiSofa, label: "Sofas & Seating" },
  { icon: GiBed, label: "Bedroom Furniture" },
  { icon: GiBookshelf, label: "Storage & Organization" },
  { icon: GiOfficeChair, label: "Office Chairs" },
];

const Banner = () => {
    return (
        <div className="bg-white w-10/12 mx-auto mt-16 flex overflow-hidden">
            <div className="w-full mx-auto flex flex-col ">
                
                {/* Marquee Section */}
                <div className="w-full mx-auto relative mb-12">
                    {/* Left Fade */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none" />
                    {/* Right Fade */}
                    <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none" />

                    <div className="flex animate-marquee whitespace-nowrap">
                        {[...categories, ...categories, ...categories].map((category, index) => {
                            const Icon = category.icon;
                            return (
                                <div
                                    key={index}
                                    className="group inline-flex items-center gap-3 px-5 md:px-6 py-3 rounded-full text-sm font-medium 
                                               bg-gray-100 hover:bg-black text-gray-700 hover:text-white 
                                               transition-all duration-300 cursor-pointer mx-3"
                                >
                                    <div className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center bg-white rounded-full 
                                                  group-hover:bg-white shadow-sm transition-all">
                                        <Icon 
                                            size={22} 
                                            className="text-gray-700 group-hover:text-black transition-colors" 
                                        />
                                    </div>
                                    <span className="text-xs md:text-sm">{category.label}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Why Choose Us Section */}
                <div className="w-full mx-auto">
                    <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-center">

                        {/* Left Content */}
                        <div className="lg:w-1/2 space-y-6">
                            <p className='text-[13px] tracking-widest text-gray-500 font-medium'>WHY CHOOSE US</p>
                            
                            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
                                Beyond Furniture <br /> Creating A Lifestyle
                            </h1>

                            <p className='text-[15px] md:text-base text-gray-600 leading-relaxed'>
                                With thousands of satisfied customers, Minicom is a trusted name in quality furniture. 
                                Our thoughtfully designed pieces bring comfort, style, and functionality to every home.
                            </p>

                            <div className='flex flex-col sm:flex-row gap-6 md:gap-8 items-start sm:items-center'>
                                <button className='bg-black hover:bg-gray-800 transition px-8 py-3.5 text-white rounded-lg font-medium text-sm'>
                                    Learn More
                                </button>

                                <div className="flex items-center gap-4">
                                    <Image 
                                        src="/Images/why-choose-us.png" 
                                        alt="Why Choose Us" 
                                        width={140} 
                                        height={50} 
                                        className="object-contain"
                                    />
                                    <p className='text-sm text-gray-600 leading-tight'>
                                        Trusted by thousands of <br /> satisfied customers
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Image - Now Larger */}
                        <div className="lg:w-1/2 w-full flex items-center justify-center lg:justify-end">
                            <Image 
                                src="/Images/hero.png" 
                                alt="Hero Image" 
                                width={950} 
                                height={650}
                                className="w-full max-w-[620px] lg:max-w-[680px] xl:max-w-[750px] rounded-3xl object-cover"
                                priority
                            />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;