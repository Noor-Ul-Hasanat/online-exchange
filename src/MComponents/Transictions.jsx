import React from 'react'
import { NavLink } from 'react-router-dom';

export const Transictions = () => {
  return (
    <>
      <div>
        <div className="flex justify-between items-center mb-6 pb-6 pt-1 ">
          <h1 className="text-xl md:text-3xl  text-gray-700 font-semibold">Transaction History</h1>
          {/* <button className="text-blue-500 font-medium">Profile</button> */}
        </div>
        <div className='pl-5 bg-white rounded-xl pt-5  grid grid-cols-1 -cols-5 gap-4 w-full overflow-auto'>

          {/* Filter Section */}
          
          <div className="grid grid-cols-2 items-center  gap-4 bg-white p-6 rounded-lg pt-8 pb-8 w-full overflow-x-auto">
            {/* <!-- Type Filter --> */}
            <div className='bg-white pl-4 flex-1'>
              <label className="block text-sm text-gray-500 mb-1 flex-1">Type</label>
              <select className="w-full border border-gray-300 rounded-lg p-1 px-3 text-sm">
                <option>Deposit</option>
                <option>Withdraw</option>
              </select>
            </div>
            <div className='bg-white pl-4 flex-1'>
              <label className="block text-sm text-gray-500 mb-1">Time</label>
              <select className="w-full border border-gray-300 rounded-lg p-1 px-3 text-sm">
                <option>1 Week</option>
                <option>1 Month</option>
                <option>1 Year</option>
              </select>
            </div>
            <div className='pl-4 flex-1'>
              <label className="block text-sm text-gray-500 mb-1">Coin</label>
              <select className="w-full border border-gray-300 rounded-lg p-1 px-3 text-sm">
                <option>All</option>
                <option>Bitcoin</option>
                <option>Litecoin</option>
                <option>Monero</option>
                <option>Ethereum</option>
              </select>
            </div>
            <div className='pl-4 flex-1'>
              <label className="block text-sm text-gray-500 mb-1">Status</label>
              <select className="w-full border border-gray-300 rounded-lg p-1 px-3 text-sm">
                <option>Pending</option>
                <option>Completed</option>
                <option>Canceled</option>
              </select>
            </div>
            <div className="flex items-center bg-white pl-4 flex-1">
              <label className="sr-only">Transaction ID</label>
              <div className="relative  mt-5 pl-6  border border-gray-300 rounded-lg bg-gray-100">
                <span className="absolute inset-y-0 left-0 flex items-center pl-1 px-3 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none">
                    <g id="SVGRepo_bgCarrier" />
                    <g id="SVGRepo_tracerCarrier"  />
                    <g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#908989"    /> </g>
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Enter TxID"
                  className="w-full  forced-color-adjust-none p-1  text-sm  bg-gray-100"/>
              </div>
            </div>
          </div>


          {/* Transaction Table */}
          <div className='overflow-x-auto'>
        <table className="w-full text-left "> 
    <thead>
              <tr>
                <td className="p-4  flex items-center gap-2">
                  <span className="text-yellow-500"><input type='checkbox' /></span> Transiction id
                </td>
                <td className="p-4  border-gray-200">Date</td>
                <td className="p-4  border-gray-200">From</td>
                <td className="p-4  border-gray-200">To</td>
                <td className="p-4  border-gray-200">Coin</td>
                <td className="p-4  border-gray-200">Amount</td>
                <td className="p-4  border-gray-200">Status</td>
              </tr>
            </thead>
            <tbody>
              {/* Sample Rows */}
              <tr>
                <td className="p-4 "> <div className="flex items-center gap-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="-3.68 -3.68 23.36 23.36" fill="none" transform="rotate(0)matrix(-1, 0, 0, -1, 0, 0)" stroke="#00e02d" >
                    <g id="SVGRepo_bgCarrier" >
                      <rect x="-3.68" y="-3.68" width="23.36" height="23.36" rx="11.68" fill="#05d660"  /></g>
                    <g id="SVGRepo_tracerCarrier"  />
                    <g id="SVGRepo_iconCarrier"> <path d="M2 2V10.5L3.5 12L6.33579 9.16421L12.5858 15.4142L15.4142 12.5858L9.16421 6.33579L12 3.5L10.5 2H2Z" fill="#ffffff" /> </g>
                  </svg>
                  <span className="">12345</span>
                </div>
                </td>
                <td className="p-4 ">2/5/2020 06:24 AM</td>
                <td className="p-4 ">William</td>
                <td> <div className="flex items-center"> <img src={'https://i.pinimg.com/originals/28/3a/b1/283ab1108ef8e379a2e555de019e1aee.jpg'} alt="profile" className="w-8 h-8 mr-3 rounded-full object-cover bg-gray-600" />  <span className="">Harry</span> </div></td>
                <td> <div className='flex items-center '>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 -0.5 34 34" fill="none">
                    <g id="SVGRepo_bgCarrier"  />
                    <g id="SVGRepo_tracerCarrier" />
                    <g id="SVGRepo_iconCarrier"> <path d="M33.2538 16.1292C33.2538 25.0371 26.0329 32.2584 17.1255 32.2584C8.21799 32.2584 0.99707 25.0371 0.99707 16.1292C0.99707 7.22128 8.21799 0 17.1255 0C26.0329 0 33.2538 7.22128 33.2538 16.1292ZM21.0002 10.1366C23.2438 10.9071 24.8849 12.0607 24.5629 14.2077C24.3291 15.7799 23.4543 16.5403 22.2921 16.8065C23.8866 17.6335 24.4301 19.2029 23.9251 21.1005C22.9664 23.8314 20.6874 24.0613 17.6562 23.4905L16.9202 26.4261L15.1434 25.9844L15.8693 23.0882C15.4087 22.9742 14.9379 22.8522 14.4529 22.7221L13.724 25.6325L11.9492 25.1908L12.6842 22.2491L9.10534 21.3496L9.98817 19.3226C9.98817 19.3226 11.2982 19.6685 11.28 19.6433C11.7832 19.7673 12.0069 19.4406 12.095 19.2238L14.0895 11.256C14.1117 10.8798 13.9811 10.4059 13.2613 10.2264C13.2886 10.2072 11.9705 9.90669 11.9705 9.90669L12.4433 8.01585L16.0272 8.90026L16.7562 5.99188L18.532 6.43358L17.8182 9.28448C18.2961 9.39238 18.776 9.5023 19.2427 9.61828L19.9514 6.78553L21.7282 7.22724L21.0002 10.1366ZM16.7488 14.9882C17.9591 15.3091 20.5928 16.0074 21.0519 14.1765C21.5202 12.3033 18.9615 11.7376 17.7087 11.4606L17.7086 11.4606L17.7085 11.4606C17.5666 11.4292 17.4414 11.4015 17.3393 11.3761L16.4545 14.9117C16.5388 14.9325 16.6378 14.9588 16.7488 14.9882ZM15.3775 20.6807C16.8271 21.0626 19.9976 21.8977 20.5021 19.8803C21.0185 17.8175 17.9445 17.1305 16.4446 16.7952L16.4441 16.7951C16.2767 16.7577 16.129 16.7247 16.008 16.6946L15.032 20.5913C15.1311 20.6158 15.2472 20.6464 15.3771 20.6806L15.3775 20.6807Z" fill="#f7931a" /> </g>
                  </svg>
                  <span className='ml-2'></span> Bitcoin
                </div>
                </td>
                <td className="p-4  text-green-500">
                  +$5,553
                </td>
                <td className="p-4  text-green-600">
                  COMPLETED
                </td>
              </tr>
              <tr>

                <td className="p-4 "> <div className="flex items-center gap-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="-3.68 -3.68 23.36 23.36" fill="none" transform="rotate(0)matrix(-1, 0, 0, -1, 0, 0)"  >
                    <g id="SVGRepo_bgCarrier" >
                      <rect x="-3.68" y="-3.68" width="23.36" height="23.36" rx="11.68" fill="#05d660"  />
                    </g>
                    <g id="SVGRepo_tracerCarrier" />
                    <g id="SVGRepo_iconCarrier"> <path d="M2 2V10.5L3.5 12L6.33579 9.16421L12.5858 15.4142L15.4142 12.5858L9.16421 6.33579L12 3.5L10.5 2H2Z" fill="#ffffff" /> </g>
                  </svg>
                  <span className="mr-4">12345</span>
                </div>
                </td>
                <td className="p-4 ">2/5/2020 06:24 AM</td>
                <td className="p-4 ">William</td>
                <td><div className="flex items-center"> <img src={'https://i.pinimg.com/originals/28/3a/b1/283ab1108ef8e379a2e555de019e1aee.jpg'} alt="profile" className="w-8 h-8 mr-3 rounded-full object-cover bg-gray-600" />  <span className="">Louis</span> </div></td>
                <td> <div className='flex items-center '>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 -0.5 34 34" fill="none">
                    <g id="SVGRepo_bgCarrier"  />
                    <g id="SVGRepo_tracerCarrier"  />
                    <g id="SVGRepo_iconCarrier"> <path  d="M33.2538 16.1292C33.2538 25.0371 26.0329 32.2584 17.1255 32.2584C8.21799 32.2584 0.99707 25.0371 0.99707 16.1292C0.99707 7.22128 8.21799 0 17.1255 0C26.0329 0 33.2538 7.22128 33.2538 16.1292ZM21.0002 10.1366C23.2438 10.9071 24.8849 12.0607 24.5629 14.2077C24.3291 15.7799 23.4543 16.5403 22.2921 16.8065C23.8866 17.6335 24.4301 19.2029 23.9251 21.1005C22.9664 23.8314 20.6874 24.0613 17.6562 23.4905L16.9202 26.4261L15.1434 25.9844L15.8693 23.0882C15.4087 22.9742 14.9379 22.8522 14.4529 22.7221L13.724 25.6325L11.9492 25.1908L12.6842 22.2491L9.10534 21.3496L9.98817 19.3226C9.98817 19.3226 11.2982 19.6685 11.28 19.6433C11.7832 19.7673 12.0069 19.4406 12.095 19.2238L14.0895 11.256C14.1117 10.8798 13.9811 10.4059 13.2613 10.2264C13.2886 10.2072 11.9705 9.90669 11.9705 9.90669L12.4433 8.01585L16.0272 8.90026L16.7562 5.99188L18.532 6.43358L17.8182 9.28448C18.2961 9.39238 18.776 9.5023 19.2427 9.61828L19.9514 6.78553L21.7282 7.22724L21.0002 10.1366ZM16.7488 14.9882C17.9591 15.3091 20.5928 16.0074 21.0519 14.1765C21.5202 12.3033 18.9615 11.7376 17.7087 11.4606L17.7086 11.4606L17.7085 11.4606C17.5666 11.4292 17.4414 11.4015 17.3393 11.3761L16.4545 14.9117C16.5388 14.9325 16.6378 14.9588 16.7488 14.9882ZM15.3775 20.6807C16.8271 21.0626 19.9976 21.8977 20.5021 19.8803C21.0185 17.8175 17.9445 17.1305 16.4446 16.7952L16.4441 16.7951C16.2767 16.7577 16.129 16.7247 16.008 16.6946L15.032 20.5913C15.1311 20.6158 15.2472 20.6464 15.3771 20.6806L15.3775 20.6807Z" fill="#f7931a" /> </g>
                  </svg>
                  <span className='ml-2'></span> Litecoin
                </div>
                </td>
                <td className="p-4  text-green-500">+$987</td>
                <td className="p-4  text-green-600">
                  COMPLETED
                </td>
              </tr>
              <tr>
                <td className="p-4 "> <div className="flex items-center gap-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="-3.68 -3.68 23.36 23.36" fill="none" transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)" stroke="#e4391b" >
                    <g id="SVGRepo_bgCarrier" >
                      <rect x="-3.68" y="-3.68" width="23.36" height="23.36" rx="11.68" fill="#e4391b"  />
                    </g>
                    <g id="SVGRepo_tracerCarrier"  />
                    <g id="SVGRepo_iconCarrier"> <path d="M2 2V10.5L3.5 12L6.33579 9.16421L12.5858 15.4142L15.4142 12.5858L9.16421 6.33579L12 3.5L10.5 2H2Z" fill="#ffffff" /> </g>
                  </svg>
                  <span className="mr-4">12345</span>
                </div>
                </td>
                <td className="p-4 ">2/5/2020 06:24 AM</td>
                <td className="p-4 ">William</td>
                <td><div className="flex items-center"> <img src={'https://i.pinimg.com/originals/28/3a/b1/283ab1108ef8e379a2e555de019e1aee.jpg'} alt="profile" className="w-8 h-8 mr-3 rounded-full object-cover bg-gray-600" />  <span className="">Cindy</span> </div></td>
                <td> <div className='flex items-center '>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 -0.5 34 34" fill="none">
                    <g id="SVGRepo_bgCarrier"  />
                    <g id="SVGRepo_tracerCarrier"  />
                    <g id="SVGRepo_iconCarrier"> <path  d="M33.2538 16.1292C33.2538 25.0371 26.0329 32.2584 17.1255 32.2584C8.21799 32.2584 0.99707 25.0371 0.99707 16.1292C0.99707 7.22128 8.21799 0 17.1255 0C26.0329 0 33.2538 7.22128 33.2538 16.1292ZM21.0002 10.1366C23.2438 10.9071 24.8849 12.0607 24.5629 14.2077C24.3291 15.7799 23.4543 16.5403 22.2921 16.8065C23.8866 17.6335 24.4301 19.2029 23.9251 21.1005C22.9664 23.8314 20.6874 24.0613 17.6562 23.4905L16.9202 26.4261L15.1434 25.9844L15.8693 23.0882C15.4087 22.9742 14.9379 22.8522 14.4529 22.7221L13.724 25.6325L11.9492 25.1908L12.6842 22.2491L9.10534 21.3496L9.98817 19.3226C9.98817 19.3226 11.2982 19.6685 11.28 19.6433C11.7832 19.7673 12.0069 19.4406 12.095 19.2238L14.0895 11.256C14.1117 10.8798 13.9811 10.4059 13.2613 10.2264C13.2886 10.2072 11.9705 9.90669 11.9705 9.90669L12.4433 8.01585L16.0272 8.90026L16.7562 5.99188L18.532 6.43358L17.8182 9.28448C18.2961 9.39238 18.776 9.5023 19.2427 9.61828L19.9514 6.78553L21.7282 7.22724L21.0002 10.1366ZM16.7488 14.9882C17.9591 15.3091 20.5928 16.0074 21.0519 14.1765C21.5202 12.3033 18.9615 11.7376 17.7087 11.4606L17.7086 11.4606L17.7085 11.4606C17.5666 11.4292 17.4414 11.4015 17.3393 11.3761L16.4545 14.9117C16.5388 14.9325 16.6378 14.9588 16.7488 14.9882ZM15.3775 20.6807C16.8271 21.0626 19.9976 21.8977 20.5021 19.8803C21.0185 17.8175 17.9445 17.1305 16.4446 16.7952L16.4441 16.7951C16.2767 16.7577 16.129 16.7247 16.008 16.6946L15.032 20.5913C15.1311 20.6158 15.2472 20.6464 15.3771 20.6806L15.3775 20.6807Z" fill="#f7931a" /> </g>
                  </svg>
                  <span className='ml-2'></span> Monero
                </div>
                </td>
                <td className="p-4  text-red-500">-$455</td>
                <td className="p-4  text-red-600">CANCELED</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
        {/* Pagination */}
        <div className="flex  items-center mt-6  gap-4 justify-end">
          <NavLink to='' >
            <button className="px-4 py-2 text-blue-600 rounded-3xl border-blue-600 border hover:bg-gray-400">
              Previous
            </button>
          </NavLink>
          <div className="flex gap-2">
            <NavLink to='' >
              <button className="px-3 py-1 text-blue-600 bg-blue-100 rounded-full">
                1
              </button>
            </NavLink>

            <NavLink to='' >
              <button className="px-3 py-1 text-blue-600 bg-blue-100 rounded-full hover:bg-gray-400">
                2
              </button>
            </NavLink>

            <NavLink to='' >
              <button className="px-3 py-1 text-blue-600 bg-blue-100 rounded-full hover:bg-gray-400">
                3
              </button>
            </NavLink>

          </div>
          <NavLink to='' >
            <button className="px-4 py-2 text-blue-600 rounded-3xl border-blue-600 border hover:bg-blue-500 ">
              Next
            </button>
          </NavLink>
        </div>
      </div>
    </>
  )
};
