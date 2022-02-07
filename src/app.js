import { fetchUpcomingSchedule } from "./webAPI/scheduleDB"
import { postToDiscord } from "./webAPI/discord/postToDiscord"
import { testMessage } from "./messages"
import { isFutureEvent, isPastEvent } from "./schedule-handling/utils"


export const app = async () => {

    const schedule = await fetchUpcomingSchedule()
    console.log(schedule)
    const pastSchedule = schedule.filter(isPastEvent)
    console.log(pastSchedule)

    

    // COMMENTED OUT TO AVOID NON-STOP POSTS ANNOYING KORY DURING TESTING
    // const result = await postToDiscord(process.env.TEST_DISCORD_WEBHOOK, { content: testMessage })
    // console.log(result.status)
}
