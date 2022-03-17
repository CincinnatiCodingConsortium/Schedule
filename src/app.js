import { postToDiscord } from "./webAPI/discord/postToDiscord"
import { testMessage, loggableEventMessage } from "./messages"
import { TEST_DISCORD_WEBHOOK } from "./constants"
import { fetchUpcomingEvents } from "./webAPI/notion"

export const app = async () => {


    const response = await fetchUpcomingEvents()

    const firstEntry = response[0]



    console.log(response)

    // response.results.forEach(entry => entry.properties['Meeting Title']?.title[0]?.plain_text ? console.log(loggableEventMessage(entry.properties)) : null)



    // COMMENTED OUT TO AVOID NON-STOP POSTS ANNOYING KORY DURING TESTING
    // const result = await postToDiscord(TEST_DISCORD_WEBHOOK, { content: testMessage })
    // console.log(result.status)
}
