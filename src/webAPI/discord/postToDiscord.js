import axios from "axios"

export const postToDiscord = async (webhook, params) => {
    
    // Add validation logic here before sending off for runtime checking
    // Probably a function

    const result = await axios.post(webhook, params)
    return result
}
