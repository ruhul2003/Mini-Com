'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { CiSearch } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className='w-full bg-white sticky top-0 z-50'>
            <nav className="w-10/12 mx-auto flex items-center justify-between px-4 md:px-8 py-4">

                {/* Logo */}
                <Image
                    width={130}
                    height={35}
                    src="/Images/Logo-dark.png"
                    alt="Logo"
                    priority
                />

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8 text-[13px] font-medium">
                    <a href="#" className="hover:text-gray-600 cursor-pointer transition-colors">HOME</a>

                    {/* Desktop Dropdown */}
                    <div 
                        className="relative group cursor-pointer"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                        <span className="flex items-center gap-1 hover:text-gray-600 transition-colors">
                            COLLECTIONS
                            <FaAngleDown className="text-xs transition-transform group-hover:rotate-180" />
                        </span>

                        <div className={`absolute left-0 mt-3 w-56 bg-white shadow-xl rounded-2xl py-4 px-2 z-50 border border-gray-100 
                            transition-all duration-200 ${isDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                            <ul className="text-sm text-gray-700">
                                <li className="px-5 py-2.5 hover:bg-gray-100 rounded-xl cursor-pointer">All Collections</li>
                                <li className="px-5 py-2.5 hover:bg-gray-100 rounded-xl cursor-pointer">Bedroom</li>
                                <li className="px-5 py-2.5 hover:bg-gray-100 rounded-xl cursor-pointer">Dining Room</li>
                                <li className="px-5 py-2.5 hover:bg-gray-100 rounded-xl cursor-pointer">Living Room</li>
                                <li className="px-5 py-2.5 hover:bg-gray-100 rounded-xl cursor-pointer">Office Furniture</li>
                            </ul>
                        </div>
                    </div>

                    <a href="#" className="hover:text-gray-600 cursor-pointer transition-colors">PRODUCTS</a>
                    <a href="#" className="hover:text-gray-600 cursor-pointer transition-colors">CONTACT</a>
                </div>

                {/* Desktop Icons - Hidden on Mobile */}
                <div className="hidden md:flex items-center gap-8">
                    <CiSearch className="hover:cursor-pointer transition-transform duration-200 hover:scale-110" size={24} />
                    <FiUser className="hover:cursor-pointer transition-transform duration-200 hover:scale-110" size={24} />
                    <FaRegStar className="hover:cursor-pointer transition-transform duration-200 hover:scale-110" size={24} />
                    
                    <div className='bg-[#F8C400] p-4 rounded-full hover:bg-[#e6b000] transition-colors cursor-pointer'>
                        <IoCartOutline className="transition-transform duration-200 hover:scale-110" size={24} />
                    </div>
                </div>

                {/* Hamburger Button - Visible only on Mobile */}
                <button 
                    className="md:hidden text-2xl"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t">
                    <ul className="flex flex-col text-[15px] font-medium py-6 px-8 space-y-6">
                        <li><a href="#" className="hover:text-gray-600">HOME</a></li>
                        
                        <li>
                            <span className="font-medium">COLLECTIONS</span>
                            <ul className="pl-4 mt-3 space-y-3 text-sm text-gray-600">
                                <li>All Collections</li>
                                <li>Bedroom</li>
                                <li>Dining Room</li>
                                <li>Living Room</li>
                                <li>Office Furniture</li>
                            </ul>
                        </li>

                        <li><a href="#" className="hover:text-gray-600">PRODUCTS</a></li>
                        <li><a href="#" className="hover:text-gray-600">CONTACT</a></li>

                        {/* Icons moved here for Mobile */}
                        <li className="pt-4 border-t flex gap-8 text-2xl">
                            <CiSearch className="cursor-pointer" />
                            <FiUser className="cursor-pointer" />
                            <FaRegStar className="cursor-pointer" />
                            <div className='bg-[#F8C400] p-3 rounded-full -mt-1'>
                                <IoCartOutline className="text-xl" />
                            </div>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default NavBar;