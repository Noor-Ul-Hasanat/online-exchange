import {React,useRef,useState} from 'react'
import logo from '../assets/eternal-logo.png'
import { NavLink,useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import { authActions } from '../Redux/Store';

export const  LogInn=()=> {

                      // Model stuff
const emailref = useRef();
const Passwordref = useRef();
const navigate = useNavigate();
const dispatch = useDispatch()
const [isvalidpassword, setIsvalidPassword] = useState(true);
const [isvalidemail, setIsvalidEmail] = useState(true);
const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

  const handleLogin = (e) => {
    e.preventDefault();
    
    const enteredemail = emailref.current.value;
    const enteredpassword = Passwordref.current.value;
    const isEmailValid = enteredemail=== 'noorulhasanat1234@gmail.com'
    const isPasswordValid = enteredpassword=== 'Admin1'

    if(isEmailValid && isPasswordValid ){
    dispatch(authActions.loginSuccess());
    navigate('/dashboard');
  }
  else {
    setIsvalidEmail(isEmailValid);
    setIsvalidPassword(isPasswordValid);
  }
};
  console.log('Is Authenticated:', isAuthenticated);
  return (
    <div className='flex justify-center items-center bg-gray-100 min-h-screen'> 
    <div className='w-full max-w-sm p-6 bg-white rounded-lg shadow-lg'>
        {/*     <!-- logo --> */}
        <div className="flex  mb-3">
        <div className="text-blue-500 font-bold text-xl flex  w-2/3">
         <img src={logo} alt='logo' className="w-full h-full mr-1"/>      
        </div>
      </div>
           {/*     <!-- Welcome text --> */}
           <div className='text-left'>
                  <h1 className='text-2xl font-bold text-gray-500'>Log in</h1>
           </div>
           <div>
            <form>
            <div className="mb-4 text-left mt-8">
        <label >Email/Phone Number</label>
        <input
          type="text"
          placeholder="Email/Phone"
          ref={emailref}
          className={isvalidemail? 'w-full mt-1 px-4 py-2 text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100 border border-gray-300'
             : 'border border-red-500 bg-red-200  w-full mt-1 px-4 py-2 text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-200'}
        />
      </div>
      <div className="mb-4 text-left mt-8">
        <label >Password</label>
        <input
          type="text"
          placeholder="Password"
          ref={Passwordref}
          className={isvalidpassword? 'w-full mt-1 px-4 py-2 text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100 border border-gray-300'
            : 'border border-red-500 bg-red-200  w-full mt-1 px-4 py-2 text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-200'}
        />
      </div>
      <div className="mb-4 text-left mt-8">
        <input
          type="checkbox"
          id='remember me'
          className="mt-1 px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
         <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
          Remember Me
        </label>
      </div>

      <NavLink to='/forgetpass' ><button className="text-blue-500 hover:underline mt-10 mb-10">Forgot: Password?</button></NavLink>    
      <button
        type="button"
        onClick={handleLogin}
        className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Next
      </button> 
            </form>
           </div>
            {/*   <!-- OR Section --> */}
    <div className="flex items-center my-6">
      <div className="flex-1 h-px bg-gray-300"></div>
      <span className="mx-4 text-sm text-gray-400">or</span>
      <div className="flex-1 h-px bg-gray-300"></div>
    </div>
   {/*  <!-- Social Login Buttons -->*/}
    <div className="flex flex-col space-y-3">
      <button className="flex items-center justify-center w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200">
        <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="w-5 h-5 mr-2" />
        Continue With Google
      </button>
      <button className="flex items-center justify-center w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200">
        <img src="https://www.svgrepo.com/show/157817/facebook.svg" alt="Facebook" className="w-5 h-5 mr-2" />
        Continue With Facebook
      </button>
    </div>
   
       
     
    </div>
    </div>  
  )
}
