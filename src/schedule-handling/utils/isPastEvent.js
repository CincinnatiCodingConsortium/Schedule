import { currentYear, currentMonth, currentDate } from "."

export const isPastEvent = (event) => {
    return (
        event.date.year < currentYear ||
        event.date.year === currentYear &&
        event.date.month < currentMonth ||
        event.date.month === currentMonth &&
        event.date.day < currentDate
    ) 
}
