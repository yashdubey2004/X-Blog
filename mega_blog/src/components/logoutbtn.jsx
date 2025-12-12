import React from 'react'
import {useDispatch} from 'react-redux'
import {logoutUser} from '../redux/slices/authSlice'
import { AuthService } from '../appwrite/auth';

function logoutbtn() {
    const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(logoutUser())} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
        Logout
      </button>
    </div>
  )
}

export default logoutbtn
