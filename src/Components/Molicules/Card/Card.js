import React from 'react'
import './Style.css'

export default function Card() {
    return (
        <div className="py-8 px-8">
            <div className="text-center py-8 ">
                <p className=" font-bold text-4xl ">
                    From the Blog
                </p>
                <p className="text-2xl text-gray-700">
                    This is precisely why you are bound to experience convenience and communicate
                </p>

            </div>
            {/* ______________________________ */}
            <div className="flex justify-evenly flex-col md:flex-row ">
                <div className="px-3">
                    <div className="  rounded border rounded-lg ">
                        <div className=" ">
                            {/* w-full md:w-1/2 */}
                            <img className="rounded-t-lg" src={require('../../../Assets/Images/glenn.jpg')} alt="Logo"></img>
                        </div>
                        <div className="py-5 px-5 pb-8">
                            <p className="text-blue-400 font-semibold cursor-pointer hover:text-blue-700">
                                Blog
                            </p>
                            <p className="font-bold text-2xl py-3">
                                Boost your conversation rate
                            </p>
                            <p className="text-gray-500 ">
                                This is precisely why you are bound to experience convenience and communicate
                                This is precisely why you are bound to experience convenience and communicate
                            </p>
                        </div>
                        <div className="flex pt-6 ">
                            <div className="px-4 cursor-pointer pt1">
                                <img className="rounded-full h-12  flex items-center justify-center " src={require('../../../Assets/Images/profile.png')} alt="img"></img>
                            </div>

                            <div>
                                <p className=" text-gray-700">
                                    Roel Aufderhar
                        </p>
                                <p className="text-blue-400 pb-3">
                                    Mar 16,2020 6 min read
                        </p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="px-3">
                    <div className=" rounded border rounded-lg ">
                        <div className=" ">
                            {/* w-full md:w-1/2 */}
                            <img className="rounded-t-lg" src={require('../../../Assets/Images/glenn.jpg')} alt="Logo"></img>
                        </div>
                        <div className="py-5 px-5 ">
                            <p className="text-blue-400 font-semibold cursor-pointer hover:text-blue-700">
                                Video
                            </p>
                            <p className="font-bold text-2xl py-3">
                                How to use serch engin optimazation
                            </p>
                            <p className="text-gray-500 ">
                                This is precisely why you are bound to experience convenience and communicate
                                This is precisely why you are bound to experience convenience and communicate
                            </p>
                        </div>
                        <div className="flex  ">
                            <div className="px-4 cursor-pointer">
                                <img className="rounded-full h-12  flex items-center justify-center " src={require('../../../Assets/Images/profile.png')} alt="img"></img>
                            </div>

                            <div>
                                <p className=" text-gray-700">
                                    Roel Aufderhar
                        </p>
                                <p className="text-blue-400 pb-3">
                                    Mar 16,2020 6 min read
                        </p>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="px-3">


                    <div className=" rounded border rounded-lg  ">
                        <div className=" ">
                            {/* w-full md:w-1/2 */}
                            <img className="rounded-t-lg" src={require('../../../Assets/Images/glenn.jpg')} alt="Logo"></img>
                        </div>
                        <div className="py-5 px-5 ">
                            <p className="text-blue-400 font-semibold cursor-pointer hover:text-blue-700">
                                Case Study
                            </p>
                            <p className="font-bold text-2xl py-3">
                                Improve your customer experience
                            </p>
                            <p className="text-gray-500 ">
                                This is precisely why you are bound to experience convenience and communicate
                                This is precisely why you are bound to experience convenience and communicate
                            </p>
                        </div>
                        <div className="flex  ">
                            <div className="px-4 cursor-pointer  border--transparent hover:border-blue-700">
                                <img className="rounded-full h-12  flex items-center justify-center " src={require('../../../Assets/Images/profile.png')} alt="img"></img>
                            </div>

                            <div>
                                <p className=" text-gray-700">
                                    Roel Aufderhar
                        </p>
                                <p className="text-blue-400 pb-3">
                                    Mar 16,2020 6 min read
                        </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>



        </div>
    )
}
