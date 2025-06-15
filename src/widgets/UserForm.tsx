import { useState } from "react"

export const UserForm = () => {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    payment: "",
    bonusCard: "1234 5678 9012",
    bonusAmount: 148, // 2% от условной суммы
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <div className="grid gap-3">
      <input name="fullName" value={form.fullName} onChange={handleChange} placeholder="ФИО" className="input" />
      <input name="phone" value={form.phone} onChange={handleChange} placeholder="Телефон" className="input" />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Почта" className="input" />
      <input name="address" value={form.address} onChange={handleChange} placeholder="Адрес доставки" className="input" />
      <input name="payment" value={form.payment} onChange={handleChange} placeholder="Способ оплаты" className="input" />

      <div className="text-sm text-gray-600 mt-2">
        <p>Бонусная карта: <strong>{form.bonusCard}</strong></p>
        <p>Накоплено бонусов: <strong>{form.bonusAmount} ₽</strong></p>
      </div>
    </div>
  )
}
