import React from 'react'
import { NavLink } from 'react-router-dom'

export const  Mywallet=()=> {
  return (
    <div>
     <div className="flex justify-between items-center mb-6 pb-6 pt-1 ">
        <h1 className="text-3xl  text-gray-700 font-semibold">Main Wallet</h1>
        <div className=''>
        <h1 className="">Identitty verification</h1>
        <button>Unverified</button>
        </div>      
      </div>
       
              {/* Balance Section */}
                                <div className="bg-white p-6 rounded-lg shadow-md mb-6 flex flex-col xs:flex-row ">
                                  <div className='flex-1 w-full xs:w-1/3 justify-center'>
                                  <h2 className="text-gray-500 text-lg font-semibold">Estimated Balance</h2>
                                  <h1 className="text-lg  text-gray-800 mb-2">0.00 BTC</h1>
                                  <p className="text-gray-500 text-sm">= 0.00$</p>
                                  <p className="text-gray-500 text-sm">Today's PnL    +$0.00(0.00%)</p>
                                  </div> 
                    {/* Buttons  */}
                                  <div className="flex mt-4 w-full xs:w-2/3  gap-4 flex-1  justify-center ">
                                  <NavLink to='deposit'>  <button className="px-6 py-2 bg-blue-600 text-white rounded-3xl hover:bg-blue-800">
                                      Deposit
                                    </button></NavLink>
                                    <NavLink to='withdraw'><button className="px-6 py-2 bg-blue-600 text-white rounded-3xl hover:bg-blue-800">
                                      Withdraw
                                    </button></NavLink>
                                    <NavLink to='transfer' >
                                    <button className="px-6 py-2 bg-blue-600 text-white rounded-3xl hover:bg-blue-800">
                                      Transfer
                                    </button>
                                    </NavLink>
                                  </div>
                                </div>
               {/* My Assets Section  */}
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 ">    
     <h1 className="text-md font-normal  mb-6 " >My Assets</h1>     
      <div className='grid grid-cols-1 -cols-5 gap-4 w-full overflow-auto'>
      <table className="w-full">
        <thead>
          <tr className="">
            <th className="text-left pl-6 font-thin text-sm ">Name</th>
            <th className="text-left pl-6 font-thin text-sm ">Amount</th>
            <th className="text-left pl-6 font-thin text-sm ">Average Cost</th>
            <th className="text-left pl-6 font-thin text-sm  ">Today's P/L</th>
          </tr>
        </thead>
        <tbody className=''>
          <tr className="hover:bg-gray-50">
            <td className="p-6 text-sm font-medium ">Bitcoin</td>
            <td className="p-6 font-thin text-sm">$12,345.90</td>
            <td className="p-6 font-thin text-sm">$57,345.00</td>
            <td className="p-6  text-green-600 ">+11.05% / $578</td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="p-6 text-sm font-medium">Ethereum</td>
            <td className="p-6 font-thin text-sm">$12,345.90</td>
            <td className="p-6 font-thin text-sm">$57,345.00</td>
            <td className="p-6  text-green-600 ">+11.05% / $578</td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="p-6 text-sm font-medium">Monero</td>
            <td className="p-6 font-thin text-sm">$12,345.90</td>
            <td className="p-6 font-thin text-sm">$57,345.00</td>
            <td className="p-6  text-green-600 ">+11.05% / $578</td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="p-6 text-sm font-medium">Litecoin</td>
            <td className="p-6 font-thin text-sm">$12,345.90</td>
            <td className="p-6 font-thin text-sm">$57,345.00</td>
            <td className="p-6  text-green-600 ">+11.05% / $578</td>
          </tr>
          
        </tbody>
      </table>
      </div>
    </div>

         {/* Recent Transactions Section  */}
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 ">
      <h1 className="text-md font-normal  mb-6">Recent Transactions</h1>
      <div className='grid grid-cols-1 -cols-5 gap-4 w-full overflow-auto'>
      <table className="w-full">
        <thead>
          <tr className="">
            <th className="text-left pl-6 font-thin text-sm  ">Type</th>
            <th className="text-left pl-6 font-thin text-sm ">Asset</th>
            <th className="text-left pl-6 font-thin text-sm ">Date</th>
            <th className="text-left pl-6 font-thin text-sm  ">Time</th>
            <th className="text-left pl-6 font-thin text-sm  ">Amount</th>
         
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-50">
            <td className=" p-6 text-sm font-medium">Transfer</td>
            <td className=" p-6 font-thin text-sm">BTC</td>
            <td className=" p-6 font-thin text-sm">2024-09-01</td>
            <td className=" p-6 font-thin text-sm">22:32</td>
            <td className="p-6  text-red-600 ">-900</td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className=" p-6 text-sm font-medium">Deposit</td>
            <td className=" p-6 font-thin text-sm">ETH</td>
            <td className=" p-6 font-thin text-sm">2024-09-01</td>
            <td className=" p-6 font-thin text-sm">22:32</td>
            <td className="p-6  text-green-600 ">+5792.9230</td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className=" p-6 text-sm font-medium ">Buy</td>
            <td className=" p-6 font-thin text-sm">XMR</td>
            <td className=" p-6 font-thin text-sm">2024-09-01</td>
            <td className=" p-6 font-thin text-sm">22:32</td>
            <td className="p-6  text-red-600 ">-900</td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className=" p-6 text-sm font-medium">Sell</td>
            <td className=" p-6 font-thin text-sm">LTC</td>
            <td className=" p-6 font-thin text-sm">2024-09-01</td>
            <td className=" p-6 font-thin text-sm">22:32</td>
            <td className="p-6  text-green-600 ">+5792.9230</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>

    </div>
  )
}
