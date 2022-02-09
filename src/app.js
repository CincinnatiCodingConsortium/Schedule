import { postToDiscord } from "./webAPI/discord/postToDiscord"
import { testMessage } from "./messages"
import { archivePastEvents } from "./schedule-handling"


export const app = async () => {

    const result = await archivePastEvents()
    console.log(result)

    

    // COMMENTED OUT TO AVOID NON-STOP POSTS ANNOYING KORY DURING TESTING
    // const result = await postToDiscord(process.env.TEST_DISCORD_WEBHOOK, { content: testMessage })
    // console.log(result.status)
}
