import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CategoryProvider, DateProvider, FilterProvider, AuthProvider, WishlistProvider } from './context/index.js'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CategoryProvider>
        <DateProvider>
          <FilterProvider>
            <AuthProvider>
              <WishlistProvider>
                <App />
              </WishlistProvider>
            </AuthProvider>
          </FilterProvider>
        </DateProvider>
      </CategoryProvider>
    </BrowserRouter>
  </StrictMode>,
)
