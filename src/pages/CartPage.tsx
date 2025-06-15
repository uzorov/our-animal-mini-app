import { Header } from "../widgets/Header"
import { CartItem } from "../widgets/CartItem"

const mockItems = [
  {
    id: 1,
    name: "Корм Grandorf для собак 3кг",
    store: "Зоооптторг.рф",
    price: 1990,
  },
  {
    id: 2,
    name: "Игрушка для кошек с перьями",
    store: "Бетховен",
    price: 420,
  },
]

export default function CartPage() {
  return (
    <div className="min-h-screen bg-milk p-4">
      <Header />

      <h1 className="text-xl font-bold mb-4 text-primary">Корзина</h1>

      <div className="space-y-4 mb-6">
        {mockItems.map((item) => (
          <CartItem key={item.id} item={item} />
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
