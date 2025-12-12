import React from 'react'
import {useDispatch} from 'react-redux'
import {logout} from '../store/AuthSlice'
import authService from '../appwrite/auth'

function logoutbtn() {
    const dispatch = useDispatch();

    const handleLogout = async () => {
        await authService.logout()
        dispatch(logout())
    }

  return (
    <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
        Logout
    </button>
  )
}

export default logoutbtn
