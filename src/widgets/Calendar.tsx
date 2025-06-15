import { useEffect, useState } from "react"
import clsx from "clsx"

type CalendarProps = {
  selectedDate: Date | null
  onSelectDate: (date: Date) => void
}

export const Calendar = ({ selectedDate, onSelectDate }: CalendarProps) => {
//   const today = new Date()
  const [days, setDays] = useState<Date[]>([])

  useEffect(() => {
    const result: Date[] = []
    const base = new Date()
    for (let i = 0; i < 14; i++) {
      const date = new Date(base)
      date.setDate(base.getDate() + i)
      result.push(date)
    }
    setDays(result)
  }, [])

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "short",
    })
  }

  return (
    <div className="flex flex-wrap gap-2">
      {days.map((day) => {
        const isSelected =
          selectedDate &&
          day.toDateString() === selectedDate.toDateString()

        return (
          <button
            key={day.toISOString()}
            onClick={() => onSelectDate(day)}
            className={clsx(
              "px-3 py-2 rounded-full border text-sm",
              isSelected
                ? "border-[#7E0D0D] text-[#7E0D0D] bg-rose-100"
                : "border-gray-300 text-gray-700 bg-white"
            )}
          >
            {formatDate(day)}
          </button>
        )
      })}
    </div>
  )
}
