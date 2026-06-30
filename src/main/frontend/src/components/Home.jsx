import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Home() {
  const [username, setUsername] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('/api/user', { withCredentials: true }).then(res => {
      setUsername(res.data.username)
    })
  }, [])

  const handleLogout = async () => {
    await axios.post('/logout', {}, { withCredentials: true })
    navigate('/login')
  }

  return (
    <div>
      <h2>Welcome, {username}!</h2>
      <p>You are now logged in successfully.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}