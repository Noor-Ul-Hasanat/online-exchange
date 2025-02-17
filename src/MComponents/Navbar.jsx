
import { React, useState, useEffect, useRef } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import image from '../assets/WhatsApp Image 2024-02-28 at 23.32.02_8a2cc56f.jpg'
import logo from '../assets/eternal-logo.png'
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import SearchIcon from '@mui/icons-material/Search';
import VerticalAlignBottomSharpIcon from '@mui/icons-material/VerticalAlignBottomSharp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { useDispatch } from 'react-redux';
import { authActions } from '../Redux/Store';

export const Navbar = () => {
  const dispatch = useDispatch();
  const handelLogout = () => {
    dispatch(authActions.logout())
  }
  const Myref = useRef()
  const handelsearch = () => {
    //Myref.document.getElementById()
    Myref.current.focus()
  }
  //  The state managment for Side bar nav
  const [isShow, setIsShow] = useState(false)
  const toggleNavbar = () => {
    setIsShow(!isShow);
  }
  // The state for main waleet and spot waleet show in left side
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  //  For auto scroll to top
  const path = useLocation(); // Gets the current route path
  useEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo(0, 0);
    setIsShow(false)
  }, [path]);

  //  For profile dropdown
  const [isprofileOpen, setIsprofileOpen] = useState(false)
  const dropdownRef = useRef(null);
  const toggleDropdown2 = () => {
    setIsprofileOpen(!isprofileOpen);

  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsprofileOpen(false); // Close dropdown
      }
    };
    // Add event listener for clicks
    document.addEventListener('mousedown', handleClickOutside);
    // Cleanup event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <>
      {/* FullScreen */}
      <div className=' flex w-full'>
        {/* left  */}
        <div className={isShow ?
          'fixed  w-64 h-full bg-white border-r shadow-md z-[99] transform duration-500' :
          'fixed  w-64 h-full bg-white border-r shadow-md z-[99] transform md:translate-x-0 -translate-x-full transition-all duration-500 overflow-y-auto'}>
          {/* Left-logo */}
          <div className=' flex items-center justify-center'>
            <div className='pt-5 px-3'>
              <img src={logo} alt='logo' className='h-fit w-fit ' />
            </div>
            <span className='p-2  md:hidden ml-auto'>
              <button onClick={toggleNavbar} className='justify-self-end'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="26px" height="26px" viewBox="0 0 32 32">
                  <g id="SVGRepo_bgCarrier" />
                  <g id="SVGRepo_tracerCarrier" />
                  <g id="SVGRepo_iconCarrier"> <path d="M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5 c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4 C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z" /> </g>
                </svg>
              </button>
            </span>
          </div>
          {/*Left-Name and ul  */}
          <div className="text-center py-6">
            <img src={image} alt="User" className="w-20 h-20 mx-auto rounded-full object-contain object-top" />
            <h3 className="text-lg font-semibold mt-2">Hello, William</h3>
            <p className="text-sm text-gray-500">william@example.com</p>
          </div>
          <ul>
            <div className='mx-4'>
              <NavLink to="/dashboard" className={({ isActive }) => isActive ?
                "flex items-center px-6 py-3 text-blue-700 bg-blue-200 rounded-3xl font-medium" :
                "flex items-center px-6 py-3 text-gray-700 rounded-3xl font-medium hover:bg-gray-100"} >
                <li>Dashboard</li>
              </NavLink>
              <div className="flex flex-col space-y-2">
                <button
                  className="flex items-center px-4 py-2 rounded-md ml-2 text-gray-700 font-medium"
                  onClick={toggleDropdown}
                  type='dropdown'>
                  My Wallet
                  <span className='ml-4'><ArrowDropDownSharpIcon></ArrowDropDownSharpIcon></span>
                </button>
                <div id="my-wallet-dropdown"
                  className={isOpen ? 'block ml-3' : 'hidden'}>
                  <NavLink to="wallet" className={({ isActive }) => isActive ?
                    "flex items-center px-6 py-3 text-blue-700 bg-blue-200 rounded-3xl font-medium" :
                    "flex items-center px-6 py-3 text-gray-700 rounded-3xl font-medium hover:bg-gray-100"}>
                    Main Wallet
                  </NavLink>
                  <NavLink to="spotwallet" className={({ isActive }) => isActive ?
                    "flex items-center px-6 py-3 text-blue-700 bg-blue-200 rounded-3xl font-medium" :
                    "flex items-center px-6 py-3 text-gray-700 rounded-3xl font-medium hover:bg-gray-100"}>
                    Spot Wallet
                  </NavLink>
                </div>
              </div>
            </div>
            <div className='mx-4'>
              <NavLink to='transictions' className={({ isActive }) => isActive ?
                "flex items-center px-6 py-3 text-blue-700 bg-blue-200 rounded-3xl font-medium" :
                "flex items-center px-6 py-3 text-gray-700 rounded-3xl font-medium hover:bg-gray-100"} >
                <li>Ttransaction</li></NavLink>
            </div>
            <div className='mx-4'>
              <NavLink to='verifications' className={({ isActive }) => isActive ?
                "flex items-center px-6 py-3 text-blue-700 bg-blue-200 rounded-3xl font-medium" :
                "flex items-center px-6 py-3 text-gray-700 rounded-3xl font-medium hover:bg-gray-100"}>
                <li>Identity Verification</li>
              </NavLink>
            </div>
            <div className='mx-4'>
              <NavLink to='trade' className={({ isActive }) => isActive ?
                "flex items-center px-6 py-3 text-blue-700 bg-blue-200 rounded-3xl font-medium" :
                "flex items-center px-6 py-3 text-gray-700 rounded-3xl font-medium hover:bg-gray-100"}>
                <li>Exchange</li>
              </NavLink>
            </div>
            <div className='mx-4'>
              <NavLink to='settings' className={({ isActive }) => isActive ?
                "flex items-center px-6 py-3 text-blue-700 bg-blue-200 rounded-3xl font-medium" :
                "flex items-center px-6 py-3 text-gray-700 rounded-3xl font-medium hover:bg-gray-100"}>
                <li>Settings</li></NavLink>
            </div>
          </ul>
        </div>
        {/* Right Main div */}
        <div className=' md:ml-64 ml-0 min-h-screen flex flex-col w-full '>
          {/* upper header */}
          
          <div className="flex items-center justify-between px-2 sm:px-4 py-4 bg-white shadow-md fixed z-50 w-full md:w-[calc(100%-16rem)]" >
            <div className='block md:hidden w-[10%]' >
              <button onClick={toggleNavbar} className='p-1' >
                <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24" fill="none">
                  <g id="SVGRepo_bgCarrier" />
                  <g id="SVGRepo_tracerCarrier" />
                  <g id="SVGRepo_iconCarrier"> <path d="M4 12H20M4 8H20M4 16H12" stroke="#8c8c8c" /> </g>
                </svg>
              </button>
            </div>
            {/* <!-- Search Bar --> */}
            <div className="flex items-center w-[40%] bg-gray-200 rounded-full px-2 py-2 sm:px-3 sm:py-3  sm:ml-5 text-sm font-semibold">
              <input ref={Myref}
                type="text"
                placeholder="Search..."
                className="w-full bg-transparent outline-none text-gray-800 text-sm" />
              <button
                type="button"
                className="text-gray-500 focus:outline-none ml-1"
                onClick={handelsearch}>
                <SearchIcon />
              </button>
            </div>
            {/* <!-- Actions --> */}
            <div className="flex items-center space-x-2 sm:space-x-4 w-[40%] justify-end ">
              {/* <!-- Add Funds Button --> */}
              <NavLink to='/deposit'>
                <button className="hidden lg:flex items-center px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
                  <VerticalAlignBottomSharpIcon className='mr-1' />
                  Add Funds
                </button>
              </NavLink>
              {/* <!-- Notifications Icon --> */}
              <div className="relative">
                <NavLink to='notification'>
                  <button className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
                    <NotificationsOutlinedIcon />
                  </button>
                </NavLink>
                <span className="absolute top-0 right-0 w-4 h-4 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center">
                  5
                </span>
              </div>
              {/* <!-- profile Avatar --> */}
              <div className="rounded-full items-center justify-center ">

              <div  ref={dropdownRef}  >
      <button id="profile-button" onClick={toggleDropdown2} type='button' className='w-10 h-10'>
      <AccountCircleIcon />
      </button>   
      {isprofileOpen && ( 
        <div
          className="absolute right-0 mt-6 w-48 bg-white shadow-lg rounded-lg"
          id="my-wallet-dropdown">
          <button  className="w-full block px-4 py-2 text-gray-700 hover:bg-gray-200" onClick={() => console.log("Settings clicked")}>
            Settings
          </button>
          <button className=" w-full block px-4 py-2 text-gray-700 hover:bg-gray-200" onClick={() => console.log("Switch Account clicked")}>
            Switch Account
          </button>
          <button className="w-full block px-4 py-2 text-gray-700 hover:bg-gray-200" onClick={handelLogout}>
            Log Out
          </button>
        </div>)}    
    </div>             
              </div>
            </div>
          </div>

          {/* Chnaging div */}
         
          <div className=' mt-20 sm:p-8 p-2 bg-gray-50 w-full'>
            <Outlet />
          </div>

          {/* Footer Section  */}
         
          <div className="xs:flex text-sm text-gray-600  px-4 sm:px-12 bg-gray-100 ">

            <div className='xs:w-3/4 grid grid-cols-1 -cols-5 gap-4 overflow-auto w-full'>
              <table className="w-full  ">
                <thead>
                  <tr>
                    <td className="p-5 text-sm font-medium">Corporate</td>
                    <td className="p-5 text-sm font-medium">Learn</td>
                    <td className="p-5 text-sm font-medium">Crypto Prices</td>
                   
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="p-5 font-thin text-sm"><a href="www.something.com" className="hover:underline">About US</a></td>
                    <td className="p-5 font-thin text-sm"><a href="www.something.com" className="hover:underline">Buy Bitcoin</a></td>
                    <td className="p-5 font-thin text-sm"><a href="www.something.com" className="hover:underline">Bitcoin Price</a></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-5 font-thin text-sm"><a href="www.something.com" className="hover:underline">Learn</a></td>
                    <td className="p-5 font-thin text-sm"><a href="www.something.com" className="hover:underline">Buy Hamster</a></td>
                    <td className="p-5 font-thin text-sm"><a href="www.something.com" className="hover:underline">Hamster Price</a></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-5 font-thin text-sm"><a href="www.something.com" className="hover:underline">Terms</a></td>
                    <td className="p-5 font-thin text-sm"><a href="www.something.com" className="hover:underline">Buy Ethereum</a></td>
                    <td className="p-5 font-thin text-sm"><a href="www.something.com" className="hover:underline">Ethereum Price</a></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-5 font-thin text-sm"><a href="www.something.com" className="hover:underline">Privacy</a></td>
                    <td className="p-5 font-thin text-sm"><a href="www.something.com" className="hover:underline">Buy Dogecoin</a></td>
                    <td className="p-5 font-thin text-sm"><a href="www.something.com" className="hover:underline">Dogecoin Price</a></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-5 font-thin text-sm"><a href="www.something.com" className="hover:underline">24/7 Support</a></td>
                    <td className="p-5 font-thin text-sm"><a href="www.something.com" className="hover:underline">Buy solana</a></td>
                    <td className="p-5 font-thin text-sm"><a href="www.something.com" className="hover:underline">solana price</a></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/*   Community    */}
            <div className='xs:w-1/4 w-full'>
              <h1 className='pl-4 pt-5 text-lg font-medium'>Community</h1>
              <div className='xs:grid xs:grid-cols-4 xs:gap-2 grid-cols-3 grid  pl-4  pt-7 gap-3 '>
                {/* Youtube */}
                <div>
                  <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="32px" height="32px" viewBox="0 -3 20 20" version="1.1" fill="#000000" >
                      <g id="SVGRepo_bgCarrier" />
                      <g id="SVGRepo_tracerCarrier" />
                      <g id="SVGRepo_iconCarrier">
                        <g id="Page-1" stroke="none" fill="none" fillRule="evenodd">
                          <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7442.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)">
                            <path d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289" id="youtube-[#168]"></path>
                          </g></g></g></g>
                    </svg>
                  </a>
                </div>

                {/* Instagram */}
                <div>
                  <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="32px" height="32px" viewBox="0 0 20 20" version="1.1" fill="#000000">
                      <g id="SVGRepo_bgCarrier" />
                      <g id="SVGRepo_tracerCarrier" />
                      <g id="SVGRepo_iconCarrier"> <g id="Page-1" stroke="none" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -7439.000000)" fill="#000000">
                        <g id="icons" transform="translate(56.000000, 160.000000)">
                          <path d="M289.869652,7279.12273 C288.241769,7279.19618 286.830805,7279.5942 285.691486,7280.72871 C284.548187,7281.86918 284.155147,7283.28558 284.081514,7284.89653 C284.035742,7285.90201 283.768077,7293.49818 284.544207,7295.49028 C285.067597,7296.83422 286.098457,7297.86749 287.454694,7298.39256 C288.087538,7298.63872 288.809936,7298.80547 289.869652,7298.85411 C298.730467,7299.25511 302.015089,7299.03674 303.400182,7295.49028 C303.645956,7294.859 303.815113,7294.1374 303.86188,7293.08031 C304.26686,7284.19677 303.796207,7282.27117 302.251908,7280.72871 C301.027016,7279.50685 299.5862,7278.67508 289.869652,7279.12273 M289.951245,7297.06748 C288.981083,7297.0238 288.454707,7296.86201 288.103459,7296.72603 C287.219865,7296.3826 286.556174,7295.72155 286.214876,7294.84312 C285.623823,7293.32944 285.819846,7286.14023 285.872583,7284.97693 C285.924325,7283.83745 286.155174,7282.79624 286.959165,7281.99226 C287.954203,7280.99968 289.239792,7280.51332 297.993144,7280.90837 C299.135448,7280.95998 300.179243,7281.19026 300.985224,7281.99226 C301.980262,7282.98483 302.473801,7284.28014 302.071806,7292.99991 C302.028024,7293.96767 301.865833,7294.49274 301.729513,7294.84312 C300.829003,7297.15085 298.757333,7297.47145 289.951245,7297.06748 M298.089663,7283.68956 C298.089663,7284.34665 298.623998,7284.88065 299.283709,7284.88065 C299.943419,7284.88065 300.47875,7284.34665 300.47875,7283.68956 C300.47875,7283.03248 299.943419,7282.49847 299.283709,7282.49847 C298.623998,7282.49847 298.089663,7283.03248 298.089663,7283.68956 M288.862673,7288.98792 C288.862673,7291.80286 291.150266,7294.08479 293.972194,7294.08479 C296.794123,7294.08479 299.081716,7291.80286 299.081716,7288.98792 C299.081716,7286.17298 296.794123,7283.89205 293.972194,7283.89205 C291.150266,7283.89205 288.862673,7286.17298 288.862673,7288.98792 M290.655732,7288.98792 C290.655732,7287.16159 292.140329,7285.67967 293.972194,7285.67967 C295.80406,7285.67967 297.288657,7287.16159 297.288657,7288.98792 C297.288657,7290.81525 295.80406,7292.29716 293.972194,7292.29716 C292.140329,7292.29716 290.655732,7290.81525 290.655732,7288.98792" id="instagram-[#167]"></path></g> </g></g></g>
                    </svg></a>
                </div>

                {/* Raddit */}
                <div>
                  <a href="https://www.reddit.com" target="_blank" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="32px" height="32px" viewBox="0 0 32 32" version="1.1">
                      <g id="SVGRepo_bgCarrier" />
                      <g id="SVGRepo_tracerCarrier" />
                      <g id="SVGRepo_iconCarrier"> <title>reddit</title> <path d="M12.606 20.986c-0.225 0.001-0.407 0.183-0.407 0.408 0 0.112 0.045 0.214 0.118 0.288l0-0c0.952 0.716 2.155 1.146 3.457 1.146 0.085 0 0.17-0.002 0.255-0.006l-0.012 0c0.081 0.004 0.175 0.006 0.27 0.006 1.294 0 2.488-0.431 3.445-1.158l-0.014 0.010c0.077-0.081 0.124-0.19 0.124-0.311 0-0.101-0.033-0.194-0.089-0.269l0.001 0.001c-0.074-0.074-0.177-0.119-0.29-0.119s-0.215 0.045-0.29 0.119l0-0c-0.799 0.575-1.798 0.919-2.877 0.919-0.092 0-0.184-0.003-0.275-0.007l0.013 0.001c-0.082 0.005-0.178 0.008-0.274 0.008-1.075 0-2.070-0.345-2.88-0.93l0.014 0.010c-0.074-0.073-0.175-0.119-0.287-0.119-0.001 0-0.002 0-0.003 0h0zM19.436 16c-0.861 0.001-1.56 0.699-1.56 1.561s0.699 1.561 1.561 1.561 1.561-0.699 1.561-1.561v0c-0.002-0.862-0.7-1.56-1.562-1.561h-0zM12.563 16c0.861 0 1.56 0.699 1.56 1.56s-0.699 1.56-1.56 1.56-1.56-0.699-1.56-1.56c0-0.861 0.698-1.56 1.56-1.56h0zM22.261 6.933c0.852 0.006 1.54 0.698 1.54 1.551 0 0.857-0.694 1.551-1.551 1.551-0.828 0-1.505-0.65-1.549-1.467l-0-0.004-3.245-0.684-1 4.682c2.185 0.049 4.201 0.737 5.878 1.884l-0.037-0.024c0.38-0.379 0.905-0.614 1.485-0.614 0.008 0 0.017 0 0.025 0h-0.001c1.21 0.001 2.191 0.982 2.192 2.192v0c-0.007 0.88-0.513 1.64-1.249 2.011l-0.013 0.006c0.033 0.191 0.052 0.412 0.052 0.637 0 0.005 0 0.009-0 0.014v-0.001c0 3.367-3.911 6.086-8.752 6.086s-8.752-2.719-8.752-6.086c0-0.001 0-0.003 0-0.005 0-0.234 0.020-0.463 0.057-0.687l-0.003 0.024c-0.771-0.35-1.298-1.114-1.298-2.001 0-1.21 0.981-2.191 2.191-2.191 0 0 0.001 0 0.001 0h-0c0.586 0.006 1.116 0.238 1.509 0.613l-0.001-0.001c1.66-1.148 3.711-1.841 5.924-1.858l0.004-0 1.106-5.226c0.028-0.103 0.090-0.189 0.173-0.245l0.002-0.001c0.063-0.037 0.139-0.059 0.22-0.059 0.027 0 0.054 0.003 0.080 0.007l-0.003-0 3.631 0.771c0.247-0.522 0.77-0.876 1.375-0.876 0.003 0 0.007 0 0.010 0h-0.001zM16 1.004c0 0 0 0-0 0-8.282 0-14.996 6.714-14.996 14.996s6.714 14.996 14.996 14.996c8.282 0 14.996-6.714 14.996-14.996 0-4.141-1.678-7.89-4.392-10.604v0c-2.714-2.714-6.463-4.392-10.604-4.392v0z" /> </g>
                    </svg></a>
                </div>

                {/* Coin cap */}
                <div  >
                  <a href="https://coinmarketcap.com/" target="_blank" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76.52 77.67" width='32' height='32'>
                      <path d="m66.54 46.41a4.09 4.09 0 0 1 -4.17.28c-1.54-.87-2.37-2.91-2.37-5.69v-8.52c0-4.09-1.62-7-4.33-7.79-4.58-1.34-8 4.27-9.32 6.38l-8.1 13.11v-16c-.09-3.69-1.29-5.9-3.56-6.56-1.5-.44-3.75-.26-5.94 3.08l-18.11 29.07a32 32 0 0 1 -3.64-14.94c0-17.52 14-31.77 31.25-31.77s31.3 14.25 31.3 31.77v.09s0 .06 0 .09c.17 3.39-.93 6.09-3 7.4zm10-7.57v-.17c-.14-21.35-17.26-38.67-38.29-38.67s-38.25 17.42-38.25 38.83 17.16 38.84 38.25 38.84a37.81 37.81 0 0 0 26-10.36 3.56 3.56 0 0 0 .18-5 3.43 3.43 0 0 0 -4.86-.23 30.93 30.93 0 0 1 -44.57-2.08l16.3-26.2v12.09c0 5.81 2.25 7.69 4.14 8.24s4.78.17 7.81-4.75l9-14.57c.28-.47.55-.87.79-1.22v7.41c0 5.43 2.18 9.77 6 11.91a11 11 0 0 0 11.21-.45c4.2-2.73 6.49-7.67 6.25-13.62z" fill="#17181b" /></svg></a>
                </div>

                {/* Tiktok */}
                <div>
                  <a href="https://www.tiktok.com" target="_blank" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24" fill="none">
                      <g id="SVGRepo_bgCarrier" />
                      <g id="SVGRepo_tracerCarrier" />
                      <g id="SVGRepo_iconCarrier"> <path d="M16.8218 5.1344C16.0887 4.29394 15.648 3.19805 15.648 2H14.7293C14.9659 3.3095 15.7454 4.43326 16.8218 5.1344Z" fill="#000000" /> <path d="M8.3218 11.9048C6.73038 11.9048 5.43591 13.2004 5.43591 14.7931C5.43591 15.903 6.06691 16.8688 6.98556 17.3517C6.64223 16.8781 6.43808 16.2977 6.43808 15.6661C6.43808 14.0734 7.73255 12.7778 9.324 12.7778C9.62093 12.7778 9.90856 12.8288 10.1777 12.9124V9.40192C9.89927 9.36473 9.61628 9.34149 9.324 9.34149C9.27294 9.34149 9.22654 9.34614 9.1755 9.34614V12.0394C8.90176 11.9558 8.61873 11.9048 8.3218 11.9048Z" fill="#000000" /> <path d="M19.4245 6.67608V9.34614C17.6429 9.34614 15.9912 8.77501 14.6456 7.80911V14.7977C14.6456 18.2851 11.8108 21.127 8.32172 21.127C6.97621 21.127 5.7235 20.6998 4.69812 19.98C5.8534 21.2198 7.50049 22 9.32392 22C12.8083 22 15.6478 19.1627 15.6478 15.6707V8.68211C16.9933 9.64801 18.645 10.2191 20.4267 10.2191V6.78293C20.0787 6.78293 19.7446 6.74574 19.4245 6.67608Z" fill="#000000" /> <path d="M14.6456 14.7977V7.80911C15.9912 8.77501 17.6429 9.34614 19.4245 9.34614V6.67608C18.3945 6.45788 17.4899 5.90063 16.8218 5.1344C15.7454 4.43326 14.9704 3.3095 14.7245 2H12.2098L12.2051 15.7775C12.1495 17.3192 10.8782 18.5591 9.32393 18.5591C8.35884 18.5591 7.50977 18.0808 6.98085 17.3564C6.06219 16.8688 5.4312 15.9076 5.4312 14.7977C5.4312 13.205 6.72567 11.9094 8.31708 11.9094C8.61402 11.9094 8.90168 11.9605 9.17079 12.0441V9.35079C5.75598 9.42509 3 12.2298 3 15.6707C3 17.3331 3.64492 18.847 4.69812 19.98C5.7235 20.6998 6.97621 21.127 8.32172 21.127C11.8061 21.127 14.6456 18.2851 14.6456 14.7977Z" fill="#000000" /> </g>
                    </svg></a>
                </div>

                {/* Discord */}
                <div>
                  <a href="https://discord.com" target="_blank" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36px" height="36px" viewBox="-174.08 -174.08 1372.16 1372.16" fill="#000000">
                      <g id="SVGRepo_bgCarrier" />
                      <g id="SVGRepo_tracerCarrier" />
                      <g id="SVGRepo_iconCarrier"> <circle cx="512" cy="512" r="512" fill='#000000' /> <path d="M689.43 349a422.21 422.21 0 0 0-104.22-32.32 1.58 1.58 0 0 0-1.68.79 294.11 294.11 0 0 0-13 26.66 389.78 389.78 0 0 0-117.05 0 269.75 269.75 0 0 0-13.18-26.66 1.64 1.64 0 0 0-1.68-.79A421 421 0 0 0 334.44 349a1.49 1.49 0 0 0-.69.59c-66.37 99.17-84.55 195.9-75.63 291.41a1.76 1.76 0 0 0 .67 1.2 424.58 424.58 0 0 0 127.85 64.63 1.66 1.66 0 0 0 1.8-.59 303.45 303.45 0 0 0 26.15-42.54 1.62 1.62 0 0 0-.89-2.25 279.6 279.6 0 0 1-39.94-19 1.64 1.64 0 0 1-.16-2.72c2.68-2 5.37-4.1 7.93-6.22a1.58 1.58 0 0 1 1.65-.22c83.79 38.26 174.51 38.26 257.31 0a1.58 1.58 0 0 1 1.68.2c2.56 2.11 5.25 4.23 8 6.24a1.64 1.64 0 0 1-.14 2.72 262.37 262.37 0 0 1-40 19 1.63 1.63 0 0 0-.87 2.28 340.72 340.72 0 0 0 26.13 42.52 1.62 1.62 0 0 0 1.8.61 423.17 423.17 0 0 0 128-64.63 1.64 1.64 0 0 0 .67-1.18c10.68-110.44-17.88-206.38-75.7-291.42a1.3 1.3 0 0 0-.63-.63zM427.09 582.85c-25.23 0-46-23.16-46-51.6s20.38-51.6 46-51.6c25.83 0 46.42 23.36 46 51.6.02 28.44-20.37 51.6-46 51.6zm170.13 0c-25.23 0-46-23.16-46-51.6s20.38-51.6 46-51.6c25.83 0 46.42 23.36 46 51.6.01 28.44-20.17 51.6-46 51.6z" fill="#fffafa" /> </g>
                    </svg></a>
                </div>

                {/* Twitter */}
                <div>
                  <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="32px" height="32px" viewBox="0 -2 20 20" version="1.1" fill="#000000">
                      <g id="SVGRepo_bgCarrier" />
                      <g id="SVGRepo_tracerCarrier" />
                      <g id="SVGRepo_iconCarrier">
                        <g id="Page-1" stroke="none" fill="none" fillRule="evenodd">
                          <g id="Dribbble-Light-Preview" transform="translate(-60.000000, -7521.000000)" fill="#000000">
                            <g id="icons" transform="translate(56.000000, 160.000000)">
                              <path
                                d="M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705"
                                id="twitter-[#154]"></path></g></g></g></g>
                    </svg></a>
                </div>

                {/* Telegram */}
                <div>
                  <a href="https://www.telegram.org" target="_blank" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="32px" height="32px" viewBox="0 0 32 32" version="1.1">
                      <g id="SVGRepo_bgCarrier" />
                      <g id="SVGRepo_tracerCarrier" />
                      <g id="SVGRepo_iconCarrier"> <title>telegram</title> <path d="M22.122 10.040c0.006-0 0.014-0 0.022-0 0.209 0 0.403 0.065 0.562 0.177l-0.003-0.002c0.116 0.101 0.194 0.243 0.213 0.403l0 0.003c0.020 0.122 0.031 0.262 0.031 0.405 0 0.065-0.002 0.129-0.007 0.193l0-0.009c-0.225 2.369-1.201 8.114-1.697 10.766-0.21 1.123-0.623 1.499-1.023 1.535-0.869 0.081-1.529-0.574-2.371-1.126-1.318-0.865-2.063-1.403-3.342-2.246-1.479-0.973-0.52-1.51 0.322-2.384 0.221-0.23 4.052-3.715 4.127-4.031 0.004-0.019 0.006-0.040 0.006-0.062 0-0.078-0.029-0.149-0.076-0.203l0 0c-0.052-0.034-0.117-0.053-0.185-0.053-0.045 0-0.088 0.009-0.128 0.024l0.002-0.001q-0.198 0.045-6.316 4.174c-0.445 0.351-1.007 0.573-1.619 0.599l-0.006 0c-0.867-0.105-1.654-0.298-2.401-0.573l0.074 0.024c-0.938-0.306-1.683-0.467-1.619-0.985q0.051-0.404 1.114-0.827 6.548-2.853 8.733-3.761c1.607-0.853 3.47-1.555 5.429-2.010l0.157-0.031zM15.93 1.025c-8.302 0.020-15.025 6.755-15.025 15.060 0 8.317 6.742 15.060 15.060 15.060s15.060-6.742 15.060-15.060c0-8.305-6.723-15.040-15.023-15.060h-0.002q-0.035-0-0.070 0z" /> </g>
                    </svg></a>

                </div>

                {/* Fcebook */}
                <div >
                  <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="32px" height="32px" viewBox="0 0 32 32" version="1.1" >
                      <g id="SVGRepo_bgCarrier" />
                      <g id="SVGRepo_tracerCarrier" />
                      <g id="SVGRepo_iconCarrier"> <title>facebook</title> <path d="M30.996 16.091c-0.001-8.281-6.714-14.994-14.996-14.994s-14.996 6.714-14.996 14.996c0 7.455 5.44 13.639 12.566 14.8l0.086 0.012v-10.478h-3.808v-4.336h3.808v-3.302c-0.019-0.167-0.029-0.361-0.029-0.557 0-2.923 2.37-5.293 5.293-5.293 0.141 0 0.281 0.006 0.42 0.016l-0.018-0.001c1.199 0.017 2.359 0.123 3.491 0.312l-0.134-0.019v3.69h-1.892c-0.086-0.012-0.185-0.019-0.285-0.019-1.197 0-2.168 0.97-2.168 2.168 0 0.068 0.003 0.135 0.009 0.202l-0.001-0.009v2.812h4.159l-0.665 4.336h-3.494v10.478c7.213-1.174 12.653-7.359 12.654-14.814v-0z" /> </g>
                    </svg></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
