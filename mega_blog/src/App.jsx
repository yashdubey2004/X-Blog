import { useState, useEffect } from 'react'
import authService from './appwrite/auth'
import { login, logout } from './store/AuthSlice'
import { useDispatch } from 'react-redux'
import { Header, Footer } from './components'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((user) => {
        if (user) {
          dispatch(login(user))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="App">
      <h1>Mega Blog</h1>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
