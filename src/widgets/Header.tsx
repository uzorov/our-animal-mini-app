import { useState } from "react"
import { Link } from "react-router-dom"

import MenuButton from "../shared/MenuButton"
import Logo from "../shared/Logo"


export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className="relative px-1 sm:px-4 py-5 mb-0 flex flex-col gap-2">
            {/* Верхняя строка: кнопка меню + логотип */}
            <div className="flex justify-between items-end h-12">
                <button onClick={() => setMenuOpen(!menuOpen)} className="self-end">
                    <MenuButton />
                </button>
                <div className="flex flex-col justify-end h-full">
                    <Logo />
                </div>
            </div>

            {/* Поисковая строка с фильтрами и корзиной */}


            {menuOpen && (
                <div className="absolute top-12 left-4 z-50 bg-white rounded-lg shadow-lg p-3 w-48">
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link to="/profile" onClick={() => setMenuOpen(false)} className="block hover:text-primary">
                                Я и мой питомец
                            </Link>
                        </li>
                        <li>
                            <Link to="/" onClick={() => setMenuOpen(false)} className="block hover:text-primary">
                                Каталог
                            </Link>
                        </li>
                        <li>
                            <Link to="/cart" onClick={() => setMenuOpen(false)} className="block hover:text-primary">
                                Корзина
                            </Link>
                        </li>
                        <li>
                            <Link to="/delivery" onClick={() => setMenuOpen(false)} className="block hover:text-primary">
                                Доставка
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}
