import { useState } from "react"
import { Header } from "../widgets/Header"
import { Calendar } from "../widgets/Calendar"

export default function DeliveryPage() {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)

    return (
        <div className="min-h-screen bg-milk p-4">
            <Header />

            <h1 className="text-xl font-bold text-primary mb-4">Доставка</h1>

            <section className="mb-6">
                <h2 className="text-md font-semibold mb-2">Выберите дату доставки:</h2>
                <Calendar selectedDate={selectedDate} onSelectDate={setSelectedDate} />
            </section>

            <section className="mb-6">
                <button
                    className="w-full py-3 bg-gray-300 text-gray-600 font-semibold rounded-xl cursor-not-allowed mb-2"
                    disabled
                >
                    Оформить регулярную доставку
                </button>
                <p className="text-sm text-gray-700">
                    Регулярная доставка - это способ любить Вашего питомца, доверив нам Ваши рутинные задачи: купить корм, лакомства, заказать лекарства, личные средства гигиены.
                </p>
            </section>

            <section className="text-sm text-gray-700">
                Мы доставляем из любого магазина от 40 минут в удобное Вам время.
            </section>
        </div>
    )
}
