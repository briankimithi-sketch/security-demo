import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../api/axios'

export default function Greeting() {
  const [username, setUsername] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    api.get('/api/user').then(res => {
      if (res.data.authenticated === 'false') {
        navigate('/login')
      } else {
        setUsername(res.data.username)
      }
    })
  }, [navigate])

  const handleLogout = async () => {
    await api.post('/logout', {})
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