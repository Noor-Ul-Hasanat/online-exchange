import React, { useEffect } from 'react'
 import { useDispatch,useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { fetchBalance,fetchCardsData,fetchTableData,fetchAnnouncements,fetchlatestNews } from '../Redux/Store'



 export  const  DashBoard=()=> { 






 const dispatch = useDispatch();  
useEffect(() => {
  dispatch(fetchBalance());
  dispatch(fetchCardsData());
  dispatch(fetchAnnouncements());
  dispatch(fetchlatestNews());
  dispatch(fetchTableData());
}, [dispatch]);

const balance = useSelector((state) => state.dashboard.balance);
const prices = useSelector((state) => state.dashboard.cards);
//const announcements = useSelector((state) => state.dashboard.announcements);
const latestNews = useSelector((state) => state.dashboard.latestNews || []);
const topCryptos = useSelector((state) => state.dashboard.tableData || []);


  return (
    <> 
   <div className=''>
      {/* Show Loading State */}
     
      {/* Header */}
      <div className="flex justify-between items-center mb-6 pb-6 pt-1 w-full ">
        <h1 className="text-xl md:text-3xl  text-gray-700 font-semibold">Dashboard</h1>
        <div >
        <h1 className="">Identitty verification</h1>
        <button>Unverified</button>
        </div>

      </div>
       {/* Balance Section */}
                   <div className="bg-white p-6 rounded-lg shadow-md mb-6 flex flex-col xs:flex-row ">
                     <div className='flex-1 w-full xs:w-1/3 justify-center '>
                     <h2 className="text-gray-500 text-lg font-semibold">Estimated Balance</h2>
                     <h1 className="text-lg  text-gray-800 mb-2">{balance}</h1>
                     <p className="text-gray-500 text-sm">= 0.00$</p>
                     <p className="text-gray-500 text-sm">Today's PnL    +$0.00(0.00%)</p>
                     </div> 
       {/* Buttons  */}
                     <div className="flex mt-4 w-full xs:w-2/3 gap-1 xxs:gap-3 flex-1  justify-center items-center flex-col xxxs:flex-row ">
                     <NavLink to='deposit'>  <button className="px-4 py-2 bg-blue-600 text-white rounded-3xl hover:bg-blue-800">
                         Deposit
                       </button></NavLink>
                       <NavLink to='withdraw'><button className="px-4 py-2 bg-blue-600 text-white rounded-3xl hover:bg-blue-800 ">
                         Withdraw
                       </button></NavLink>
                       <NavLink to='transfer' >
                       <button className="px-4 py-2 bg-blue-600 text-white rounded-3xl hover:bg-blue-800">
                         Transfer
                       </button>
                       </NavLink>
                     </div>
                   </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 w-full">
  {["Bitcoin", "Ethereum", "BNB", "Solana"].map((coin, index) => (
    <div
      key={coin}
      className={`p-4 rounded-lg shadow-md ${
        index % 4 === 0
          ? "bg-green-500"
          : index % 4 === 1
          ? "bg-blue-500"
          : index % 4 === 2
          ? "bg-purple-500"
          : "bg-orange-500"
      }`}
    >
      <div className="flex items-center gap-x-2 pb-6">
        <span>
          <p className="text-red-600">-18%</p>
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M1.70711 18.7071C1.31658 19.0976 0.683417 19.0976 0.292893 18.7071C-0.0976311 18.3166 -0.0976311 17.6834 0.292893 17.2929L7.79289 9.79289C8.18342 9.40237 8.81658 9.40237 9.20711 9.79289L13.5 14.0858L20.5858 7H17C16.4477 7 16 6.55228 16 6C16 5.44772 16.4477 5 17 5H22.9993C23.0003 5 23.002 5 23.003 5C23.1375 5.0004 23.2657 5.02735 23.3828 5.07588C23.5007 5.12468 23.6112 5.19702 23.7071 5.29289C23.8902 5.47595 23.9874 5.71232 23.9989 5.95203C23.9996 5.96801 24 5.984 24 6C24 6.00033 24 5.99967 24 6V12C24 12.5523 23.5523 13 23 13C22.4477 13 22 12.5523 22 12V8.41421L14.2071 16.2071C13.8166 16.5976 13.1834 16.5976 12.7929 16.2071L8.5 11.9142L1.70711 18.7071Z"
            fill="#24e916"
          />
        </svg>
      </div>

      <p className="text-white text-base">{coin}</p>

      <p className="text-xl text-white">
        $
        {prices
          ? coin === "Bitcoin"
            ? prices.bitcoin.usd.toLocaleString()
            : coin === "Ethereum"
            ? prices.ethereum.usd.toLocaleString()
            : coin === "BNB"
            ? prices.binancecoin.usd.toLocaleString()
            : coin === "Solana"
            ? prices.solana.usd.toLocaleString()
            : "N/A"
          : "Loading..."}{" "}
        USD
      </p>
    </div>
  ))}
</div>


      {/* Trading Coins */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Trading Coins</h2>

      
        <div className="grid grid-cols-1 -cols-5 gap-4 w-full overflow-auto">
          <table className="table-auto w-full text-left px-10 py-2">
            <thead>
              <tr>
                <th className="px-4 py-2 pt-4">Name</th>
                <th className="px-4 py-2 pt-4">Latest Price</th>
                <th className="px-4 py-2 pt-4">Previous Price (24h ago)</th>
                <th className="px-4 py-2 pt-4">Action</th>
              </tr>
            </thead>
            <tbody>
            {Array.isArray(topCryptos) ? (
    topCryptos.map((coin) => (
        <tr key={coin.id}>
            <td className="px-4 py-2">{coin.name}</td>
            <td className="px-4 py-2">${coin.current_price}</td>
            <td className="px-4 py-2">{coin.price_change_percentage_24h}%</td>
            <td className="px-4 py-2 w-2/5">
                <div className="gap-x-2 flex">
                    <NavLink to="deposit">
                        <button className="border-2 border-orange-500 text-orange-500 rounded-full px-4 py-2">
                            Deposit
                        </button>
                    </NavLink>
                    <NavLink to="withdraw">
                        <button className="border-2 border-blue-500 text-blue-500 rounded-full px-4 py-2">
                            Withdraw
                        </button>
                    </NavLink>
                    <NavLink to="trade">
                        <button className="border-2 border-green-500 text-green-500 rounded-full px-4 py-2">
                            Trade
                        </button>
                    </NavLink>
                </div>
            </td>
        </tr>
    ))
) : (
    <tr><td colSpan="4">No data available</td></tr>
)}

            </tbody>
          </table>
        </div>
      
    </div>
      {/* Latest News and Announcements */}                  
      <div className=" gap-6 w-full  grid md:flex">
        {/* Latest News */}
        <div className="bg-white p-6 rounded-lg shadow-md  w-full md:w-3/4">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Latest News</h2>
          <ul className="space-y-4">
          
          {Array.isArray(latestNews) && latestNews.length > 0 ? (
    latestNews.map((news, index) => (
        <li key={index} className='text-sm text-gray-600'>{news.title}</li>
    ))
) : (
    <p>No latest news available.</p>
)}
          </ul>
        </div>

        {/* Announcements */}
        <div className="bg-white p-6 rounded-lg shadow-md full md:w-1/3 ">
          <h2 className="text-lg font-bold text-gray-800 mb-4 ">Announcement</h2>
          <div className="text-center">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.0FM4NKBa0cJuRauAPTvtZgHaFc&pid=Api&P=0&h=220"
              alt="Chart"
              className=" mb-4 justify-self-center w-fit h-fit"
            />
            <p className="text-sm text-gray-600">
              Upcoming maintenance scheduled on 25th Jan. Expect downtime for
              2hrs.
            </p>
          </div>
        </div>
      </div>
    </div>
  
    
    </>
  )
}
