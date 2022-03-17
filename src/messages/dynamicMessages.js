export const testMessage = `This is a test.  Your lucky number is ${Math.floor(Math.random() * 100)}`

export const promoMessage = (meetupObject) => {
    return (
        "**Next Meetup** \n" +
        "\n" +
        "Topic: the thing\n" +
        "Host:\n" +
        "Date:\n" +
        "Time: 8:00 PM EST\n" +
        "Details:\n" +
        "\n" +
        "See you there!"
    )
}

// Notion's Database object is very dense and has tons of deeply nested data
// I apologize for this chunk of code:

export const loggableEventMessage = (entry) => {
    return (
        '\n*******************' +
        `\nDate: ${entry?.Date?.date?.start}` +
        `\nMeeting Title: ${entry['Meeting Title']?.title[0]?.plain_text}` +
        '\nDescription:' +
        entry?.Description?.rich_text[0]?.plain_text +
        `\nMeeting Focus: ${entry['Meeting Focus']?.rich_text[0]?.plain_text}` +
        `\nTags: Content: ${entry['Tags: Content']?.multi_select}` +
        `\nTags: Reminders: ${entry['Tags: Reminders']?.multi_select}` +
        `\nFormat: ${entry?.Format?.select?.name}` +
        `\nMeeting Style: ${entry['Meeting Style']?.select?.name}` +
        `\nHost: ${entry?.Host?.rich_text[0]?.plain_text}` +
        '\n*******************'
    )
}