import { React, useState } from 'react'
import logo from '../assets/eternal-logo.png'
import { useNavigate } from 'react-router-dom'
import chicklogo from '../assets/chick.png'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '',
  borderRadius: '14px',
  boxShadow: 24,
  p: 4,
};
export const CreateAccount = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleOpen = () => {
    setOpen(true)
  };
  const handleclose = () => {
    setOpen(false);
    navigate('/login')
  }
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='w-full max-w-sm p-6 bg-white rounded-lg shadow-lg'>
        {/**----logo---- */}
        <div className="flex  mb-3">
          <div className="text-blue-500 font-bold text-xl flex  w-2/3">
            <img src={logo} alt='logo' className="w-full h-full mr-1" />
          </div>
        </div>
        {/*     <!-- Create account text --> */}
        <div className='text-left'>
          <h1 className='font-bold text-2xl'>Create Your Account</h1>
        </div>
        <div>
          <input type='texxt' className='w-full  text-gray-700 bg-gray-100 borde border rounded-lg border-gray-300 px-4 py-2 mt-4' required placeholder='First Name' ></input>
          <input type='text' className='w-full  text-gray-700 bg-gray-100 borde border rounded-lg border-gray-300 px-4 py-2 mt-4' required placeholder='Last Name' ></input>
          <input type='dropdown' className='w-full  text-gray-700 bg-gray-100 borde border rounded-lg border-gray-300 px-4 py-2 mt-4' required placeholder='Select Country' ></input>
          <input type='password' className='w-full  text-gray-700 bg-gray-100 borde border rounded-lg border-gray-300 px-4 py-2 mt-4' required placeholder='Enter Password' ></input>
        </div>
        <div className='text-left list-disc'>
          <ol className='text-left '>
            <li>10-32 latters</li>
            <li>At least oneupper case, lower case and number</li>
            <li>Does,t contain any space</li>
          </ol>
        </div>
        <input type='password' className='w-full  text-gray-700 bg-gray-100 borde border rounded-lg border-gray-300 px-4 py-2 mt-4' required placeholder='Confirm Password' ></input>

        <button
          type="submit"
          onClick={handleOpen}
          className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Next
        </button>
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <button
                type="button"
                className="justify-self-start flex"
                onClick={handleclose}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="30px" height="30px" viewBox="0 0 32 32">
                  <g id="SVGRepo_bgCarrier" />
                  <g id="SVGRepo_tracerCarrier" />
                  <g id="SVGRepo_iconCarrier"> <path d="M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5 c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4 C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z" /> </g>
                </svg>
              </button>
              <div className='flex justify-center'>
                <img src={chicklogo} alt='chicklogo' className='h-24 w-24' /></div>
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <h1 className='text-center font-bold text-2xl'>What's next?</h1>
              <p className='text-gray-500 pt-3 text-center'>   Verify your account to enable deposits, crypto purchases, and trading. While you're at it, unlock up to
                8,200 USDT in new-user rewards!</p>
              <div className='flex justify-center'>
                <button
                  type="button"
                  className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onClick={() => { navigate('/verifynumber') }}
                >
                  Verify Now
                </button>
              </div>
            </Typography>
          </Box>
        </Modal>
      </div>
    </div>

  )
}
