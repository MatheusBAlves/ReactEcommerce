import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import { BrowserRouter } from 'react-router-dom'
import { MainRoutes } from './routes.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Contact from './components/Contact/Contact.jsx'
import { CartProvider } from './context/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter >
      <CartProvider>
        <Navbar />
        <main>
          <MainRoutes />
        </main>
        <Contact />
        <Footer />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
