import { fetchUpcomingSchedule } from "../webAPI/scheduleDB";
import { getCurrentYearMonthDay } from "./utils";

const result = fetchUpcomingSchedule()
const { currentYear, currentMonth, currentDate } = getCurrentYearMonthDay()

// possibly obsolete file
