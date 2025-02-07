import React from 'react'
import { useDispatch } from 'react-redux'
import { authActions } from '../Redux/Store'
export const  Dummy1=() =>{

    const dispatch = useDispatch();
    const ProtectedRoute=()=>{
        dispatch(authActions.loginSuccess());
    }
    const PublicRoute =()=>{
        dispatch(authActions.logout());
    }

  return (
    <div className='justify-center items-center flex'>
        <div className='max-w-sm bg-slate-300 justify-center items-center gap-7 flex'>
      <button className='bg-blue-700 justify-center items-center' onClick={ProtectedRoute}>Log in</button>
      <button className='bg-blue-700 justify-center items-center' onClick={PublicRoute}>Log out</button>
      </div>
    </div>
  )
}
