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
        <div className="bg-white w-10/12 mx-auto py-4 overflow-hidden relative">
            <div className="w-full mx-auto relative">

                {/* Stronger Left Fade */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none" />
                
                {/* Stronger Right Fade */}
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none" />

                {/* Marquee */}
                <div className="flex animate-marquee whitespace-nowrap">
                    {[...categories, ...categories, ...categories].map((category, index) => {
                        const Icon = category.icon;
                        return (
                            <div
                                key={index}
                                className="group inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-medium 
                                           bg-gray-100 hover:bg-black text-gray-700 hover:text-white 
                                           transition-all duration-300 cursor-pointer mx-4"
                            >
                                <div className="w-11 h-11 flex items-center justify-center bg-white rounded-full 
                                              group-hover:bg-white shadow-sm transition-all">
                                    <Icon 
                                        size={24} 
                                        className="text-gray-700 group-hover:text-black transition-colors" 
                                    />
                                </div>
                                <span>{category.label}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Banner;