import React from 'react'
import image from '../assets/WhatsApp Image 2024-02-28 at 23.32.02_8a2cc56f.jpg'
export const  Settings=()=> {
  return (
    <>

    <div>
  {/* Header */}
  <div className="flex justify-between items-center mb-6 pb-6 pt-1 ">
  <h1 className="text-xl md:text-3xl  text-gray-700 font-semibold w-full">Profile Settings</h1>
        {/* <button className="text-blue-500 font-medium">Profile</button> */}
      </div>
     {/* Main Section */}
     
      {/* personal info  */}
      <div className=' bg-white rounded-sm shadow-sm p-6 w-full '>
                 {/* profile-text*/}


     <div className='mt-4 md:mt-6 bg-white rounded-sm p-4 md:p-6 w-full'>
  <h1 className='font-bold text-lg md:text-2xl'>Profile</h1>

  {/*NAME AND AVATOR*/}
  <div className='w-full flex flex-col md:flex-row py-4 border-b'>
    <div className='md:w-[60%] w-full'>
      <h2 className='text-base md:text-lg font-medium'>Nickname & Avator</h2>
      <p className='text-xs md:text-sm pt-1 text-gray-600'>
      Set up an avatar and nickname. It is suggested not to use your real name or photo for privacy reasons.
      </p>
    </div>
    <div className='md:w-[40%] w-full flex flex-col md:flex-row gap-2 mt-2 md:mt-0'>
      <input type='text' placeholder='noouths@gmail.com' className='bg-gray-100 text-sm rounded-full p-2 w-full h-12'/>
      <button className='bg-gray-100 px-6 py-2 text-sm md:text-base rounded-full w-full md:w-auto h-12'>
        Edit
      </button>
    </div>
  </div>

  {/* EMAIL */}
  <div className='w-full flex flex-col md:flex-row py-4 border-b'>
    <div className='md:w-[60%] w-full'>
      <h2 className='text-base md:text-lg font-medium'>Email</h2>
      <p className='text-xs md:text-sm pt-1 text-gray-600'>
       Change your email Adress
      </p>
    </div>
    <div className='md:w-[40%] w-full flex flex-col md:flex-row gap-2 mt-2 md:mt-0'>
      <input
        type='text'
        placeholder='noouths@gmail.com'
        className='bg-gray-100 text-sm rounded-full p-2 w-full'
      />
      <button className='bg-gray-100 px-4 py-2 text-sm md:text-base rounded-full w-full md:w-auto'>
        Edit
      </button>
    </div>
  </div>

  {/* LOG IN PASS */}
  <div className='w-full flex flex-col md:flex-row py-4'>
    <div className='md:w-[60%] w-full'>
      <h2 className='text-base md:text-lg font-medium'>Login Password</h2>
      <p className='text-xs md:text-sm pt-1 text-gray-600'>
       Change your Login Password
      </p>
    </div>
    <div className='md:w-[40%] w-full flex flex-col md:flex-row gap-2 mt-2 md:mt-0'>
      <input
        type='text'
        placeholder='+1 234 567 890'
        className='bg-gray-100 text-sm rounded-full p-2 w-full'
      />
      <button className='bg-gray-100 px-4 py-2 text-sm md:text-base rounded-full w-full md:w-auto'>
        Edit
      </button>
    </div>
  </div>
</div>
        </div>


      {/* Two step verification */}      
      <div className='mt-4 md:mt-6 bg-white rounded-sm shadow-sm p-4 md:p-6 w-full'>
  <h1 className='font-bold text-lg md:text-2xl'>Two-Factor Authentication (2FA)</h1>
  {/* PassKeys Section */}
  <div className='w-full flex flex-col md:flex-row py-4 border-b'>
    <div className='md:w-[60%] w-full'>
      <h2 className='text-base md:text-lg font-medium'>PassKeys</h2>
      <p className='text-xs md:text-sm pt-1 text-gray-600'>
        Protect your account with security keys like YubiKey
      </p>
    </div>
    <div className='md:w-[40%] w-full flex items-end justify-start md:justify-end mt-2 md:mt-0'>
      <button className='bg-gray-100 px-4 py-2 text-sm md:text-base rounded-full w-full md:w-auto'>
        Enable
      </button>
    </div>
  </div>

  {/* Authenticator App Section */}
  <div className='w-full flex flex-col md:flex-row py-4 border-b'>
    <div className='md:w-[60%] w-full'>
      <h2 className='text-base md:text-lg font-medium'>Authenticator App</h2>
      <p className='text-xs md:text-sm pt-1 text-gray-600'>
        Use Google Authenticator to protect transactions
      </p>
    </div>
    <div className='md:w-[40%] w-full flex flex-col md:flex-row gap-2 mt-2 md:mt-0'>
      <input
        type='text'
        placeholder='noouths@gmail.com'
        className='bg-gray-100 text-sm rounded-full p-2 w-full'/>
      <button className='bg-gray-100 px-4 py-2 text-sm md:text-base rounded-full w-full md:w-auto'>
        Enable
      </button>
    </div>
  </div>

  {/* Phone Number Section */}
  <div className='w-full flex flex-col md:flex-row py-4'>
    <div className='md:w-[60%] w-full'>
      <h2 className='text-base md:text-lg font-medium'>Phone Number</h2>
      <p className='text-xs md:text-sm pt-1 text-gray-600'>
        Use your phone number to secure transactions
      </p>
    </div>
    <div className='md:w-[40%] w-full flex flex-col md:flex-row gap-2 mt-2 md:mt-0'>
      <input
        type='text'
        placeholder='+1 234 567 890'
        className='bg-gray-100 text-sm rounded-full p-2 w-full'/>
      <button className='bg-gray-100 px-4 py-2 text-sm md:text-base rounded-full w-full md:w-auto'>
        Manage
      </button>
    </div>
  </div>
</div>
     
      {/* Delete deisable Account */} 
      <div className=' mt-6 bg-white rounded-sm shadow-sm p-6'>
      <h1 className='font-bold mdtext-2xl text-xl'>Account Managment</h1>
      <div className='w-full grid md:flex'>
       <div className='md:w-[50%] w-full'>
        <h1 className='text-lg pt-5 font-normal'>Disable Account</h1>
        <p className='text-sm pt-1'> Once your account is disabled most of your actions like loging and trading will be restricted.
        You can choose to unblock the account at any time.This action wil not delete your account</p>
        </div>
        <div className='flex md:w-[50%] w-full md:items-end md:justify-end gap-x-2 pt-3'>    
        <button type='submit' onClick='focus' className='bg-gray-100 px-10 py-2 ml-2 rounded-3xl w-full md:w-auto ' >Disable</button>
        </div>
        </div>  
        <div className='w-full grid md:flex'>
       <div className='md:w-[50%] w-full'>
        <h1 className='text-lg pt-5 font-normal'>Delete Account</h1>
        <p className='text-sm pt-1'> Please note that account deletion is irrevisable.Once delete you will not be able to acess your account or view your transiction histry.</p>
        </div>
        <div className='flex md:w-[50%] w-full md:items-end md:justify-end gap-x-2 pt-3'>      
        <button type='submit' onClick='focus' className='bg-gray-100 px-10 py-2 ml-2 rounded-3xl w-full md:w-auto ' >Disable</button>
        </div>
        </div>     
        </div>
      </div>   
    </>
  )
}
