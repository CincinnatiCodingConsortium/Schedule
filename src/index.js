const dotenv = require("dotenv")
const { postToDiscord } = require("./postToDiscord")
dotenv.config()

const TEST_DISCORD_WEBHOOK = process.env.TEST_DISCORD_WEBHOOK

const content = {
    content: "**Test Headline**\n" + 
    "Some content"
}


postToDiscord(TEST_DISCORD_WEBHOOK, content)
