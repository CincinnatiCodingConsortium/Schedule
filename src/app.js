import { fetchUpcomingSchedule } from "./webAPI/scheduleDB"
import { postToDiscord } from "./webAPI/discord/postToDiscord"
import { testMessage } from "./messages"
import { TEST_DISCORD_WEBHOOK } from "./constants"
import { Client } from "@notionhq/client"

export const app = async () => {

    // POSSIBLY OBSOLETE
    // const schedule = await fetchUpcomingSchedule()
    // console.log(schedule)
    
    console.log(process.env.NOTION_SCHEDULE_PLANNER_INTEGRATION_TOKEN)
    console.log(process.env.NOTION_SCHEDULE_DATABASE_ID)

    // COMMENTED OUT TO AVOID NON-STOP POSTS ANNOYING KORY DURING TESTING
    // const result = await postToDiscord(TEST_DISCORD_WEBHOOK, { content: testMessage })
    // console.log(result.status)
}
