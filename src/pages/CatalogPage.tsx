import { useState } from "react"
import { ProductCard } from "../widgets/ProductCard"
import { productsMock } from "../services/mockProducts"
import { Header } from "../widgets/Header"
import CatalogSearchBar from "../widgets/CatalogSearchBar"

const categories = [
  { key: "лекарства", label: "Лекарства" },
  { key: "корма", label: "Корма" },
  { key: "игрушки и одежда", label: "Игрушки и одежда" },
]

export default function CatalogPage() {
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState<string | null>(null)

  // Фильтрация и сортировка
  let filteredProducts = productsMock.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  )
  if (filter === "priceAsc") {
    filteredProducts = [...filteredProducts].sort((a, b) => Number(a.price ?? 0) - Number(b.price ?? 0));
  } else if (filter === "priceDesc") {
    filteredProducts = [...filteredProducts].sort((a, b) => Number(b.price ?? 0) - Number(a.price ?? 0));
  }

  // Группируем продукты по категориям
  const productsByCategory: Record<string, typeof productsMock> = {}
  categories.forEach((cat) => {
    productsByCategory[cat.key] = filteredProducts.filter((p) => p.category === cat.key)
  })
  // Прочее — всё, что не попало в основные категории
  const otherProducts = filteredProducts.filter((p) => !categories.some((cat) => cat.key === p.category))

  return (
    <div className="min-h-screen bg-milk p-2">
      <Header />
      <CatalogSearchBar
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />
      <div className="flex flex-col gap-6">
        {categories.map(
          (cat) =>
            productsByCategory[cat.key].length > 0 && (
              <div key={cat.key}>
                <div className="text-darkRed text-lg mb-1 ml-1" style={{fontFamily: 'Bowler, \'Matrix Normal\', serif'}}>{cat.label}</div>
                <div className="overflow-x-auto" style={{ height: 170 }}>
                  <div className="flex gap-3 pb-2" style={{ height: '100%', alignItems: 'stretch' }}>
                    {productsByCategory[cat.key].map((product) => (
                      <ProductCard key={product.id} {...product} price={Number(product.price)} />
                    ))}
                  </div>
                </div>
              </div>
            )
        )}
        {otherProducts.length > 0 && (
          <div>
            <div className="text-darkRed text-lg mb-2 ml-1" style={{fontFamily: 'Bowler, \'Matrix Normal\', serif'}}>Прочее</div>
            <div className="overflow-x-auto" style={{ height: 170 }}>
              <div className="flex gap-3 pb-2" style={{ height: '100%', alignItems: 'stretch' }}>
                {otherProducts.map((product) => (
                  <ProductCard key={product.id} {...product} price={Number(product.price)} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
