import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CategoryProvider, DateProvider } from './context/index.js'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CategoryProvider>
        <DateProvider>
          <App />
        </DateProvider>
      </CategoryProvider>
    </BrowserRouter>
  </StrictMode>,
)
