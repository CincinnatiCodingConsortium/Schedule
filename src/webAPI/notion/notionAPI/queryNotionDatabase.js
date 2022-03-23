import { Client } from "@notionhq/client"


export async function queryNotionDatabase({ clientToken, databaseID, sortsArray, filterObject }) {

    const notion = new Client({
        auth: clientToken
    })

    const rawQueryResponse = await notion.databases.query({
        database_id: databaseID,
        sorts: sortsArray,
        filter: filterObject
    })

    return rawQueryResponse
}