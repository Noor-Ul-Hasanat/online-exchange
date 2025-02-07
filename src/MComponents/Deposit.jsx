import React from 'react'
export const  Deposit=()=> {
  return (
    <div>
        <div>
         {/* Header */}
         <div className="flex justify-between items-center mb-6 pb-6 pt-1 ">
         <h1 className="text-3xl  text-gray-700 font-semibold">Deposit</h1>
        {/* <button className="text-blue-500 font-medium">Profile</button> */}
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mb-6 flex w-full justify-center">
  <div className="bg-white p-6 rounded-lg  max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
    {/* Left Section */}
    <div>
      {/* Select Coin */}
      <div className="mb-4">
        <label htmlFor="coin" className="block text-sm font-medium text-gray-700 mb-2">Select Coin</label>
        <div className="relative w-full">
          <select id="coin"
          className="w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 appearance-none focus:ring-blue-500 focus:border-blue-700">
            <option >Bitcoin #BTC</option>
            <option>Ethereum #ETH</option>
            <option>Tether #USDT</option>
          </select>
        </div>
      </div>

      {/* Available Balance */}
      <div className="text-sm text-gray-700 mb-4">
        <span>Available Balance: <strong>0.023467897 BTC</strong></span>
      </div>

      {/* BTC Address */}
      <div className="mb-4 w-full ">
        <label htmlFor="btcAddress" className="block text-sm font-medium text-gray-700 mb-2">BTC Address</label>
        <div className="xxs:flex  items-center border bg-gray-100 border-gray-300 rounded-md shadow-sm px-4 py-2">
          <input
            type="text"
            id="btcAddress"
            readOnly
            // make the placeholder = value then 
            placeholder="bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"          
            className="flex xxs:flex-grow border-none focus:ring-0 focus:outline-none text-sm text-black bg-gray-100"
          />
          <button
            type="button"
            className="text-white text-sm py-2 px-3  font-thin ml-4  flex items-center border rounded-3xl bg-blue-500">
            Copy
            <svg
              className="w-4 h-4 ml-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2M16 16h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2m-4 6V6"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Warning */}
      <div className="bg-gray-100 p-4 rounded-md text-sm text-gray-600">
        <strong>Send Only BTC to this Address!</strong>
        <p>Sending coins or tokens other than BTC to this address may result in the loss of deposit.</p>
      </div>
    </div>

    {/* Right Section */}
    <div className="flex flex-col items-center">
      {/* Deposit Network */}
      <div className="xxs:flex space-x-4 mb-4 grid grid-cols-2 ">
        {/* This is an example for react functionality when Added */}
        {/* <button onClick={''} className={({isActive})=>isActive?
        'px-4 py-2 text-sm font-thin bg-blue-500 text-white rounded-3xl':
        'px-4 py-2 text-sm font-thin text-gray-700 border border-blue-500 rounded-3xl'}
        >BTC</button> */}
         <button className="px-4 py-2 text-sm font-thin text-white border border-blue-500 rounded-3xl bg-blue-500">BTC</button>
        <button className="px-4 py-2 text-sm font-thin text-blue-500 border border-blue-500 rounded-3xl">TRC20</button>
        <button className="px-4 py-2 text-sm font-tjin text-blue-500 border border-blue-500  rounded-3xl">BEP20</button>
        <button className="px-4 py-2 text-sm font-tjin text-blue-500 border border-blue-500  rounded-3xl">ERC20</button>
      </div>

      {/* Average Arrival Time */}
      <div className="text-sm text-gray-700 mb-4">
        <span>Average Arrival Time: <strong>3 Minutes</strong></span>
      </div>

      {/* QR Code */}
      <div className="w-72 h-72 relative items-center justify-center">
     
        {/* Example QR Code (replace with a dynamic QR if needed) */}
        <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#000000"
    width="256px"
    height="256px"
    viewBox="-12.29 -12.29 147.46 147.46"
    version="1.1"
    id="Layer_1"
    style={{ enableBackground: 'new 0 0 122.88 122.7' }}
    xmlSpace="preserve">
    <g id="SVGRepo_bgCarrier" strokeWidth="0">
    <rect x="-12.29" y="-12.29" width="147.46" height="147.46" rx="0" fill="#ffffff" />
    </g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
    <g id="SVGRepo_iconCarrier">
      <style type="text/css">
        {`.st0{fill-rule:evenodd;clip-rule:evenodd;}`}
      </style>
      <g>
        <path className="st0" d="M0.18,0h44.63v44.45H0.18V0L0.18,0z M111.5,111.5h11.38v11.2H111.5V111.5L111.5,111.5z M89.63,111.48h11.38 v10.67H89.63h-0.01H78.25v-21.82h11.02V89.27h11.21V67.22h11.38v10.84h10.84v11.2h-10.84v11.2h-11.21h-0.17H89.63V111.48 L89.63,111.48z M55.84,89.09h11.02v-11.2H56.2v-11.2h10.66v-11.2H56.02v11.2H44.63v-11.2h11.2V22.23h11.38v33.25h11.02v11.2h10.84 v-11.2h11.38v11.2H89.63v11.2H78.25v22.05H67.22v22.23H55.84V89.09L55.84,89.09z M111.31,55.48h11.38v11.2h-11.38V55.48 L111.31,55.48z M22.41,55.48h11.38v11.2H22.41V55.48L22.41,55.48z M0.18,55.48h11.38v11.2H0.18V55.48L0.18,55.48z M55.84,0h11.38 v11.2H55.84V0L55.84,0z M0,78.06h44.63v44.45H0V78.06L0,78.06z M10.84,88.86h22.95v22.86H10.84V88.86L10.84,88.86z M78.06,0h44.63 v44.45H78.06V0L78.06,0z M88.91,10.8h22.95v22.86H88.91V10.8L88.91,10.8z M11.02,10.8h22.95v22.86H11.02V10.8L11.02,10.8z" />
      </g>
    </g>
  </svg>
      </div>

      {/* BTC Address Below QR Code */}
      
    </div>
  </div>
</div>
</div>
    </div>
  )
}
