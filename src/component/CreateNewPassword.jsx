import React from 'react'
import logo from '../assets/eternal-logo.png'
 export const  CreateNewPassword=()=> {
  return (
    
       <div className='flex items-center justify-center min-h-screen bg-gray-100'>
    <div className='w-full max-w-sm p-6 bg-white rounded-lg shadow-lg'>
        {/**----logo---- */}
        <div className="flex  mb-3">
        <div className="text-blue-500 font-bold text-xl flex  w-2/3">
         <img src={logo} alt='logo' className="w-full h-full mr-1"/>      
        </div>
      </div>
         {/*     <!-- Create account text --> */}
        <div className='text-left'>
            <h1 className='font-bold text-2xl'>Create Your Account</h1>
        </div>
        <div>
            
            <input type='dropdown' className='w-full  text-gray-700 bg-gray-100 borde border rounded-lg border-gray-300 px-4 py-2 mt-4' required placeholder='Enter Password' ></input>
            <input type='password' className='w-full  text-gray-700 bg-gray-100 borde border rounded-lg border-gray-300 px-4 py-2 mt-4' required placeholder='Enter New Password' ></input>
        </div>
        <div className='text-left list-disc'>
            <ol className='text-left pt-6'>
                <li className='pt-4'>At least oneupper case, lower case and number</li>
                <li className='pt-4'>10-32 latters</li>
                <li className='pt-4'>Does,t contain any space</li>               
            </ol>
        </div>
        
        <button
        type="submit"
        className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Confirm
      </button>
    </div>
  </div>
    
  )
}
