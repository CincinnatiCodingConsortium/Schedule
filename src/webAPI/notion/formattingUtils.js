export function extractEssentialPropertyValues(entryProperties) {
    return ({
        date: entryProperties?.Date?.date?.start,
        meetingTitle: entryProperties['Meeting Title']?.title[0]?.plain_text,
        description: entryProperties?.Description?.rich_text[0]?.plain_text,
        meetingFocus: entryProperties['Meeting Focus']?.rich_text[0]?.plain_text,
        tagsContent: entryProperties['Tags: Content']?.multi_select.map( entry => entry.name ),
        tagsReminders: entryProperties['Tags: Reminders']?.multi_select.map( entry => entry.name ),
        format: entryProperties?.Format?.select?.name,
        meetingStyle: entryProperties['Meeting Style']?.select?.name,
        host: entryProperties?.Host?.rich_text[0]?.plain_text
    })
}