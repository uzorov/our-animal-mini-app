import { useContext } from "react"
import { CartContext } from "../app/CartContext"
import { ProductCard } from "../widgets/ProductCard"
import { Header } from "../widgets/Header"

export default function CartPage() {
    const { cart, removeFromCart } = useContext(CartContext)
    return (
        <div className="min-h-screen bg-milk p-4">
            <Header />
            <h1 className="text-xl font-bold mb-4 text-darkRed">Корзина</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {cart.length === 0 && (
                    <div className="text-gray-500">Корзина пуста</div>
                )}
                {cart.map((item) => (
                    <div key={item.id} className="relative flex items-center gap-4">
                        <div className="relative">
                            <ProductCard {...item} />
                            <div className="absolute top-0 right-0 flex flex-row items-center gap-1 z-10">
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
                                    
                                >
                                    Купить
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button
                className={`w-full py-2 rounded-3xl font-semibold text-lg border-2 transition-colors duration-150 ${cart.length > 0 ? 'border-primary text-primary bg-white hover:bg-primary hover:text-white cursor-pointer' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
                disabled={cart.length === 0}
            >
                Оформить заказ
            </button>
        </div>
    )
}
