import { useRef, useState } from "react"
import { Header } from "../widgets/Header"

export default function ProfilePage() {
  // Контактная информация
  const [contactFields, setContactFields] = useState({
    fio: '',
    phone: '',
    email: '',
    address: '',
    payment: '',
    card: '',
    bonuses: '',
  });
  // Личный кабинет питомца
  const [petName, setPetName] = useState("");
  const [petFields, setPetFields] = useState({
    type: '',
    breed: '',
    birth: '',
    weight: '',
    height: '',
    features: '',
    diseases: '',
  });
  const spanRef = useRef<HTMLSpanElement>(null);
  const minWidth = 7 * 10 + 20;
  const maxWidth = 15 * 10 + 20;
  const [inputWidth, setInputWidth] = useState(minWidth);

  const handlePetNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPetName(value);
    let width = minWidth;
    if (value.length <= 7) {
      width = minWidth;
    } else if (value.length > 7 && value.length <= 15) {
      width = minWidth + (value.length - 7) * 10;
    } else if (value.length > 15) {
      width = maxWidth;
    }
    setInputWidth(width);
  };

  // Проверка заполненности хотя бы одного поля
  const isContactFilled = Object.values(contactFields).some(v => v.trim() !== '');
  const isPetFilled = petName.trim() !== '' || Object.values(petFields).some(v => v.trim() !== '');

  return (
    <div className="bg-milk min-h-screen p-4">
      <Header />
      {/* Контактная информация */}
      <h1 className="text-2xl font-heading font-bold mb-3 text-darkRed">
        Контактная информация
      </h1>
      <div className="bg-white border border-primary rounded-3xl p-4 mb-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center mb-1">
            <label className="text-primary font-semibold whitespace-nowrap mr-2">ФИО:</label>
            <input className="border border-primary rounded-full p-2 flex-1 min-w-0" placeholder="Введите ФИО" value={contactFields.fio} onChange={e => setContactFields(f => ({...f, fio: e.target.value}))} />
          </div>
          <div className="flex items-center mb-1">
            <label className="text-primary font-semibold whitespace-nowrap mr-2">Телефон:</label>
            <input className="border border-primary rounded-full p-2 flex-1 min-w-0" placeholder="Введите телефон" value={contactFields.phone} onChange={e => setContactFields(f => ({...f, phone: e.target.value}))} />
          </div>
          <div className="flex items-center mb-1">
            <label className="text-primary font-semibold whitespace-nowrap mr-2">Почта:</label>
            <input className="border border-primary rounded-full p-2 flex-1 min-w-0" placeholder="Введите почту" value={contactFields.email} onChange={e => setContactFields(f => ({...f, email: e.target.value}))} />
          </div>
          <div className="flex items-center mb-1">
            <label className="text-primary font-semibold whitespace-nowrap mr-2">Адрес доставки:</label>
            <input className="border border-primary rounded-full p-2 flex-1 min-w-0" placeholder="Введите адрес" value={contactFields.address} onChange={e => setContactFields(f => ({...f, address: e.target.value}))} />
          </div>
          <div className="flex items-center mb-1">
            <label className="text-primary font-semibold whitespace-nowrap mr-2">Способ оплаты:</label>
            <input className="border border-primary rounded-full p-2 flex-1 min-w-0" placeholder="Введите способ оплаты" value={contactFields.payment} onChange={e => setContactFields(f => ({...f, payment: e.target.value}))} />
          </div>
          <div className="flex items-center mb-1">
            <label className="text-primary font-semibold whitespace-nowrap mr-2">Номер бонусной карты:</label>
            <input className="border border-primary rounded-full p-2 flex-1 min-w-0" placeholder="Номер карты" value={contactFields.card} onChange={e => setContactFields(f => ({...f, card: e.target.value}))} />
          </div>
          <div className="flex items-center mb-1">
            <label className="text-primary font-semibold whitespace-nowrap mr-2">Бонусы:</label>
            <span className="text-dark font-semibold">0 баллов</span>
          </div>
        </div>
      </div>
      <button
        className={`w-full py-2 rounded-3xl font-semibold text-lg border-2 transition-colors duration-150 mb-6 ${isContactFilled ? 'border-primary text-primary bg-white hover:bg-primary hover:text-white cursor-pointer' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
        type="button"
        disabled={!isContactFilled}
      >
        Сохранить
      </button>
      {/* Личный кабинет питомца */}
      <div className="flex items-center mb-3">
        <div className="flex flex-col items-center mr-4">
          <div className="w-16 h-16 rounded-xl bg-primary/20 border-2 border-primary flex items-center justify-center overflow-hidden text-4xl">
            🐕
          </div>
          <div className="relative w-full flex justify-center">
            <input
              className="text-dark text-center mt-1 font-heading border-none outline-none bg-transparent"
              style={{ fontSize: 14, width: inputWidth, transition: 'width 0.2s' }}
              placeholder="Кличка ✍🏻"
              value={petName}
              onChange={handlePetNameChange}
              maxLength={15}
            />
            <span
              ref={spanRef}
              style={{
                position: 'absolute',
                visibility: 'hidden',
                height: 0,
                fontSize: 14,
                fontFamily: 'inherit',
                fontWeight: 'inherit',
                whiteSpace: 'pre',
                padding: 0,
                margin: 0,
              }}
            >
              {petName || "Кличка ✍🏻"}
            </span>
          </div>
        </div>
        <h2 className="text-xl font-heading font-bold text-darkRed mb-5" >
          Личный кабинет питомца
        </h2>
      </div>
      <div className="bg-white border  border-primary rounded-3xl p-4 mb-4">
        <div className="text-lg font-body font-bold text-primary mb-3">
          Основная информация
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center mb-1">
            <label className="text-primary font-semibold whitespace-nowrap mr-2">Вид животного:</label>
            <input className="border border-primary rounded-full p-2 flex-1 min-w-0" placeholder="Кошка, собака и т.д." value={petFields.type} onChange={e => setPetFields(f => ({...f, type: e.target.value}))} />
          </div>
          <div className="flex items-center mb-1">
            <label className="text-primary font-semibold whitespace-nowrap mr-2">Порода:</label>
            <input className="border border-primary rounded-full p-2 flex-1 min-w-0" placeholder="Порода" value={petFields.breed} onChange={e => setPetFields(f => ({...f, breed: e.target.value}))} />
          </div>
          <div className="flex items-center mb-1">
            <label className="text-primary font-semibold whitespace-nowrap mr-2">Дата рождения:</label>
            <input className="border border-primary rounded-full p-2 flex-1 min-w-0" placeholder="ДД.ММ.ГГГГ" value={petFields.birth} onChange={e => setPetFields(f => ({...f, birth: e.target.value}))} />
          </div>
          <div className="flex items-center mb-1">
            <label className="text-primary font-semibold whitespace-nowrap mr-2">Вес:</label>
            <input className="border border-primary rounded-full p-2 flex-1 min-w-0" placeholder="Вес" value={petFields.weight} onChange={e => setPetFields(f => ({...f, weight: e.target.value}))} />
          </div>
          <div className="flex items-center mb-1">
            <label className="text-primary font-semibold whitespace-nowrap mr-2">Рост:</label>
            <input className="border border-primary rounded-full p-2 flex-1 min-w-0" placeholder="Рост" value={petFields.height} onChange={e => setPetFields(f => ({...f, height: e.target.value}))} />
          </div>
          <div className="flex items-center mb-1">
            <label className="text-primary font-semibold whitespace-nowrap mr-2">Особенности:</label>
            <input className="border border-primary rounded-full p-2 flex-1 min-w-0" placeholder="Особенности" value={petFields.features} onChange={e => setPetFields(f => ({...f, features: e.target.value}))} />
          </div>
          <div className="flex items-center mb-1">
            <label className="text-primary font-semibold whitespace-nowrap mr-2">Заболевания:</label>
            <input className="border border-primary rounded-full p-2 flex-1 min-w-0" placeholder="Заболевания" value={petFields.diseases} onChange={e => setPetFields(f => ({...f, diseases: e.target.value}))} />
          </div>
        </div>
      </div>
      <button
        className={`w-full py-2 rounded-3xl font-semibold text-lg border-2 transition-colors duration-150 mb-2 ${isPetFilled ? 'border-primary text-primary bg-white hover:bg-primary hover:text-white cursor-pointer' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
        type="button"
        disabled={true}
      >
        Сохранить
      </button>
    </div>
  )
}
