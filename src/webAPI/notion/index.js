import { fetchScheduleEntriesVerboseResult } from "./notionAPI"
import { upcomingEventsInAscendingOrder } from "./queries"
import { extractEssentialPropertyValues } from "./formattingUtils"

export async function fetchUpcomingEvents() {
    const response = await fetchAndFormatScheduleEntries(upcomingEventsInAscendingOrder)
    return response
}

export async function fetchAndFormatScheduleEntries(queryParamsObject) {
    const response = await fetchScheduleEntriesVerboseResult(queryParamsObject)
    return response.results.map(entry => extractEssentialPropertyValues(entry.properties))
}


