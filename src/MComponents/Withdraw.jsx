import React from 'react'

export const  Withdraw=()=> {
  return (
    <div >
      {/* Header */} 
      <div className="flex justify-between items-center mb-6 pb-6 pt-1 ">
      <h1 className="text-3xl  text-gray-700 font-semibold">Withdraw</h1>
        {/* <button className="text-blue-500 font-medium">Profile</button> */}
      </div>

       <div className="  bg-white p-6 rounded-lg shadow-md mb-6 flex w-full justify-center">
<div className='flex-1 max-w-xl'>
<form className=''>
      {/* <!-- From --> */}
      <div className="mb-4">
        <label for="Select Coin" className="block text-sm font-medium text-gray-700 mb-2">Select Coin</label>
        <select id="Select Coin" className="w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500">
          <option>BTC Coin</option>
          <option>USDT</option>
          <option>ETH</option>
          <option>SOL</option>
        </select>
      </div>

      {/* <!-- To --> */}
      <div className="mb-4">
        <label for="Withdraw to" className="block text-sm font-medium text-gray-700 mb-2">Withdraw to</label>
        <select id="Withdraw to" className="w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-blue-500 focus:border-blue-500">
          <option>ON CHAIN WITHDRAW</option>
          <option>SPOT ADRESS</option>
        </select>
      </div>

      {/* <!-- Coin --> */}
      <div className="mb-4">
        <label for="Deposit with Crypto" className="block text-sm font-medium text-gray-700 mb-2">Deposit with Crypto</label>
        <div className="relative">
          <select id="coin" className="w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 appearance-none focus:ring-blue-500 focus:border-blue-500">
            <option>BTC</option>
            <option>ETH</option>
            <option>XRP</option>
          </select>
          <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
            <svg className="w-4 h-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 7.707a1 1 0 011.414 0L10 10.586l3.293-2.879a1 1 0 011.414 0 .5.5 0 000 .707l-4 4a1 1 0 01-1.414 0l-4-4a.5.5 0 010-.707z" clip-rule="evenodd" />
            </svg>
          </span>
        </div>
      </div>

      {/* <!-- Amount --> */}
      <div className="mb-4">
        <label for="amount" className="block text-sm font-medium text-gray-700 mb-2">Withdrawal Amount</label>
        <div className="flex items-center border border-gray-300 rounded-md shadow-sm px-4 py-2 focus-within:ring-blue-500 focus-within:border-blue-500">
          <input type="number" id="amount" placeholder="Enter amount" className="flex-grow border-none focus:ring-0 focus:outline-none"/>
          <span className="ml-2 text-sm font-medium text-gray-500">BTC</span>
          <button type="button" className="text-blue-500 text-sm font-medium ml-4">MAX</button>
        </div>
      </div>

      {/* <!-- Available and Network Fee --> */}
      <div className="text-sm text-gray-500 flex justify-between mb-6">
        <span>Available:</span>
        <span> 0.00000000008 Bitcoin</span>
      </div>
      <div className="text-sm text-gray-500  justify-between mb-6">
        <p>Recieve Amount</p>
        <h1 className='font-medium text-lg text-black'>0.0009 Bitcoin</h1>
        <p> Network fee: 0.0001234 </p>
      </div>

      {/* Submit Button  */}
      <button type="submit" className="w-full bg-blue-500 text-white py-4 rounded-3xl shadow-sm text-sm font-normal hover:bg-blue-600">
        Withdraw
      </button>
    </form>
</div>
  
  </div>
    </div>
  )
}
