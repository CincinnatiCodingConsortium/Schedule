import { fetchScheduleEntriesVerboseResult } from "./notionAPI/notionAPI"
import { upcomingEventsInAscendingOrder } from "./notionAPI/queries"
import { extractEssentialPropertyValues } from "./notionAPI/formattingUtils"

export async function fetchUpcomingEvents() {
    const response = await fetchAndFormatScheduleEntries(upcomingEventsInAscendingOrder)
    return response
}

async function fetchAndFormatScheduleEntries(queryParamsObject) {
    const response = await fetchScheduleEntriesVerboseResult(queryParamsObject)
    return response.results.map(entry => extractEssentialPropertyValues(entry.properties))
}


// notionAPIObjectFactory

// function notionAPICallWrapper({}) {
    // useFormatting tool in wrapper inside of if statment
//}