const { postToDiscord } = require("./webAPI/discord/postToDiscord")
const { fetchSchedule } = require("./webAPI/scheduleDB")

const app = async () => {

    const TEST_DISCORD_WEBHOOK = process.env.TEST_DISCORD_WEBHOOK
    const content =
    "**Next Meetup** \n" +
    "\n" +
    "Topic: the thing\n" +
    "Host:\n" +
    "Date:\n" +
    "Time: 8:00 PM EST\n" +
    "Details:\n" +
    "\n" +
    "See you there!"
    const contentWrapper = {
        content: content
    }

    const schedule = await fetchSchedule()
    console.log(schedule)
    
    // postToDiscord(TEST_DISCORD_WEBHOOK, contentWrapper)

}

module.exports = { app }
