import { useState } from "react"
import clsx from "clsx"

const MONTHS = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
]

type CalendarProps = {
  selectedDate: Date | null
  onSelectDate: (date: Date) => void
}

export const Calendar = ({ selectedDate, onSelectDate }: CalendarProps) => {
  const today = new Date()
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [currentYear, setCurrentYear] = useState(today.getFullYear())

  // Получить количество дней в месяце
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate()
  }

  // День недели первого числа месяца (0 - воскресенье, 1 - понедельник ...)
  const getFirstDayOfWeek = (year: number, month: number) => {
    return new Date(year, month, 1).getDay()
  }

  const daysInMonth = getDaysInMonth(currentYear, currentMonth)
  const firstDayOfWeek = getFirstDayOfWeek(currentYear, currentMonth)

  // Сдвиг для начала недели с понедельника
  const startOffset = (firstDayOfWeek + 6) % 7

  // Массив дней для отображения
  const days: (Date | null)[] = []
  for (let i = 0; i < startOffset; i++) days.push(null)
  for (let d = 1; d <= daysInMonth; d++) {
    days.push(new Date(currentYear, currentMonth, d))
  }

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
  }
  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }

  return (
    <div className="w-full max-w-xs mx-auto">
      <div className="flex items-center justify-between mb-2">
        <button
          onClick={handlePrevMonth}
          className="px-2 py-1 text-lg font-bold text-primary"
        >
          ‹
        </button>
        <span className="font-body text-xl md:text-xl font-semibold text-primary">
          {MONTHS[currentMonth]} {currentYear}
        </span>
        <button
          onClick={handleNextMonth}
          className="px-2 py-1 text-lg font-bold text-primary"
        >
          ›
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 mb-1 text-xs text-center text-gray-500">
        <span>Пн</span>
        <span>Вт</span>
        <span>Ср</span>
        <span>Чт</span>
        <span>Пт</span>
        <span>Сб</span>
        <span>Вс</span>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, idx) =>
          day ? (
            <button
              key={day.toISOString()}
              onClick={() => onSelectDate(day)}
              className={clsx(
                "px-2 py-1 rounded-full border text-sm",
                selectedDate &&
                  day.toDateString() === selectedDate.toDateString()
                  ? "border-primary text-primary bg-white"
                  : "border-gray-300 text-gray-700 bg-white",
                today.toDateString() === day.toDateString() && "font-bold underline"
              )}
            >
              {day.getDate()}
            </button>
          ) : (
            <span key={idx}></span>
          )
        )}
      </div>
    </div>
  )
}
