import { useState } from "react";

const FilterOptions = [
    { id: "popularity", label: "По популярности" },
    { id: "priceAsc", label: "Цена по возрастанию" },
    { id: "priceDesc", label: "Цена по убыванию" },
    { id: "rating", label: "По рейтингу" },
];

const CatalogSearchBar = ({ cartCount }: { cartCount: number }) => {
    const [filterOpen, setFilterOpen] = useState(false);

    return (
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "0 8px" }}>
            <div style={{ position: "relative", flexGrow: 1 }}>
                <span
                    style={{
                        position: "absolute",
                        left: 10,
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: "#1D5D31",
                        pointerEvents: "none",
                        fontSize: 18,
                    }}
                >
                    {/* SVG лупы */}
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="9" cy="9" r="7" stroke="#1D5D31" strokeWidth="3.2" />
                        <line
                            x1="14.4142"
                            y1="14"
                            x2="18"
                            y2="17.5858"
                            stroke="#1D5D31"
                            strokeWidth="3.2"
                            strokeLinecap="round"
                        />
                    </svg>
                </span>
                <input
                    type="search"
                    placeholder="Поиск по товарам"
                    style={{
                        width: "100%",
                        padding: "8px 8px 8px 34px",
                        borderRadius: 9999,
                        fontFamily: "Tahoma",
                        backgroundColor: "transparent",
                        border: "2px solid #1D5D31",
                        color: "#000",
                        fontWeight: 500,
                    }}
                />
            </div>

            <button
                className="cart-btn"
                style={{
                    position: "relative",
                    minWidth: 44,
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    backgroundColor: "transparent",
                    border: "2px solid #1D5D31",
                    color: "#1D5D31",
                    fontWeight: "bold",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 24,
                }}
                aria-label="Корзина"
            >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M3 8L5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2l2-12H3zm5 0V6a4 4 0 1 1 8 0v2" stroke="#1D5D31" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
                {cartCount > 0 && (
                    <span
                        style={{
                            position: "absolute",
                            top: 2,
                            right: 2,
                            backgroundColor: "#7E0D0D",
                            borderRadius: "50%",
                            color: "white",
                            fontSize: 12,
                            width: 18,
                            height: 18,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontWeight: "bold",
                        }}
                    >
                        {cartCount}
                    </span>
                )}
            </button>

            <div style={{ position: "relative" }}>
                <button
                    onClick={() => setFilterOpen(!filterOpen)}
                    style={{
                        padding: "8px 16px",
                        borderRadius: 9999,
                        border: "2px solid #1D5D31",
                        backgroundColor: "transparent",
                        color: "#000",
                        cursor: "pointer",
                        fontFamily: "Tahoma, Geneva, Verdana, sans-serif",
                        fontWeight: 500,
                        letterSpacing: 1,
                        minWidth: 80,
                        maxWidth: 120,
                    }}
                    className="tahoma-font"
                >
                    ФИЛЬТРЫ
                </button>
                {filterOpen && (
                    <ul
                        style={{
                            position: "absolute",
                            top: "calc(100% + 4px)",
                            right: 0,
                            backgroundColor: "#DFE7DC",
                            borderRadius: 10,
                            padding: 8,
                            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                            listStyle: "none",
                            margin: 0,
                            fontFamily: "Tahoma, Geneva, Verdana, sans-serif",
                            zIndex: 100,
                            width: 180,
                        }}
                    >
                        {FilterOptions.map((opt) => (
                            <li
                                key={opt.id}
                                style={{
                                    padding: "6px 10px",
                                    cursor: "pointer",
                                    borderRadius: 4,
                                }}
                                onClick={() => {
                                    // TODO: применить сортировку
                                    setFilterOpen(false);
                                }}
                            >
                                {opt.label}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default CatalogSearchBar;
