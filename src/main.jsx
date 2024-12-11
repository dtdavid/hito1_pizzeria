import { StrictMode } from 'react'
import { createRoot, ReactDom } from 'react-dom/client' 
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/hito1_pizzeria">
    <App />
    </BrowserRouter>
  </StrictMode>,
)
