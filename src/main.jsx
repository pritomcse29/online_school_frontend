import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import AppRoutes from './routes/AppRoutes.jsx'
import MainLayout from './Layouts/MainLayout.jsx'
import { AuthProvider } from './components/context/AuthContext.jsx'
import { EnrollmentProvider } from './components/context/EnrollmentContext.jsx'
import { OrderProvider } from './components/context/OrderContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
       <EnrollmentProvider>
        <OrderProvider>
    <BrowserRouter >
         
         {/* <App /> */}
         <AppRoutes></AppRoutes>
         
    </BrowserRouter>
    </OrderProvider>
    </EnrollmentProvider>

    </AuthProvider>
  </StrictMode>,
)
