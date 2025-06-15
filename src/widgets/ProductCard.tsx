import { useState } from "react"

interface Offer {
    shop: string
    price: number
}

interface ProductCardProps {
    id: string
    name: string
    image: string
    price: number
    shop: string
    offers: Offer[]
}

export const ProductCard = ({ name, image, price, shop, offers }: ProductCardProps) => {
    const [open, setOpen] = useState(false)

    return (
        <div
            className="bg-white border border-primary flex-shrink-0 rounded-xl shadow"
            style={{ width: 180, minWidth: 180, maxWidth: 200, height: 180, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', padding: 0 }}
            onClick={() => setOpen(true)}
        >
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', padding: 0 }}>
                <img src={image} alt={name} style={{ width: 100, height: 100, borderRadius: 10, objectFit: 'cover', margin: 5 }} />
                <div style={{ width: 80, height: 80, marginLeft: 5, marginTop: 5, display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end' }}>
                    <span className="text-darkRed font-bold text-lg" style={{ fontSize: 18, lineHeight: '80px', textAlign: 'right', width: '100%' }}>{price} ₽</span>
                </div>
            </div>
                        <div className="text-darkRed font-semibold w-full text-center" style={{ fontSize: 18, marginTop: 5 }}>
                {shop}
            </div>


            {open && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50" onClick={() => setOpen(false)}>
                    <div className="bg-white rounded-xl p-4 w-[90%] max-w-sm" onClick={(e) => e.stopPropagation()}>
                        <h3 className="text-lg font-semibold mb-2">{name}</h3>
                        <ul className="space-y-1">
                            {offers.map((offer, index) => (
                                <li key={index} className="flex justify-between">
                                    <span>{offer.shop}</span>
                                    <span className="font-bold">{offer.price} ₽</span>
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={() => setOpen(false)}
                            className="mt-4 w-full bg-primary text-white py-2 rounded-lg"
                        >
                            Закрыть
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
