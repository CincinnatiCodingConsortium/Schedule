import { queryNotionDatabase } from "./notionAPI/queryNotionDatabase"
import { upcomingEventsParams } from "./notionAPI/paramObjects"
import { formatDataBaseQueryResponse } from "./notionAPI/formattingUtils"

export async function fetchUpcomingEvents() {
    const rawQueryResponse = await queryNotionDatabase(upcomingEventsParams)
    return formatDataBaseQueryResponse(rawQueryResponse)
}