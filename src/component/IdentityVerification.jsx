import React, { useState } from "react";
import logo from '../assets/eternal-logo.png'
export const IdentityVerification=()=> {
    const [selectedIdType, setSelectedIdType] = useState("ID Card");
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
        <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">
          Identity Verification
        </h2>

        {/* Form */}
        <form>
          {/* Select Issuing Country */}
          <div className="mb-4">
            <label htmlFor="country" className="block text-sm font-medium text-gray-600">
              Select Issuing Country
            </label>
            <select
              id="country"
              name="country"
              className="w-full mt-1 px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Austria</option>
              <option>Pakistan</option>
              <option>India</option>
              <option>USA</option>
            </select>
          </div>

          {/* Select ID Type */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Select ID Type
            </label>

            {/* Passport Option */}
            <div
              className={`flex items-center justify-between px-4 py-3 mb-2 border rounded-lg cursor-pointer ${
                selectedIdType === "Passport"
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300 bg-gray-100"
              }`}
              onClick={() => setSelectedIdType("Passport")}
            >
              <div className="flex items-center space-x-3">
                <img
                  src="/path/to/passport-icon.png"
                  alt="Passport"
                  className="w-6 h-6"
                />
                <span className="text-gray-700">Passport</span>
              </div>
              <input
                type="radio"
                name="idType"
                checked={selectedIdType === "Passport"}
                readOnly
                className="w-5 h-5 text-blue-500"
              />
            </div>

            {/* ID Card Option */}
            <div
              className={`flex items-center justify-between px-4 py-3 mb-2 border rounded-lg cursor-pointer ${
                selectedIdType === "ID Card"
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300 bg-gray-100"
              }`}
              onClick={() => setSelectedIdType("ID Card")}
            >
              <div className="flex items-center space-x-3">
                <img
                  src="/path/to/idcard-icon.png"
                  alt="ID Card"
                  className="w-6 h-6"
                />
                <div>
                  <span className="text-gray-700">ID Card</span>
                  <span className="ml-2 text-xs text-blue-500 font-semibold">
                    Recommended
                  </span>
                </div>
              </div>
              <input
                type="radio"
                name="idType"
                checked={selectedIdType === "ID Card"}
                readOnly
                className="w-5 h-5 text-blue-500"
              />
            </div>

            {/* Driver License Option */}
            <div
              className={`flex items-center justify-between px-4 py-3 border rounded-lg cursor-pointer ${
                selectedIdType === "Driver License"
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300 bg-gray-100"
              }`}
              onClick={() => setSelectedIdType("Driver License")}
            >
              <div className="flex items-center space-x-3">
                <img
                  src="/path/to/driverlicense-icon.png"
                  alt="Driver License"
                  className="w-6 h-6"
                />
                <span className="text-gray-700">Driver License</span>
              </div>
              <input
                type="radio"
                name="idType"
                checked={selectedIdType === "Driver License"}
                readOnly
                className="w-5 h-5 text-blue-500"
              />
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-sm text-gray-500 mb-6">
            To understand how your personal information and biometric data are
            stored and used for verification, please read the User Identity
            Verification Statement and Privacy Policy.
          </p>

          {/* Continue Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Continue
          </button>
        </form>
      </div>
    </div>





    </>
  )
}
