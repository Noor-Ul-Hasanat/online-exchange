import React from 'react'

export default function Uppernav() {
  return (
    <div>      
       <div className=' flex items-center justify-center '>
             <img src={logo} alt='logo' className='h-10 w-10'/>
             <h1 className='text-blue-700 font-bold text-lg'>Eternal</h1>
        </div>
<div>


<div className='min-h-screen bg-gray-300'>
          {/*  logo image name mail navbar*/}
     <div className='   w-48'>
          {/* logo */}
        <div className=' flex items-center justify-center '>
             <img src={logo} alt='logo' className='h-10 w-10'/>
             <h1 className='text-blue-700 font-bold text-lg'>Eternal</h1>
        </div>
        {/* Image */}     \
          <div className='bordered rounded-full shadow-lg border-black flex justify-center items-center'>
            <img src={image} alt='progile'  className='h-20 w-20'/>
          </div>
          <div className='flex justify-center items-center text-xl text-black '>
            <h1> hellow Hasnat</h1>
          </div>
          <div className='flex justify-center items-center p-3 text-black '>
            <p> something@gmial.com</p>
          </div>
        
          
              {/* NAvbar  */}
              <div>
                  <ul>
                    <NavLink to={'/'}><li className='"flex items-center px-4 py-2 text-gray-700 rounded-lg font-medium hover:bg-gray-100"'>Dashboard</li></NavLink>
                    <NavLink to={'wallet'}><li className='"flex items-center px-4 py-2 text-gray-700 rounded-lg font-medium hover:bg-gray-100"'>My Wallet</li></NavLink>
                    <NavLink to={'transictions'}><li className='"flex items-center px-4 py-2 text-gray-700 rounded-lg font-medium hover:bg-gray-100"'>Ttransaction</li></NavLink>
                    <NavLink to={'verifications'}><li className='"flex items-center px-4 py-2 text-gray-700 rounded-lg font-medium hover:bg-gray-100"'>Identity Verification</li></NavLink>
                    <NavLink to={'exchange'}><li className='"flex items-center px-4 py-2 text-gray-700 rounded-lg font-medium hover:bg-gray-100"'>Exchange</li></NavLink>
                    <NavLink to={'settings'}><li className='"flex items-center px-4 py-2 text-gray-700 rounded-lg font-medium hover:bg-gray-100"'>Setting</li></NavLink>
                </ul>
              </div>           
            </div> 
            {/* upper side navlike  */}
          
           
            </div>



</div>




    </div>








  )
}
