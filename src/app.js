const { postToDiscord } = require("./webAPI/discord/postToDiscord")

const app = () => {

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

    postToDiscord(TEST_DISCORD_WEBHOOK, contentWrapper)

}

module.exports = { app }
