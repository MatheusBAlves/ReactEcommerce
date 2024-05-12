import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import { BrowserRouter } from 'react-router-dom'
import { MainRoutes } from './routes.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter >
      <Navbar />
      <main>
        <MainRoutes />
      </main>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
