import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppRouter from './app/Router'
import { CartProvider } from './app/CartContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartProvider>
      <AppRouter />
    </CartProvider>
  </React.StrictMode>,
)
