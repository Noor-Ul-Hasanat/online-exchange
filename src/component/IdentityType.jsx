import React from 'react'
import logo from '../assets/eternal-logo.png'
import { useDispatch } from 'react-redux'
import { authActions } from '../Redux/Store';
export const IdentityType =()=> {
  const dispatch =useDispatch();
  const handelsubmit =()=>{
    dispatch(authActions.loginSuccess());
  }
  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
        {/* Logo */}
        <div className="flex  mb-3">
        <div className="text-blue-500 font-bold text-xl flex  w-2/3">
         <img src={logo} alt='logo' className="w-full h-full mr-1"/>      
        </div>
      </div>    
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-700 text-center mb-4">
          Identity Verification
        </h2>       
        {/* Form */}
        <form>
          {/* First Name */}
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Attique"
              className="w-full mt-1 px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Last Name */}
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Baig"
              className="w-full mt-1 px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Document Upload */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Capture Your Document Clearly
            </label>
            {/* Front Side */}
            <div className="flex items-center justify-between mb-3 px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg">
              <span>Front side of your ID Card</span>
              <button className="text-blue-500 hover:underline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16.992V8a2 2 0 012-2h4l2-2h6a2 2 0 012 2v8.992M16 12v8m-4-4v4m-4-8v8"
                  />
                </svg>
              </button>
            </div>
            {/* Back Side */}
            <div className="flex items-center justify-between mb-3 px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg">
              <span>Back side of your ID Card</span>
              <button className="text-blue-500 hover:underline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16.992V8a2 2 0 012-2h4l2-2h6a2 2 0 012 2v8.992M16 12v8m-4-4v4m-4-8v8"
                  />
                </svg>
              </button>
            </div>
            {/* Take a Selfie */}
            <div className="flex items-center justify-between px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg">
              <span>Take a Selfie</span>
              <button className="text-blue-500 hover:underline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16.992V8a2 2 0 012-2h4l2-2h6a2 2 0 012 2v8.992M16 12v8m-4-4v4m-4-8v8"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          
          onClick={handelsubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
    </>  
  )
}
