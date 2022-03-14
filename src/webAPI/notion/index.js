import { Client } from "@notionhq/client"
    
// Set up SDK Client with authorization
const notion = new Client({
    auth: process.env.NOTION_SCHEDULE_PLANNER_INTEGRATION_TOKEN
})

// Create Sorting request function
export async function fetchDatabase() {
    const databaseId = process.env.NOTION_SCHEDULE_DATABASE_ID;
    const response = await notion.databases.query({ 
        database_id: databaseId,
        sorts: [
            {
                property: 'Date',
                direction: 'ascending'
            }
        ]
    })
    return response
}