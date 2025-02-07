import React from 'react'
import image from '../assets/WhatsApp Image 2024-02-28 at 23.32.02_8a2cc56f.jpg'
export const  Settings=()=> {
  return (
    <>

    <div>
  {/* Header */}
  <div className="flex justify-between items-center mb-6 pb-6 pt-1 ">
  <h1 className="text-3xl  text-gray-700 font-semibold w-full">Profile Settings</h1>
        {/* <button className="text-blue-500 font-medium">Profile</button> */}
      </div>
     {/* Main Section */}
     
      {/* personal info  */}
      <div className='inline-flex bg-white rounded-sm shadow-sm p-6 w-full '>
                 {/* profile-text*/}
      <div className='w-2/3'>
       <h1 className='font-bold text-2xl'>Profile</h1>
        <h1 className='text-lg pt-5 font-normal'>Nickname & Avator</h1>
        <p className='text-sm pt-1'>Set up an avator and nickname. it is suggested not to useyour real nmae or the name of your social account</p>
        <h1 className='text-lg pt-5 font-normal'>Email</h1>
        <p className='text-sm pt-1'>Change your Email Adress</p>
        <h1 className='text-lg pt-5 font-normal'>Login Password</h1>
        <p className='text-sm pt-1'>Change your login Password</p>
      </div>
             {/* profile-buttons */}
      <div className='pl-6 pt-16 items-center'> 
        <div className='pt-5  flex justify-between'>
          <img src={image} alt='tasveer' className='h-8 w-8 object-cover object-top mt-2 '/>
          <input type='text' placeholder='Adam noor' className='rounded-3xl p-2 w-1/3'/>
          <button type='submit' onClick='focus' className='bg-gray-100 px-10 py-2 ml-2 rounded-3xl'>Edit</button>
        </div>
        <div className='pt-5 flex justify-between'>
        <input type='text' placeholder='noouths@gmail.com' className='rounded-3xl p-2 items-stretch'/>
        <button type='submit' onClick='focus' className='bg-gray-100 px-10 py-2 ml-2 rounded-3xl ' >Edit</button>
        </div>
        <div className='pt-5 flex justify-between'>
        <input type='password' placeholder='*****' className='rounded-3xl p-2'/>
        <button type='submit' onClick='focus' className='bg-gray-100 px-10 py-2 ml-2 rounded-3xl '>Edit</button>
        </div>
        </div>
        </div>
       
      {/* Teo step verification */}      
      <div className='inline-flex mt-6 bg-white rounded-sm shadow-sm p-6 w-full'>
                {/* 2step-text */}
      <div className='w-2/3'>
       <h1 className='font-bold text-2xl'>Two-Factor Authenatication(2FA)</h1>
        <h1 className='text-lg pt-5 font-normal'>PassKeys</h1>
        <p className='text-sm pt-1'> Protect your Account and withdrawals with pass keys/and or security keys such as yubikey</p>
        <h1 className='text-lg pt-5 font-normal'>Authenticator App</h1>
        <p className='text-sm pt-1'>Use Binance/Google Authenticator to protect your account Transictions</p>
        <h1 className='text-lg pt-5 font-normal'> Phone Number</h1>
        <p className='text-sm pt-1'>Use Your Phone number to protect your account Transictions</p>
      </div>
                           {/* 2 Step Buttons */}
      <div className='  pt-24'> 
        <div className=' flex justify-end'>       
          <button type='submit' onClick='focus' className='bg-gray-100 px-10 py-2 ml-2 rounded-3xl '>Enable </button>
        </div>
        <div className='pt-5 flex justify-between'>
        <input type='text' placeholder='noouths@gmail.com' className='rounded-3xl p-2'/>
        <button type='submit' onClick='focus' className='bg-gray-100 px-10 py-2 ml-2 rounded-3xl ' >Enable</button>
        </div>
        <div className='pt-5 flex justify-between'>
        <input type='text' placeholder='noouths@gmail.com' className='rounded-3xl p-2'/>
        <button type='submit' onClick='focus' className='bg-gray-100 px-8 py-2 ml-2 rounded-3xl ' >Manage</button>
        </div>
        </div>
        </div>
     
      {/* Delete deisable Account */}
 
      <div className='inline-flex mt-6 bg-white rounded-sm shadow-sm p-6'>
      <div className=''>
       <h1 className='font-bold text-2xl'>Account Managment</h1>
        <h1 className='text-lg pt-5 font-normal'>Disable Account </h1>
        <p className='text-sm pt-1'> Once your account is disabled most of your actions like loging and trading will be restricted.
          You can choose to unblock the account at any time.This action wil not delete your account
        </p>
        <h1 className='text-lg pt-5 font-normal'>Delete Account</h1>
        <p className='text-sm pt-1'>Please note that account deletion is irrevisable.Once delete you will not be able to acess your account or view your transiction histry.</p>
      
      </div>
      <div className='pl-6 pt-12'> 
        <div className='pt-8 flex'>       
          <button type='submit' onClick='focus' className='bg-gray-100 px-10 py-1 ml-2 rounded-3xl '>disable </button>
        </div>
        <div className='pt-8'>      
        <button type='submit' onClick='focus' className='bg-gray-100 px-10 py-1 ml-2 rounded-3xl' >disable</button>
        </div>
        </div>
        </div>
     
      
      </div>
  
      
    </>
  )
}
