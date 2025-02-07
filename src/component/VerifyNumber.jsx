import React from 'react'
import { NavLink } from 'react-router-dom'

export const VerifyNumber=()=>{
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
        {/* Header */}
        <h2 className="mt-10  text-2xl font-bold text-left text-gray-700">
          Verify your number
        </h2>
        <p className="mt-2 text-sm  text-gray-500 text-left">
          Please enter the 6-digit verification code sent to your phone number. The code is valid for 30 minutes.
        </p>
        {/* Verification Code Input */}
      <div className="text-left mt-6">  <label>Verification Number</label></div>
        <div className="flex justify-center mt-2 space-x-2">
           
          {[...Array(6)].map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              className="w-12 h-12 text-center text-lg text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ))}
        </div>
        {/* Send Code Link */}
        <div className="text-right mb-6">
          <button className="text-sm text-blue-500 hover:underline">Send Code</button>
        </div>
        {/* Next Button */}
       <NavLink to= '/createAccount' >
       <button
          type="button"
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Next
        </button>
       </NavLink>
        {/* Footer */}
        <p className="mt-6 text-sm text-center text-gray-500">
          Didn’t receive the verification code?{" "}
         
        </p>
        <button className="text-blue-500 hover:underline mt-10 mb-10">Re-send Code</button>
      </div>
    </div>
  )
}
