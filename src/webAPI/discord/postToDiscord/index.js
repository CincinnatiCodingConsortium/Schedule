const { default: axios } = require("axios")


const postToDiscord = async (webhook, content) => {
    const result = await axios.post(webhook, content)
    console.log(result.status)
}

module.exports = { postToDiscord }