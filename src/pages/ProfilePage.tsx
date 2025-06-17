import { Header } from "../widgets/Header"

export default function ProfilePage() {
  return (
    <div className="bg-milk min-h-screen p-4">
      <Header />

      {/* Контактная информация */}
      <h1 className="text-2xl font-heading font-bold mb-3 text-darkRed">
        Контактная информация
      </h1>
      <div className="bg-white border border-primary rounded-3xl p-4 mb-6">
        <div className="flex flex-col gap-2">
          {/*
            { label: "ФИО", placeholder: "Введите ФИО" },
            { label: "Телефон", placeholder: "Введите телефон" },
            { label: "Почта", placeholder: "Введите почту" },
            { label: "Адрес доставки", placeholder: "Введите адрес" },
            { label: "Способ оплаты", placeholder: "Введите способ оплаты" },
            { label: "Номер бонусной карты", placeholder: "Введите номер карты" },
            { label: "Бонусы", placeholder: "Бонусы" },
          */}
          {["ФИО", "Телефон", "Почта", "Адрес доставки", "Способ оплаты"].map((label, idx) => (
            <div key={idx} className="flex items-center mb-1">
              <label className="text-primary font-semibold whitespace-nowrap mr-2">{label}:</label>
              <input className="border border-primary rounded-full p-2 flex-1 min-w-0" placeholder={label === "Почта" ? "Введите почту" : `Введите ${label.toLowerCase()}`} />
            </div>
          ))}
          {["Номер бонусной карты", "Бонусы"].map((label, idx) => (
            <div key={idx} className="flex items-center mb-1">
              <label className="text-primary font-semibold whitespace-nowrap mr-2">{label}:</label>
              <input className="border border-primary rounded-full p-2 flex-1 min-w-0" placeholder={label === "Номер бонусной карты" ? "Номер карты" : "Бонусы"} />
            </div>
          ))}
        </div>
      </div>

      {/* Личный кабинет питомца */}
      <div className="flex items-center mb-3">
        <div className="flex flex-col items-center mr-4">
          <div className="w-16 h-16 rounded-xl bg-primary/20 border-2 border-primary flex items-center justify-center overflow-hidden text-4xl">
            🐕
          </div>
          <div className="text-primary text-sm text-center mt-1">Кличка</div>
        </div>
        <h2 className="text-xl font-heading font-bold text-darkRed mb-1">
          Личный кабинет питомца
        </h2>
      </div>

      <div className="bg-white border border-primary rounded-3xl p-4">
        <div className="text-lg font-heading font-bold text-primary mb-3">
          Основная информация
        </div>
        <div className="flex flex-col gap-2">
          {/*
            { label: "Вид животного", placeholder: "Кошка, собака и т.д." },
            { label: "Порода", placeholder: "Порода" },
            { label: "Дата рождения", placeholder: "ДД.ММ.ГГГГ" },
            { label: "Вес", placeholder: "Вес" },
            { label: "Рост", placeholder: "Рост" },
            { label: "Особенности", placeholder: "Особенности" },
            { label: "Заболевания", placeholder: "Заболевания" },
          */}
          {["Вид животного", "Порода", "Дата рождения", "Вес", "Рост", "Особенности", "Заболевания"].map((label, idx) => (
            <div key={idx} className="flex items-center mb-1">
              <label className="text-primary font-semibold whitespace-nowrap mr-2">{label}:</label>
              <input className="border border-primary rounded-full p-2 flex-1 min-w-0" placeholder={label === "Дата рождения" ? "ДД.ММ.ГГГГ" : label} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
