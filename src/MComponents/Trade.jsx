import {React,useState} from 'react';
import ReactApexChart from 'react-apexcharts';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
export const  Trade=() =>{
const [state, setState] =useState({
  series: [
    {
      data: [
        { x: new Date(1538778600000), y: [6629.81, 6650.5, 6623.04, 6633.33] },
        { x: new Date(1538780400000), y: [6632.01, 6643.59, 6620, 6630.11] },
        { x: new Date(1538782200000), y: [6630.71, 6648.95, 6623.34, 6635.65] },
        { x: new Date(1538784000000), y: [6635.65, 6651, 6629.67, 6638.24] },
        { x: new Date(1538785800000), y: [6638.24, 6640, 6620, 6624.47] },
        { x: new Date(1538787600000), y: [6624.47, 6635, 6610, 6620.5] },
        { x: new Date(1538789400000), y: [6620.5, 6645, 6615, 6633.2] },
        { x: new Date(1538791200000), y: [6635.2, 6650.3, 6620.8, 6635.9] },
        { x: new Date(1538793000000), y: [6635.9, 6648.1, 6625.5, 6630.7] },
        { x: new Date(1538794800000), y: [6630.7, 6649.7, 6624.3, 6636.8] },
        { x: new Date(1538796600000), y: [6636.8, 6651.3, 6627.1, 6639.2] },
        { x: new Date(1538798400000), y: [6639.2, 6649.1, 6629.6, 6633.5] },
        { x: new Date(1538800200000), y: [6633.5, 6652.6, 6625.8, 6640.3] },
        { x: new Date(1538802000000), y: [6640.3, 6651.7, 6626.5, 6634.8] },
        { x: new Date(1538803800000), y: [6634.8, 6650.2, 6627.9, 6638.1] },
        { x: new Date(1538805600000), y: [6638.1, 6648.4, 6628.5, 6632.9] },
        { x: new Date(1538807400000), y: [6632.9, 6652.1, 6624.9, 6641.3] },
        { x: new Date(1538809200000), y: [6641.3, 6653.5, 6626.7, 6639.4] },
        { x: new Date(1538811000000), y: [6639.4, 6650.4, 6627.3, 6635.8] },
        { x: new Date(1538812800000), y: [6635.8, 6652.8, 6625.2, 6640.7] },
        { x: new Date(1538814600000), y: [6640.7, 6651.5, 6626.8, 6634.4] },
        { x: new Date(1538816400000), y: [6634.4, 6650.6, 6627.2, 6637.3] },
        { x: new Date(1538818200000), y: [6637.3, 6649.2, 6628.1, 6633.8] },
        { x: new Date(1538820000000), y: [6633.8, 6653.2, 6624.8, 6641.2] },
        { x: new Date(1538821800000), y: [6641.2, 6653.8, 6625.9, 6639.1] },
        { x: new Date(1538823600000), y: [6639.1, 6650.8, 6626.5, 6635.6] },
        { x: new Date(1538825400000), y: [6635.6, 6651.9, 6624.7, 6640.5] },
        { x: new Date(1538827200000), y: [6640.5, 6652.2, 6625.1, 6637.4] },
        { x: new Date(1538829000000), y: [6637.4, 6648.7, 6626.4, 6634.9] },
        { x: new Date(1538830800000), y: [6634.9, 6651.6, 6623.9, 6640.8] },
        { x: new Date(1538832600000), y: [6640.8, 6650.9, 6625.8, 6635.3] },
        { x: new Date(1538834400000), y: [6635.3, 6653.1, 6624.3, 6639.9] },
        { x: new Date(1538836200000), y: [6639.9, 6651.4, 6626.2, 6637.6] },
        { x: new Date(1538838000000), y: [6637.6, 6650.5, 6627.5, 6633.4] },
        { x: new Date(1538839800000), y: [6633.4, 6653.7, 6623.7, 6641.0] },
        { x: new Date(1538841600000), y: [6641.0, 6654.2, 6625.4, 6638.2] },
        { x: new Date(1538843400000), y: [6638.2, 6650.3, 6626.6, 6636.7] },
        { x: new Date(1538845200000), y: [6636.7, 6652.4, 6625.9, 6640.1] },
        { x: new Date(1538847000000), y: [6640.1, 6651.8, 6624.5, 6637.3] },
        { x: new Date(1538848800000), y: [6637.3, 6654.1, 6623.8, 6642.5] },
        { x: new Date(1538850600000), y: [6642.5, 6653.9, 6625.6, 6638.7] },
        { x: new Date(1538852400000), y: [6638.7, 6651.5, 6627.3, 6636.2] },
        { x: new Date(1538854200000), y: [6636.2, 6652.9, 6624.6, 6640.6] },
        { x: new Date(1538856000000), y: [6640.6, 6653.8, 6625.3, 6637.8] },
        { x: new Date(1538857800000), y: [6637.8, 6651.6, 6624.8, 6641.4] },
        { x: new Date(1538859600000), y: [6641.4, 6650.6, 6627.1, 6636.9] },
        { x: new Date(1538861400000), y: [6636.9, 6653.4, 6623.5, 6642.1] },
        { x: new Date(1538863200000), y: [6642.1, 6654.6, 6625.7, 6638.4] },
        { x: new Date(1538865000000), y: [6638.4, 6650.8, 6626.3, 6637.5] },
        { x: new Date(1538866800000), y: [6637.5, 6652.3, 6625.2, 6640.9] },
        { x: new Date(1538868600000), y: [6640.9, 6651.2, 6628.3, 6635.4] },
        { x: new Date(1538870400000), y: [6635.4, 6653.1, 6624.9, 6641.1] },
        { x: new Date(1538872200000), y: [6641.1, 6654.0, 6623.6, 6639.3] },
        { x: new Date(1538874000000), y: [6639.3, 6650.7, 6627.0, 6636.6] },
        { x: new Date(1538875800000), y: [6636.6, 6653.3, 6625.1, 6640.2] },
        { x: new Date(1538877600000), y: [6640.2, 6652.0, 6624.4, 6637.7] },
        { x: new Date(1538879400000), y: [6637.7, 6651.7, 6623.3, 6641.5] },
        { x: new Date(1538881200000), y: [6641.5, 6653.6, 6626.1, 6638.8] }
        // Add remaining data points as required
      ],
    },
  ],
  options: {
    chart: {
      type: 'candlestick',
      height: 350,
    },
    title: {
      text: 'CandleStick Chart',
      align: 'left',
    },
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  },
})  
  

  return (
    <>
      <div>


        {/* Header Section */}
        <div className="p-6 md:flex gap-4 w-full">
          <div>
            <h1 className="text-xl font-bold text-gray-800">BTC/USDT</h1>
            <a href="www.something.com" className="text-sm text-gray-600">
              Bitcoin price
            </a>
          </div>
          <div>
            <p className="text-3xl font-semibold text-green-500">57,971.01</p>
          </div>
          <div className="text-sm text-gray-600 md:flex gap-4 grid grid-cols-2">
            <div>
              <p>24h Change</p>
              <p className="text-black">+2.21%</p>
            </div>
            <div>
              <p>24h Low</p>
              <p className="text-black">53,197.19</p>
            </div>
            <div>
              <p>24h High</p>
              <p className="text-black">59,417.42</p>
            </div>
            <div>
              <p>24h Volume(btc)</p>
              <p className="text-black">59,417.42</p>
            </div>
          </div>
        </div>

        <div className="md:flex gap-5 w-full">
          {/* Graph Section */}
          <div className="bg-white mt-6 p-6 rounded-lg shadow-md  w-full md:w-2/3">
            <div className="h-96 w-full">
              <ReactApexChart
                options={state.options}
                series={state.series}
                type="candlestick"
                height={350}
              />
            </div>
          </div>

          {/* Buy/Sell Section */}
          <div className=" mt-6 w-full md:w-1/3">
            <div className="bg-white p-6 rounded-lg shadow-md w-full">
              <div className="flex justify-center mb-4">
              <ButtonGroup
      disableElevation
      variant="contained"
      aria-label="Disabled button group">
      <Button  style={ {  borderTopLeftRadius: '30px',borderBottomLeftRadius : '30px', color:'#fff'}}>Buy</Button>
      <Button  style={ {  borderBottomRightRadius : '30px',borderTopRightRadius : '30px', color:'#fff'}}>Sell</Button>
      </ButtonGroup>     
              </div>
              <form className="w-full">
                <div className="mb-4 w-full">
                  <label className="block text-sm text-gray-600 mb-1">Price</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="50000 USDT"
                  />
                </div>
                <div className="mb-4 w-full">
                  <label className="block text-sm text-gray-600 mb-1">Amount</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="BTC"
                  />
                </div>

                <div className="mb-4 w-full ">
                  <p className="block text-sm text-gray-600 mb-1">Percentage</p>
                  <div className="md:flex grid grid-cols-2 md:gap-x-0.5 gap-x-3 gap-y-2 md:justify-between">
                    <button className="px-2 py-1 bg-gray-200 text-gray-700 rounded-lg">
                      25%
                    </button>
                    <button className="px-2 py-1 bg-gray-200 text-gray-700 rounded-lg">
                      50%
                    </button>
                    <button className="px-2 py-1 bg-gray-200 text-gray-700 rounded-lg">
                      75%
                    </button>
                    <button className="px-2 py-1 bg-gray-200 text-gray-700 rounded-lg">
                      100%
                    </button>
                  </div>
                </div>


                <div className="mb-4">
                  <label className="block text-sm text-gray-600 mb-1 w-full">Total</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="USDT"
                  />
                </div>
                <div>
                  <h3>
                    Avbl <span className="text-right pl-4">0.0000001 USDT</span>
                  </h3>
                  <h3>
                    Max Buy <span className="text-right pl-4">0 Btc</span>
                  </h3>
                  <h3>
                    Est. Fee <span className="text-right pl-4">0 Btc</span>
                  </h3>
                </div>
                <div className="mt-1">
                  <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg">
                    Buy
                  </button>
                </div>
              </form>
            </div>
          </div>




        </div>

        {/* Cryptocurrency List */}
        <div className="bg-white mt-6 p-6 rounded-lg shadow-md w-full">
          <div className="md:flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">
              Top Cryptocurrencies Available on Eternal
            </h2>
            <a href="www.something.com" className="text-blue-500 text-sm">
              View More
            </a>
          </div>
          <div className="md:flex justify-between gap-x-4 ">
            {/* CARD FOR USDT */}
            <div className="flex-1 items-center bg-gray-100 rounded-lg py-3 px-2 w-auto flex gap-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="-3.2 -3.2 38.40 38.40" fill="#000000">
                <g id="SVGRepo_bgCarrier" >
                  <path transform="translate(-3.2, -3.2), scale(2.4)" fill="#26A17B" d="M9.166.33a2.25 2.25 0 00-2.332 0l-5.25 3.182A2.25 2.25 0 00.5 5.436v5.128a2.25 2.25 0 001.084 1.924l5.25 3.182a2.25 2.25 0 002.332 0l5.25-3.182a2.25 2.25 0 001.084-1.924V5.436a2.25 2.25 0 00-1.084-1.924L9.166.33z" strokewidth="0" />
                </g>
                <g id="SVGRepo_tracerCarrier"  />
                <g id="SVGRepo_iconCarrier"> <g fill="none" fill-rule="evenodd"> <circle cx="16" cy="16" r="16" fill="#26A17B" /> <path fill="#FFF" d="M17.922 17.383v-.002c-.11.008-.677.042-1.942.042-1.01 0-1.721-.03-1.971-.042v.003c-3.888-.171-6.79-.848-6.79-1.658 0-.809 2.902-1.486 6.79-1.66v2.644c.254.018.982.061 1.988.061 1.207 0 1.812-.05 1.925-.06v-2.643c3.88.173 6.775.85 6.775 1.658 0 .81-2.895 1.485-6.775 1.657m0-3.59v-2.366h5.414V7.819H8.595v3.608h5.414v2.365c-4.4.202-7.709 1.074-7.709 2.118 0 1.044 3.309 1.915 7.709 2.118v7.582h3.913v-7.584c4.393-.202 7.694-1.073 7.694-2.116 0-1.043-3.301-1.914-7.694-2.117" /> </g> </g>
              </svg>
              <span>
                <p className="text-gray-600">USDT</p>
                <p className="text-xl font-semibold">$1.00</p>
              </span>
            </div>
            {/* CARD FOR USDC */}
            <div className="flex-1 items-center bg-gray-100 rounded-lg py-3 px-2 w-auto flex gap-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="-3.2 -3.2 38.40 38.40" fill="#000000">
                <g id="SVGRepo_bgCarrier" />
                <g id="SVGRepo_tracerCarrier"  />
                <g id="SVGRepo_iconCarrier"> <g fill="none"> <circle fill="#2d558f" cx="16" cy="16" r="16" /> <g fill="#FFF"> <path d="M20.022 18.124c0-2.124-1.28-2.852-3.84-3.156-1.828-.243-2.193-.728-2.193-1.578 0-.85.61-1.396 1.828-1.396 1.097 0 1.707.364 2.011 1.275a.458.458 0 00.427.303h.975a.416.416 0 00.427-.425v-.06a3.04 3.04 0 00-2.743-2.489V9.142c0-.243-.183-.425-.487-.486h-.915c-.243 0-.426.182-.487.486v1.396c-1.829.242-2.986 1.456-2.986 2.974 0 2.002 1.218 2.791 3.778 3.095 1.707.303 2.255.668 2.255 1.639 0 .97-.853 1.638-2.011 1.638-1.585 0-2.133-.667-2.316-1.578-.06-.242-.244-.364-.427-.364h-1.036a.416.416 0 00-.426.425v.06c.243 1.518 1.219 2.61 3.23 2.914v1.457c0 .242.183.425.487.485h.915c.243 0 .426-.182.487-.485V21.34c1.829-.303 3.047-1.578 3.047-3.217z" /> <path d="M12.892 24.497c-4.754-1.7-7.192-6.98-5.424-11.653.914-2.55 2.925-4.491 5.424-5.402.244-.121.365-.303.365-.607v-.85c0-.242-.121-.424-.365-.485-.061 0-.183 0-.244.06a10.895 10.895 0 00-7.13 13.717c1.096 3.4 3.717 6.01 7.13 7.102.244.121.488 0 .548-.243.061-.06.061-.122.061-.243v-.85c0-.182-.182-.424-.365-.546zm6.46-18.936c-.244-.122-.488 0-.548.242-.061.061-.061.122-.061.243v.85c0 .243.182.485.365.607 4.754 1.7 7.192 6.98 5.424 11.653-.914 2.55-2.925 4.491-5.424 5.402-.244.121-.365.303-.365.607v.85c0 .242.121.424.365.485.061 0 .183 0 .244-.06a10.895 10.895 0 007.13-13.717c-1.096-3.46-3.778-6.07-7.13-7.162z" /> </g> </g> </g>
              </svg>
              <span>
                <p className="text-gray-600">USDC</p>
                <p className="text-xl font-semibold">$1.00</p>
              </span>
            </div>
            {/* CARD FOR BTC */}
            <div className="flex-1 items-center bg-gray-100 rounded-lg py-3 px-2 w-auto flex gap-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 -0.5 34 34" fill="none">
                <g id="SVGRepo_bgCarrier"  />
                <g id="SVGRepo_tracerCarrier"  />
                <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M33.2538 16.1292C33.2538 25.0371 26.0329 32.2584 17.1255 32.2584C8.21799 32.2584 0.99707 25.0371 0.99707 16.1292C0.99707 7.22128 8.21799 0 17.1255 0C26.0329 0 33.2538 7.22128 33.2538 16.1292ZM21.0002 10.1366C23.2438 10.9071 24.8849 12.0607 24.5629 14.2077C24.3291 15.7799 23.4543 16.5403 22.2921 16.8065C23.8866 17.6335 24.4301 19.2029 23.9251 21.1005C22.9664 23.8314 20.6874 24.0613 17.6562 23.4905L16.9202 26.4261L15.1434 25.9844L15.8693 23.0882C15.4087 22.9742 14.9379 22.8522 14.4529 22.7221L13.724 25.6325L11.9492 25.1908L12.6842 22.2491L9.10534 21.3496L9.98817 19.3226C9.98817 19.3226 11.2982 19.6685 11.28 19.6433C11.7832 19.7673 12.0069 19.4406 12.095 19.2238L14.0895 11.256C14.1117 10.8798 13.9811 10.4059 13.2613 10.2264C13.2886 10.2072 11.9705 9.90669 11.9705 9.90669L12.4433 8.01585L16.0272 8.90026L16.7562 5.99188L18.532 6.43358L17.8182 9.28448C18.2961 9.39238 18.776 9.5023 19.2427 9.61828L19.9514 6.78553L21.7282 7.22724L21.0002 10.1366ZM16.7488 14.9882C17.9591 15.3091 20.5928 16.0074 21.0519 14.1765C21.5202 12.3033 18.9615 11.7376 17.7087 11.4606L17.7086 11.4606L17.7085 11.4606C17.5666 11.4292 17.4414 11.4015 17.3393 11.3761L16.4545 14.9117C16.5388 14.9325 16.6378 14.9588 16.7488 14.9882ZM15.3775 20.6807C16.8271 21.0626 19.9976 21.8977 20.5021 19.8803C21.0185 17.8175 17.9445 17.1305 16.4446 16.7952L16.4441 16.7951C16.2767 16.7577 16.129 16.7247 16.008 16.6946L15.032 20.5913C15.1311 20.6158 15.2472 20.6464 15.3771 20.6806L15.3775 20.6807Z" fill="#f7931a" /> </g>
              </svg>
              <span>
                <p className="text-gray-600">BTC</p>
                <p className="text-xl font-semibold">$1.00</p>
              </span>
            </div>
            {/* CARD FOR BNB */}
            <div className="flex-1 items-center bg-gray-100 rounded-lg py-3 px-2 w-auto flex gap-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="-3.2 -3.2 38.40 38.40" fill="#000000">
                <g id="SVGRepo_bgCarrier"  />
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round"  />
                <g id="SVGRepo_iconCarrier"> <g fill="none"> <circle cx="16" cy="16" r="16" fill="#F3BA2F" /> <path fill="#FFF" d="M12.116 14.404L16 10.52l3.886 3.886 2.26-2.26L16 6l-6.144 6.144 2.26 2.26zM6 16l2.26-2.26L10.52 16l-2.26 2.26L6 16zm6.116 1.596L16 21.48l3.886-3.886 2.26 2.259L16 26l-6.144-6.144-.003-.003 2.263-2.257zM21.48 16l2.26-2.26L26 16l-2.26 2.26L21.48 16zm-3.188-.002h.002V16L16 18.294l-2.291-2.29-.004-.004.004-.003.401-.402.195-.195L16 13.706l2.293 2.293z" /> </g> </g>
              </svg>
              <span>
                <p className="text-gray-600">BNB</p>
                <p className="text-xl font-semibold">$750.00</p>
              </span>
              {/* CARD FOR ETH */}
            </div>
            <div className="flex-1 items-center bg-gray-100 rounded-lg py-3 px-2 w-auto flex gap-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 256 417" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M127.9 0L127.9 2L127.9 278L0 209L127.9 0Z" fill="#343434" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M127.9 0L255.8 209L127.9 278L127.9 0Z" fill="#8C8C8C" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M127.9 314L0 243L127.9 417L127.9 314Z" fill="#3C3C3B" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M127.9 417L255.8 243L127.9 314L127.9 417Z" fill="#8C8C8C" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M127.9 278L255.8 209L127.9 243L127.9 278Z" fill="#141414" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 209L127.9 278L127.9 243L0 209Z" fill="#393939" />
              </svg>
              <span>
                <p className="text-gray-600">ETH</p>
                <p className="text-xl font-semibold">$100.00</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
