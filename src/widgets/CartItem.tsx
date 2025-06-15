type CartItemProps = {
  item: {
    id: number
    name: string
    store: string
    price: number
  }
}

export const CartItem = ({ item }: CartItemProps) => {
  return (
    <div className="p-4 bg-white rounded-xl shadow-sm border">
      <h2 className="font-semibold text-base mb-1">{item.name}</h2>
      <p className="text-sm text-gray-600 mb-2">Магазин: {item.store}</p>
      <div className="flex justify-between items-center">
        <span className="font-bold text-lg text-primary">{item.price} ₽</span>
        <button className="px-4 py-2 bg-primary text-white rounded-xl text-sm hover:opacity-90">
          Купить
        </button>
      </div>
    </div>
  )
}
