import { StrictMode } from 'react'
import { createRoot} from 'react-dom/client' 
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import { TokenContextProvider } from './components/TokenContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TokenContextProvider>
      <BrowserRouter >
        <App />
      </BrowserRouter>
    </TokenContextProvider>
  </StrictMode>,
)
