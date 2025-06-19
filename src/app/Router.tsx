import { BrowserRouter, Route, Routes } from "react-router-dom"
import CatalogPage from "../pages/CatalogPage"
import ProfilePage from "../pages/ProfilePage"
import CartPage from "../pages/CartPage"
import DeliveryPage from "../pages/DeliveryPage"

export default function AppRouter() {
  return (
    <BrowserRouter basename="/our-animal-mini-app">
      <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/delivery" element={<DeliveryPage />} />
      </Routes>
    </BrowserRouter>
  )
}
