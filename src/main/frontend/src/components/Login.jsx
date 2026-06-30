import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const location = useLocation()

  const [formData, setFormData] = useState({ username: '', password: '' })
  const showError = location.search.includes('error')

  return (
    <div>
      <h2>Please sign in</h2>
      {showError && <p style={{ color: 'red' }}>Invalid username or password.</p>}
      <form action="/login" method="post">
        <label>Username: <input type="text" name="username" value={formData.username} onChange={e => setFormData({...formData, username: e.target.value})} /></label><br/>
        <label>Password: <input type="password" name="password" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} /></label><br/>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}