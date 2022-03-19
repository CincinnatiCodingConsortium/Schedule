import camelCase from "lodash.camelcase"

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

export function formatResponse(rawQueryResponse) {
    const { results } = rawQueryResponse
    results.map(rawEntry => extractAndFormatEntryProperties(rawEntry.properties))
}

export function extractAndFormatEntryProperties(rawPropertiesObject) {

    const rawKeyNames = Object.keys(rawPropertiesObject)
    
    const formattedPropertiesObject = {}
    rawKeyNames.forEach( rawKeyName => {
        return formattedPropertiesObject[camelCase(rawKeyName)] = dynamicallyExtractValue(rawPropertiesObject[rawKeyName])
    })
    
    return formattedPropertiesObject
}

function dynamicallyExtractValue(rawValueObject) {

    if ( rawValueObject.hasOwnProperty(rawValueObject.type) && typeof rawValueObject[rawValueObject != 'string'] ) {
        return rawValueObject[rawValueObject.type]
    }

    switch (rawValueObject.type) {
        case 'rich_text':
            return rawValueObject.rich_text
        case 'text':
            return rawValueObject.text
        case 'date':
            return rawValueObject.date.start
        default:
            return { NOTE_FROM_RANDY: 'See `formattingUtils.js` to custom format', payload: rawValueObject}
    }

    /* 
    Note: Each property type in Notion has it's own data shape (requiring custom formatting)
    I have not done them all.
    
    If you make a new property and it displays in a wierd way,
    you will have to come here and add your own logic.
    */
}