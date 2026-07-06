import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import api from '../api/axios'
import './Login.css'

export default function Login() {
  const navigate = useNavigate()
  const location = useLocation()

  const [formData, setFormData] = useState({ username: '', password: '', rememberMe: false })
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setErrorMessage('')

    try {
      const params = new URLSearchParams()
      params.append('username', formData.username)
      params.append('password', formData.password)
      if (formData.rememberMe) {
        params.append('remember-me', 'true')
      }
      await api.post('/login', params)
      navigate('/greeting')
    } catch (err) {
      setErrorMessage('Invalid username or password.')
      setIsLoading(false)
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Welcome Back</h1>
          <p>Sign in to continue to your account</p>
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          {errorMessage && (
            <div className="error-message">
              <svg className="error-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              {errorMessage}
            </div>
          )}
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <div className="input-wrapper">
              <svg className="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={e => setFormData({...formData, username: e.target.value})}
                placeholder="Enter your username"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <svg className="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={e => setFormData({...formData, password: e.target.value})}
                placeholder="Enter your password"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label className="checkbox-container">
              <input
                type="checkbox"
                checked={formData.rememberMe}
                onChange={e => setFormData({...formData, rememberMe: e.target.checked})}
              />
              <span>Remember me</span>
            </label>
          </div>
          <button type="submit" className="login-button" disabled={isLoading}>
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  )
}
