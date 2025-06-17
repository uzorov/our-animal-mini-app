import { createContext, useState } from "react";

export interface CartProduct {
    id: string;
    name: string;
    image: string;
    price?: number | null;
    shop: string;
    offers: any[];
    quantity: number;
}

export interface CartContextType {
    cart: CartProduct[];
    addToCart: (product: CartProduct) => void;
    removeFromCart: (id: string) => void;
}

export const CartContext = createContext<CartContextType>({
    cart: [],
    addToCart: () => { },
    removeFromCart: () => { },
});

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<CartProduct[]>([]);

    const addToCart = (product: CartProduct) => {
        setCart((prev) => {
            const existing = prev.find((p) => p.id === product.id);
            if (existing) {
                return prev.map((p) =>
                    p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (id: string) => {
        setCart((prev) => prev.filter((p) => p.id !== id));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
}
