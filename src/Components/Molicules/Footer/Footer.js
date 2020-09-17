import React from 'react'
import './Style.css'
export default function Footer() {
    return (
        <div className=" text-gray-700 p-8">
            <div className="flex flex-col md:flex-row justify-center  align-center pt-6">
                <p className="px-4 py-3  cursor-pointer hover:text-blue-700">
                    About
                </p>
                <p className="px-4 py-3 cursor-pointer hover:text-blue-700">
                    Blog
                </p>
                <p className="px-4 py-3  cursor-pointer hover:text-blue-700">
                    Jobs
                </p>
                <p className="px-4 py-3 cursor-pointer hover:text-blue-700">
                    Press
                </p>
                <p className="px-4  py-3 cursor-pointer hover:text-blue-700">
                    Accessibility
                </p>
                <p className="px-4 py-3 cursor-pointer hover:text-blue-700 ">
                    Partners
                </p>
            </div>

            <div className="flex justify-center p-4 text-3xl">

                <div className="px-4 cursor-pointer hover:text-blue-700">
                    <i class="fa fa-facebook-square "></i>
                </div>

                <div className="px-4 cursor-pointer hover:text-blue-700">
                    <i class="fa fa-linkedin"></i>
                </div>


                <div className="px-4 cursor-pointer hover:text-blue-700">
                    <i class="fa fa-twitter"></i>
                </div>

                <div className="px-4  cursor-pointer hover:text-blue-700">
                    <i class="fa fa-github"></i>
                </div>


                <div className="px-4 cursor-pointer hover:text-blue-700 ">
                    <i class="fa fa-skyatlas"></i>
                </div>

            </div>

            <div className="text-center pb-4">
                <p>
                    © 2020 Workflow,Inc All right reserved.
                </p>
            </div>

        </div>
    )
}
