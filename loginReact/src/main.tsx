import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.styles'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
