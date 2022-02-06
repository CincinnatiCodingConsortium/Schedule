import { fetchSchedule } from "./webAPI/scheduleDB"
import { postToDiscord } from "./webAPI/discord/postToDiscord"
import { testMessage } from "./messageTemplates"
import { TEST_DISCORD_WEBHOOK } from "./constants"

export const app = async () => {

    const schedule = await fetchSchedule()
    console.log(schedule)
    
    // COMMENTED OUT TO AVOID NON-STOP POSTS ANNOYING KORY DURING TESTING
    // const result = await postToDiscord(TEST_DISCORD_WEBHOOK, { content: testMessage })
    // console.log(result.status)
}