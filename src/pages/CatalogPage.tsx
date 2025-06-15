import { useState } from "react"
import { ProductCard } from "../widgets/ProductCard"
import { productsMock } from "../services/mockProducts"
import { Header } from "../widgets/Header"

const categories = [
  { key: "лекарства", label: "Лекарства" },
  { key: "корма", label: "Корма" },
  { key: "игрушки и одежда", label: "Игрушки и одежда" },
]

export default function CatalogPage() {
  const [search] = useState("")
  const [category, setCategory] = useState("all")

  const filteredProducts = productsMock.filter((product) => {
    const matchesCategory = category === "all" || product.category === category
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Группируем продукты по категориям
  const productsByCategory: Record<string, typeof productsMock> = {}
  categories.forEach((cat) => {
    productsByCategory[cat.key] = productsMock.filter((p) => p.category === cat.key)
  })
  // Прочее — всё, что не попало в основные категории
  const otherProducts = productsMock.filter((p) => !categories.some((cat) => cat.key === p.category))

  return (
    <div className="min-h-screen bg-milk p-2">
      <Header />
      <div className="flex flex-col gap-6">
        {categories.map(
          (cat) =>
            productsByCategory[cat.key].length > 0 && (
              <div key={cat.key}>
                <div className="text-darkRed font-bold text-lg mb-2 ml-1">{cat.label}</div>
                <div className="overflow-x-auto" style={{ height: 200 }}>
                  <div className="flex gap-3 pb-2" style={{ height: '100%', alignItems: 'stretch' }}>
                    {productsByCategory[cat.key].map((product) => (
                      <ProductCard key={product.id} {...product} />
                    ))}
                  </div>
                </div>
              </div>
            )
        )}
        {otherProducts.length > 0 && (
          <div>
            <div className="text-darkRed font-bold text-lg mb-2 ml-1">Прочее</div>
            <div className="overflow-x-auto" style={{ height: 260 }}>
              <div className="flex gap-3 pb-2" style={{ height: '100%', alignItems: 'stretch' }}>
                {otherProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
