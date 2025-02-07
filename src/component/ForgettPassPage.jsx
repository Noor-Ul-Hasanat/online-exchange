import React from 'react'
import logo from '../assets/eternal-logo.png'
import { NavLink } from 'react-router-dom'
export const ForgettPassPage=() =>{
  return (
       <div className='flex justify-center items-center bg-gray-100 min-h-screen'> 
    <div className='w-full max-w-sm p-6 bg-white rounded-lg shadow-lg'>
      <div>
        {/*     <!-- logo --> */}
        <div className="flex  mb-3">
        <div className="text-blue-500 font-bold text-xl flex  w-2/3">
         <img src={logo} alt='logo' className="w-full h-full mr-1"/>      
        </div>
      </div>
           {/*     <!-- Welcome text --> */}
           <div className='text-left'>
                  <h1 className='text-2xl font-bold text-gray-500'>Forgot Password</h1>
           </div>
           <div>
            <form>
            <div className="mb-4 text-left mt-8">
        <label >Email/Phone Number</label>
        <input
          type="text"
          placeholder="Email/Phone"
          className="w-full mt-1 px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>    
    <NavLink to='/verifynumber' >
    <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Login
      </button>
    </NavLink>
            </form>
           </div>
            {/*   <!-- OR Section --> */}
            </div> 
            <div>
              
            </div>      
    </div>
    </div>
    
   
  )
}
