import camelCase from "lodash.camelcase"

export function formatDataBaseQueryResponse(rawQueryResponse) {
    const { results } = rawQueryResponse
    return results.map(rawEntry => extractAndFormatRawProperties(rawEntry))
}

function extractAndFormatRawProperties(rawEntry) {

    const { properties: rawPropertiesObject } = rawEntry

    const rawKeyNames = Object.keys(rawPropertiesObject)
    
    const formattedPropertiesObject = {}
    rawKeyNames.forEach( rawKeyName => {
        return formattedPropertiesObject[camelCase(rawKeyName)] = dynamicallyFormatValues(rawPropertiesObject[rawKeyName])
    })
    return formattedPropertiesObject
}

function dynamicallyFormatValues(rawValueObject) {


    if ( typeof rawValueObject[rawValueObject.type] === 'string' ) {
        return rawValueObject[rawValueObject.type]
    }


    switch (rawValueObject.type) {
        case 'rich_text':
            return rawValueObject.rich_text[0]?.plain_text
        case 'multi_select':
            return rawValueObject.multi_select.map( entry => entry?.name )
        case 'select':
            return rawValueObject.select?.name
        case 'date':
            return rawValueObject.date.start
        case 'number':
            return rawValueObject.number
        case 'title':
            return rawValueObject.title[0]?.plain_text
        default:
            return { NOTE_FROM_RANDY: 'See `formattingUtils.js` to custom format', payload: rawValueObject}
    }

    /* 
    Note: Each property type in Notion has it's own data shape (requiring custom formatting)
    I have not done them all.
    
    If you make a new property and it displays in a wierd way,
    you will have to come here and add your own logic.

    If you add your own logic, please ensure that you have accounted
    for what happens when that property type is left blank.  (Learn from my mistake!)
    */
}