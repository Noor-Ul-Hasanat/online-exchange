import React from 'react'
import SwapVertIcon from '@mui/icons-material/SwapVert';

export const Swap = () => {
  return (
    <>
      <div>
        {/* Heading section */}
        <div className="flex justify-between items-center mb-6 pb-6 pt-1 ">
          <h1 className="text-3xl  text-gray-700 font-semibold"> Swap</h1>
          {/* <button className="text-blue-500 font-medium">Profile</button> */}
        </div>
        <div className='bg-white rounded-lg shadow-md w-full'>
          <div className="bg-white  p-6  mb-6 flex  justify-center flex-col items-center justify-self-center">
            {/* Input Section */}
            <div className="mb-4 border-2 border-gray-200 w-full rounded-lg">
              <div className="flex items-center w-full">
                <input
                  type="text"
                  placeholder="0.0000898"
                  className="w-full text-lg font-semibold text-gray-700 focus:outline-none border-0 border-gray-200 p-2" />
                <div className="text-gray-500 ml-2 xxs:flex items-center space-x-1 p-3 grid-cols-1 grid ">
                  <span className="text-xs font-medium text-blue-600 px-2 py-1 rounded-md"><button onClick=''>Max</button></span>
                  <select id="coin" className=" border bg-gray-300 rounded-md shadow-sm px-4 py-1 ">
                    <option>BTC</option>
                    <option>ETH</option>
                    <option>XRP</option>
                  </select>
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-1 ml-2">$1000</p>
            </div>
            {/* Swap Icon */}
            <div className="flex items-center justify-center mb-4">
              <div className="w-10 h-10  rounded-full flex items-center justify-center">
                <button>
                  <SwapVertIcon></SwapVertIcon>
                </button>
              </div>
            </div>
            {/* Output Section */}
            <div className="mb-4 border-2 border-gray-200 w-full rounded-lg">
              <div className="flex items-center ">
                <input
                  type="text"
                  placeholder="0.0000898"
                  className="w-full text-lg font-semibold text-gray-700 focus:outline-none border-0 border-gray-200 p-2" />
                <div className="text-gray-500 ml-2 flex items-center space-x-1 p-3">
                  <span className="text-xs font-medium text-blue-600 px-2 py-1 rounded-md">MAX</span>
                  <select id="coin" className=" border bg-gray-300 rounded-md shadow-sm px-4 py-1 appearance-auto  ">
                    <option>BTC</option>
                    <option>ETH</option>
                    <option>XRP</option>
                  </select>
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-1 ml-2">$1000</p>
            </div>
            {/* Details Section */}
            <div className=" p-4 rounded-lg border  w-full bg-gray-200">
              <select id='detail' className='w-full bg-gray-200'>
                <option className="flex justify-between text-sm text-gray-600 py-1">
                  <span>Expected Output</span>
                  <span className="text-gray-800">0.0000 BTC</span>
                </option>
                <option className="flex justify-between text-sm text-gray-600 py-1">
                  <span>Price Impact</span>
                  <span className="text-gray-800">0.00%</span>
                </option>
                <option className="flex justify-between text-sm text-gray-600 py-1">
                  <span>Minimum Received</span>
                  <span className="text-gray-800">0.0000 BTC</span>
                </option>
                <option className="flex justify-between text-sm text-gray-600 py-1">
                  <span>Network Fees</span>
                  <span className="text-gray-800">0.0000 BTC</span>
                </option>
                <option className="flex justify-between text-sm text-gray-600 py-1">
                  <span>Exchange Fees</span>
                  <span className="text-gray-800">0.0000 BTC</span>
                </option>
              </select>
            </div>
            {/* Swap Button */}
            <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-3xl text-lg font-medium hover:bg-blue-700 transition">
              Swap
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
