import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import AppRoutes from './routes/AppRoutes.jsx'
import MainLayout from './Layouts/MainLayout.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter >
         {/* <App /> */}
         <AppRoutes></AppRoutes>
    </BrowserRouter>
    
  </StrictMode>,
)
