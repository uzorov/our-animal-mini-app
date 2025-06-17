import { useContext } from "react"
import { CartContext } from "../app/CartContext"
import { ProductCard } from "../widgets/ProductCard"
import { Header } from "../widgets/Header"
import { useNavigate } from "react-router-dom"

export default function CartPage() {
    const { cart, removeFromCart } = useContext(CartContext)
    return (
        <div className="min-h-screen bg-milk p-4">
            <Header />
            <h1 className="text-xl font-bold mb-4 text-primary">Корзина</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {cart.length === 0 && (
                    <div className="text-gray-500">Корзина пуста</div>
                )}
                {cart.map((item) => (
                    <div key={item.id} className="relative flex items-center gap-4">
                        <ProductCard {...item} />
                        <div className="flex flex-col items-center justify-center gap-2 h-full">
                            <button
                                className="border border-primary text-primary rounded-full px-4 py-1 font-semibold text-sm mb-1 bg-white"
                                style={{ minWidth: 90 }}
                                disabled
                            >
                                Магазин: {item.shop}
                            </button>
                            <div className="flex flex-row gap-2 w-full">
                                <button
                                    className="border border-primary text-primary rounded-full px-4 py-1 font-semibold text-sm bg-white"
                                    style={{ minWidth: 90 }}
                                    disabled
                                >
                                    Цена: {item.price} ₽
                                </button>
                                <button
                                    className="bg-primary text-white rounded-full px-5 py-2 font-semibold text-sm shadow disabled:opacity-60"
                                    disabled
                                >
                                    Купить
                                </button>
                            </div>
                        </div>
                        <div className="absolute right-2 top-2 flex flex-col items-end gap-2">
                            <span className="bg-primary text-white rounded-full px-2 py-1 text-xs font-bold">
                                {item.quantity}
                            </span>
                            <button
                                className="bg-darkRed text-white rounded-full w-7 h-7 flex items-center justify-center shadow hover:bg-red-800"
                                onClick={() => removeFromCart(item.id)}
                                title="Удалить из корзины"
                            >
                                ×
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <button
                className="w-full py-3 bg-gray-300 text-gray-600 font-semibold rounded-xl cursor-not-allowed"
                disabled
            >
                Оформить заказ
            </button>
        </div>
    )
}
