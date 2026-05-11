import React from 'react';
import { FaLeaf } from "react-icons/fa6";
import { FaPencilRuler } from "react-icons/fa";
import { MdOutlineRecycling } from "react-icons/md";
import { RiLightbulbFlashFill } from "react-icons/ri";


const Features = () => {
    return (
        <div className="w-10/12 mx-auto ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                {/* Card 1 */}
                <div className="group bg-white border border-gray-100 hover:border-gray-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="w-14 h-14 flex items-center justify-center bg-emerald-100 rounded-2xl mb-8 group-hover:bg-emerald-600 transition-colors">
                        <FaLeaf className="text-4xl text-emerald-600 group-hover:text-white transition-colors" />
                    </div>

                    <h2 className="text-xl font-semibold text-gray-900 mb-3">
                        Eco-Friendly Materials
                    </h2>

                    <p className="text-gray-600 leading-relaxed text-[15px]">
                        We craft our furniture using responsibly sourced,
                        environmentally friendly materials that minimize ecological impact.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="group bg-white border border-gray-100 hover:border-gray-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="w-14 h-14 flex items-center justify-center bg-amber-100 rounded-2xl mb-8 group-hover:bg-amber-600 transition-colors">
                        <FaPencilRuler className="text-4xl text-amber-600 group-hover:text-white transition-colors" />
                    </div>

                    <h2 className="text-xl font-semibold text-gray-900 mb-3">
                        Effortless Assembly
                    </h2>

                    <p className="text-gray-600 leading-relaxed text-[15px]">
                        Thoughtfully designed for quick and simple setup — no extra tools required.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="group bg-white border border-gray-100 hover:border-gray-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="w-14 h-14 flex items-center justify-center bg-green-100 rounded-2xl mb-8 group-hover:bg-green-600 transition-colors">
                        <MdOutlineRecycling className="text-4xl text-green-600 group-hover:text-white transition-colors" />
                    </div>

                    <h2 className="text-xl font-semibold text-gray-900 mb-3">
                        Giving Back To Nature
                    </h2>

                    <p className="text-gray-600 leading-relaxed text-[15px]">
                        Every purchase contributes to reforestation efforts,
                        helping restore and protect green spaces worldwide.
                    </p>
                </div>

                {/* Card 4 */}
                <div className="group bg-white border border-gray-100 hover:border-gray-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="w-14 h-14 flex items-center justify-center bg-sky-100 rounded-2xl mb-8 group-hover:bg-sky-600 transition-colors">
                        <RiLightbulbFlashFill className="text-4xl text-sky-600 group-hover:text-white transition-colors" />
                    </div>

                    <h2 className="text-xl font-semibold text-gray-900 mb-3">
                        Sustainable Production
                    </h2>

                    <p className="text-gray-600 leading-relaxed text-[15px]">
                        Dedicated to reducing waste and promoting ethical,
                        eco-conscious manufacturing practices.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Features;