import React from 'react'
import { FaUsers, FaChartBar, FaStar, FaSmile, FaRProject } from "react-icons/fa"
const States = () => {
  return (
    <>
    
    <div className="md:px-10  py-10 px-4">
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-x-6 gap-y-12 divide-x divide-gray-300">
        <div className="text-center">
         <FaUsers size={50} className="text-orange-500  inline-block" />
         
          <h3 className="text-3xl font-extrabold  mt-5">15+</h3>
          <p className="text-base text-gray-800 font-semibold mt-3">Clients</p>
        </div>
        <div className="text-center">
        <FaRProject size={50} className="text-orange-500  inline-block" />
          <h3 className="text-3xl font-extrabold  mt-5">10+</h3>
          <p className="text-base text-gray-800 font-semibold mt-3">Total Projects</p>
        </div>
        <div className="text-center">
        <FaSmile size={50} className="text-orange-500  inline-block" />
          <h3 className="text-3xl font-extrabold  mt-5">50+</h3>
          <p className="text-base text-gray-800 font-semibold mt-3">Clients Satisfaction</p>
        </div>
        <div className="text-center">
        <FaStar size={50} className="text-orange-500  inline-block" />
          <h3 className="text-3xl font-extrabold  mt-5">4+</h3>
          <p className="text-base text-gray-800 font-semibold mt-3">Rating and Reviews </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default States