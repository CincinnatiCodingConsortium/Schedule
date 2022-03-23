import { postToDiscord } from "./webAPI/discord/postToDiscord"
import { testMessage, loggableEventMessage } from "./messages"
import { TEST_DISCORD_WEBHOOK } from "./constants"
import { fetchUpcomingEvents } from "./webAPI/notion"

export const app = async () => {


    const response = await fetchUpcomingEvents()

    // TODO: Add try/catch logic to send erros to error channel.

    const firstEntry = response[0]

    console.log(firstEntry)




    // COMMENTED OUT TO AVOID NON-STOP POSTS ANNOYING KORY DURING TESTING
    // const result = await postToDiscord(TEST_DISCORD_WEBHOOK, { content: testMessage })
    // console.log(result.status)
}
