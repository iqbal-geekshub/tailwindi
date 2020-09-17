import React from 'react'
import './Style.css'

export default function HeroSec() {
    return (
        <div className="flex flex-col md:flex-row ">
            <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:py-0 bg-gray-300 ">
                <div className="font-bold text-2xl md:text-3xl lg:text-5xl leading-tight  ">

                    <p >
                    {/* pt-8  */}
                       Data to enrich
                          
                      </p>
                    <p className="text-indigo-700 p-0">
                    <span className="text-black"> your  </span> 
                        
                            Online
                       
                    </p>
                    <p className="text-indigo-700"> Business</p>
                </div>
                <div className=" md:py-0 py-3 md:text-xs">
                    <lable>
                        This is precisely why you are bound to experience convenience and communicate without interruptions
                        with the highly advanced services of Globfone.
                        Globfone takes usability and user satisfaction to a whole new level with these exemplary services.
                    </lable>
                </div >

                <div className="flex md:py-2 py-4">
                    <div className="">
                        <button class="  bg-blue-500 hover:bg-white text-white font-semibold hover:text-blue-700  md:py-1 py-2 px-4 border border-blue-500 hover:border-blue-500 rounded">
                            Get Started
                    </button>
                    </div>
                    <div className="px-4">
                        <button class="  bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white md:py-1 py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            Live demo
                    </button>
                    </div>
                </div>


            </div>


            <div className="w-full md:w-1/2  ">
                <img className="" src={require('../../../Assets/Images/glenn.jpg')} alt="Logo"></img>
            </div>
        </div>
    )
}
