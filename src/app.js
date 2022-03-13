import { fetchUpcomingSchedule } from "./webAPI/scheduleDB"
import { postToDiscord } from "./webAPI/discord/postToDiscord"
import { testMessage } from "./messages"
import { TEST_DISCORD_WEBHOOK } from "./constants"
import { Client } from "@notionhq/client"

export const app = async () => {

    // POSSIBLY OBSOLETE
    // const schedule = await fetchUpcomingSchedule()
    // console.log(schedule)
    
    const NOTION_SCHEDULE_PLANNER_INTEGRATION_TOKEN = process.env.NOTION_SCHEDULE_PLANNER_INTEGRATION_TOKEN
    const NOTION_SCHEDULE_DATABASE_ID = process.env.NOTION_SCHEDULE_DATABASE_ID


    // Set up SDK Client with authorization
    const notion = new Client({
        auth: NOTION_SCHEDULE_PLANNER_INTEGRATION_TOKEN
    })

    // Create Sorting request function
    async function fetchDatabase() {
        const databaseId = NOTION_SCHEDULE_DATABASE_ID;
        const response = await notion.databases.query({ 
            database_id: databaseId,
            sorts: [
                {
                    property: 'Date',
                    direction: 'ascending'
                }
            ]
        })
        console.log(response)
    }

    fetchDatabase()




    // COMMENTED OUT TO AVOID NON-STOP POSTS ANNOYING KORY DURING TESTING
    // const result = await postToDiscord(TEST_DISCORD_WEBHOOK, { content: testMessage })
    // console.log(result.status)
}
