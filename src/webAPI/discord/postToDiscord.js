import axios from "axios"

export const postToDiscord = async (webhook, params) => {
    
    const result = await axios.post(webhook, params)
    return result
}
