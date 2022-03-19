import { Client } from "@notionhq/client"
import { extractEssentialPropertyValues } from "./formattingUtils"



export async function queryNotionDatabase({ clientToken, databaseID, sortsArray, filterObject, isRaw = false }) {

    const notion = new Client({
        auth: clientToken
    })

    const rawQueryResponse = await notion.databases.query({
        database_id: databaseID,
        sorts: sortsArray,
        filter: filterObject
    })

    if (isRaw) {
        return response
    }

    return rawQueryResponse

    // THE BEFORE WAY
    // return response.results.map(entry => extractEssentialPropertyValues(entry.properties))

}
