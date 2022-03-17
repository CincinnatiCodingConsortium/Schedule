import { Client } from "@notionhq/client"

const notion = new Client({
    auth: process.env.NOTION_SCHEDULE_PLANNER_INTEGRATION_TOKEN
})

export const fetchScheduleEntriesVerboseResult = async ({ sortsArray, filterObject }) => {
    const response = await notion.databases.query({ 
        database_id: process.env.NOTION_SCHEDULE_DATABASE_ID,
        sorts: sortsArray,
        filter: filterObject
    })
    return response
}
