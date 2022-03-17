// SORTS

export const sortByDateAscendingArray = [{
    property: 'Date',
    direction: 'ascending'
}]

// FILTERS

export const filterOnOrAfterToday = {
    property: 'Date',
    date: {
        on_or_after: new Date().toISOString()
    }
}

// QUERY OBJECTS READY TO GO:

export const upcomingEventsInAscendingOrder = {
    sortsArray: sortByDateAscendingArray,
    filterObject: filterOnOrAfterToday
}