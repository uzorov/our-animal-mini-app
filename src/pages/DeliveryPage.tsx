import { useState } from "react"
import { Header } from "../widgets/Header"
import { Calendar } from "../widgets/Calendar"

export default function DeliveryPage() {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)

    return (
        <div className="min-h-screen bg-milk p-4">
            <Header />

            <h1 className="text-xl text-darkRed font-bold mb-4">Доставка</h1>

            <section className="mb-6"><h2 className="text-md font-semibold mb-2 text-darkRed" style={{fontFamily: 'Tahoma, Geneva, Verdana, sans-serif'}}>Отметь дни доставки:</h2>
                
                <Calendar selectedDate={selectedDate} onSelectDate={setSelectedDate} />
            </section>

            <section className="mb-6">
                <button
                    className={`w-full py-2 rounded-3xl font-semibold text-lg border-2 transition-colors duration-150 mb-2 ${selectedDate ? 'border-primary text-primary bg-white hover:bg-primary hover:text-white cursor-pointer' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
                    disabled={!selectedDate}
                >
                    Оформить регулярную доставку
                </button>
                <p className="text-sm text-darkRed font-semibold px-6">
                    Регулярная доставка - это способ любить Вашего питомца, доверив нам Ваши рутинные задачи: купить корм, лакомства, заказать лекарства, личные средства гигиены.
                </p>
            </section>

            <section className="text-sm">
                <span className="block text-darkRed font-extrabold uppercase px-6">
                    Мы доставляем из любого магазина от 40 минут в удобное Вам время.
                </span>
            </section>
        </div>
    )
}
