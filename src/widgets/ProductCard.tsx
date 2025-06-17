import { useState, useContext } from "react";
import { CartContext } from "../app/CartContext";

interface Offer {
    id: string
    shop: string
    price: number
    category: string
    name: string
    image: string
}

interface ProductCardProps {
    id: string
    name: string
    image: string
    price?: number | null
    shop: string
    offers: Offer[]
}

export const ProductCard = ({ name, image, price, shop, offers, id }: ProductCardProps) => {
    const [open, setOpen] = useState(false);
    const { addToCart } = useContext(CartContext);

    // Преобразуем price к числу, если это строка
    let numericPrice: number | null = null;
    if (typeof price === 'string') {
        numericPrice = Number((price as string).replace(/[^\d.]/g, ''));
    } else if (typeof price === 'number') {
        numericPrice = price;
    }

    return (
        <div
            className="bg-white border border-primary flex-shrink-0 rounded-xl shadow"
            style={{ width: 180, minWidth: 180, maxWidth: 200, height: 160, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', padding: 0 }}
            onClick={() => setOpen(true)}
        >
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', padding: 2 }}>
                <img src={image} alt={name} style={{ width: 100, height: 100, borderRadius: 10, objectFit: 'cover', margin: 0 }} />
                <div style={{ width: 80, height: 80, marginRight: 5, marginTop: 5, display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end' }}>
                    <span className="text-darkRed font-bold text-lg" style={{ fontSize: 16, lineHeight: '80px', textAlign: 'right', width: '100%' }}>{numericPrice != null ? `${numericPrice} ₽` : ''}</span>
                </div>
            </div>
            <div className="text-darkRed font-semibold w-full text-center" style={{ fontSize: 18, marginTop: 15 }}>
                {shop}
            </div>


            {open && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50" onClick={() => setOpen(false)}>
                    <div className="bg-white rounded-xl p-4 w-[95vw] max-w-md relative" onClick={e => e.stopPropagation()}>
                        <div className="flex flex-row gap-3 mb-2">
                            <img src={image} alt={name} style={{ width: 100, height: 100, borderRadius: 10, objectFit: 'cover' }} />
                            <div className="flex-1 flex flex-col items-start">
                                <div className="text-primary font-bold text-lg mb-1">{name}</div>
                                <div className="text-darkRed font-bold text-xl mb-2">{price} ₽</div>
                                <div className="flex gap-2">
                                    <button className="bg-gray-300 text-gray-500 font-semibold rounded-xl px-3 py-1 cursor-not-allowed" disabled>Купить сейчас</button>
                                    <button className="bg-darkRed text-white font-semibold rounded-xl px-3 py-1" onClick={() => { addToCart({ id, name, image, price, shop, offers, quantity: 1 }); setOpen(false); }}>В корзину</button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2">
                            <div className="font-semibold mb-1">Цены в других магазинах:</div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2" style={{ borderRadius: 8 }}>
                                {offers.map((offer, idx) => (
                                    <div key={offer.id || idx} className="bg-white border border-primary rounded-xl shadow p-2 flex items-center gap-2">
                                        <img src={offer.image} alt={offer.name} style={{ width: 50, height: 50, borderRadius: 8, objectFit: 'cover' }} />
                                        <div className="flex-1">
                                            <div className="text-primary font-semibold text-sm truncate" style={{ maxWidth: 80 }}>
                                                {offer.name}
                                            </div>
                                            <div className="text-darkRed font-bold text-base">{offer.price} ₽</div>
                                            <div className="text-xs text-gray-600">{offer.shop}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button onClick={() => setOpen(false)} className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-xl">×</button>
                    </div>
                </div>
            )}
        </div>
    )
}
