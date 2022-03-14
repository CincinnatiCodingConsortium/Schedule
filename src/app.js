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
        return response
    }

    const response = await fetchDatabase()

    const firstEntry = response.results[0].properties

    function consoleLogEntry(entry) {
        console.log('*******************')
        console.log(`\nMeeting Title: ${entry['Meeting Title']?.title[0]?.plain_text}`)
        console.log('\nDescription:')
        console.log(entry?.Description?.rich_text[0]?.plain_text)
        console.log(`\nDate: ${entry?.Date?.date?.start}`)
        console.log(`\nMeeting Focus: ${entry['Meeting Focus']?.rich_text[0]?.plain_text}`)
        console.log(`\nFormat: ${entry?.Format?.select?.name}`)
        console.log(`\nMeeting Style: ${entry['Meeting Style']?.select?.name}`)
        console.log(`\nHost: ${entry?.Host?.rich_text[0]?.plain_text}`)
        console.log('\n*******************')
    }

    consoleLogEntry(firstEntry)

    response.results.forEach(entry => entry.properties['Meeting Title']?.title[0]?.plain_text ? consoleLogEntry(entry.properties) : null)


    function extractAnnouncementPropertiesIntoArray(entry) {
        const { ...goodProperties } = entry
    }




    // COMMENTED OUT TO AVOID NON-STOP POSTS ANNOYING KORY DURING TESTING
    // const result = await postToDiscord(TEST_DISCORD_WEBHOOK, { content: testMessage })
    // console.log(result.status)
}
