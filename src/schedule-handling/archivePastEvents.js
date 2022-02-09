import { addEntryToPastScheduleArchive, fetchUpcomingSchedule } from "../webAPI/scheduleDB"
import { isPastEvent } from "./utils"

export const archivePastEvents = async () => {
    const schedule = await fetchUpcomingSchedule()
    const pastEventsArray = schedule.filter(isPastEvent)
    const result = await addEntryToPastScheduleArchive(pastEventsArray)
    return result
}