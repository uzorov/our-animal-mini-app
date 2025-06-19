import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppRouter from './app/Router'
import { CartProvider } from './app/CartContext'

// Telegram WebApp API интеграция
if (typeof window !== 'undefined' && (window as any).Telegram?.WebApp) {
  (window as any).Telegram.WebApp.ready();
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartProvider>
      <AppRouter />
    </CartProvider>
  </React.StrictMode>,
)
