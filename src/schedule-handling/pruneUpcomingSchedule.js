import { addEntryToPastScheduleArchive, fetchUpcomingSchedule } from "../webAPI/scheduleDB"
import { isFutureEvent } from "./utils"

export const pruneUpcomingSchedule = async () => {
    const schedule = await fetchUpcomingSchedule()
    const pastEventsArray = schedule.filter(isFutureEvent)
    //const result = await addEntryToPastScheduleArchive(pastEventsArray)
    //return result
}

// Note: This file premanently removes past events
// This file does NOT archive.
// (archive before using this function or you will permanently past even info)