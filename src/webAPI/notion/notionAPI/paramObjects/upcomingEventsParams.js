import { NOTION_SCHEDULE_PLANNER_INTEGRATION_TOKEN, NOTION_SCHEDULE_DATABASE_ID } from "./paramParts/tokensAndIDs";
import { upcomingEventsInAscendingOrder } from "./paramParts/queries";

export const upcomingEventsParams = {
    clientToken: NOTION_SCHEDULE_PLANNER_INTEGRATION_TOKEN,
    databaseID: NOTION_SCHEDULE_DATABASE_ID,
    ...upcomingEventsInAscendingOrder
}