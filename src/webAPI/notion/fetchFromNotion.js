import { queryNotionDatabase } from "./notionAPI/notionAPI"
import { upcomingEventsInAscendingOrder } from "./notionAPI/queries"
import { NOTION_SCHEDULE_PLANNER_INTEGRATION_TOKEN, NOTION_SCHEDULE_DATABASE_ID } from "./notionAPI/tokensAndIDs"

export async function fetchUpcomingEvents() {
    const response = await queryNotionDatabase({
        clientToken: NOTION_SCHEDULE_PLANNER_INTEGRATION_TOKEN,
        databaseID: NOTION_SCHEDULE_DATABASE_ID,
        ...upcomingEventsInAscendingOrder
    })
    return response
}