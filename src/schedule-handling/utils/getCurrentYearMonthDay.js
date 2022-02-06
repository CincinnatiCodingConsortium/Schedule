export const getCurrentYearMonthDay = () => {
    
    const currentDate = new Date()

    console.log(`Date to be used: ${currentDate.toDateString()}`)

    return ({
        currentYear: currentDate.getFullYear(),
        currentMonth: currentDate.getMonth(),
        currentDate: currentDate.getDate()
    })
}
    
    
    