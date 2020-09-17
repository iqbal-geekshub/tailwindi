import React, { useState } from 'react'
import './Style.css'

import {
   Link
  
  } from "react-router-dom";
export default function Nav() {




    return (
        <nav className="flex item-center justify-between flex-wrap .bg-white p-6">
            <div className=" py-3">
                <img src={require('../../../Assets/Images/tailwindui-logo.svg')} alt="Logo"></img>
            </div>
            <div class="block lg:hidden py-1">
                <button class="flex items-center px-3 py-2 border rounded text-gray-600 border-gray-600 hover:blue-600 hover:border-blue-600 hover:bg-gray-100">
                    <svg class="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            <div className="hidden lg:block flex item-center py-3  w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="  px-5  cursor-pointer hover:text-gray-600 ">
                    <lable className=" font-semibold border-b-2   border-transparent text-gray-800 hover:border-b-2 hover:border-blue-600  ">
                    <Link to="/">Home</Link>
                    </lable>
                </div>
                <div className=" px-4   hover:text-gray-600 cursor-pointer">
                    <lable className="  border-b-2   border-transparent text-gray-700 hover:border-b-2 hover:border-blue-600  ">
                        
                        <Link to="/team">Team</Link>
                    </lable>
                </div>
                <div className=" px-4  hover:text-gray-600 cursor-pointer">
                    <lable className="  border-b-2   border-transparent text-gray-800 hover:border-b-2 hover:border-blue-600  ">
                       
                        <Link to="/blog"> Blog</Link>
                    </lable>
                </div>
                <div className=" px-4  hover:text-gray-600 cursor-pointer">
                    <lable className="  border-b-2   border-transparent text-gray-800 hover:border-b-2 hover:border-blue-600  ">
                       
                        Calander
                    </lable>
                </div>

            </div>

            <div className=" item-center hidden lg:flex">
                <div className="px-4">
                    <button class="  bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        Sign In
                    </button>
                </div>
                <div className="py-1 px-4">
                    <i className="fa fa-bell text-gray-500 fa-2x cursor-pointer hover:text-blue-700 "></i>
                </div>
                <div className="px-4">
                    <img className="rounded-full h-10  flex items-center justify-center " src={require('../../../Assets/Images/profile.png')} alt="img"></img>
                </div>
            </div>
        </nav>
    )
}
