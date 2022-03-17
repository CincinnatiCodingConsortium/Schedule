import { Client } from "@notionhq/client"
import { extractEssentialPropertyValues } from "./formattingUtils"



export async function queryNotionDatabase({ clientToken, databaseID, sortsArray, filterObject, isRaw = false }) {

    const notion = new Client({
        auth: clientToken
    })

    const response = await notion.databases.query({
        database_id: databaseID,
        sorts: sortsArray,
        filter: filterObject
    })

    return response.results.map(entry => extractEssentialPropertyValues(entry.properties))
}
