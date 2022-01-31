const { default: axios } = require("axios")
const dotenv = require("dotenv")
dotenv.config()


const content = {
    content: "**Test Headline**\n" + 
    "Some content"
}

const postToDiscord = async () => {
    const result = await axios.post(process.env.TEST_DISCORD_WEBHOOK, content)
    console.log(result.status)
}

postToDiscord()


// curl --request POST  --header "Content-Type:application/json" --data '{"content":"Test post"}' <http>