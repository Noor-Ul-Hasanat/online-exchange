import React from 'react'
import logo from '../assets/eternal-logo.png'
import { NavLink } from 'react-router-dom'
export const Welcome=()=> {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
   {/*     <!-- logo --> */}
      <div className="flex  mb-3">
        <div className="text-blue-500 font-bold text-xl flex  w-2/3">
         <img src={logo} alt='logo' className="w-full h-full mr-1"/>      
        </div>
      </div>
            {/*     <!-- Welcome text --> */}
     
      <h2 className="mb-4 text-2xl font-bold text-left text-gray-700">Welcome to Eternal</h2>
    
       {/*     <!-- Form --> */}
      <form>
        <div className="mb-4 text-left mt-8">
          <label >Email/Phone Number</label>
          <input
            type="text"
            placeholder="Email/Phone"
            className="w-full mt-1 px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="terms"
            className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
          />
          <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
            By creating an account, I agree to Eternal Terms
          </label>
        </div>
        <NavLink to= 'verifynumber'>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Next
        </button>
        </NavLink>

       
      </form>
   {/*   <!-- OR Section --> */}
      <div className="flex items-center my-6">
        <div className="flex-1 h-px bg-gray-300"></div>
        <span className="mx-4 text-sm text-gray-400">or</span>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>
     {/*  <!-- Social Login Buttons -->*/}
      <div className="flex flex-col space-y-3">
        <button className="flex items-center justify-center w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200">
          <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="w-5 h-5 mr-2" />
          Continue With Google
        </button>
        <button className="flex items-center justify-center w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200">
          <img src="https://www.svgrepo.com/show/157817/facebook.svg" alt="Facebook" className="w-5 h-5 mr-2" />
          Continue With Facebook
        </button>
      </div>
              {/*  <!-- Login Link --> */}
      <p className="mt-6 text-sm text-center text-gray-500">
        Already have an account? <NavLink to='/login'><span className="text-blue-500 hover:underline">Log in</span></NavLink> 
      </p>
    </div>
  </div>
  )
}
