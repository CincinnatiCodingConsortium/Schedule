import { localISOTime } from "../../../../../utils/timeTools"


// SORTS

export const sortByDateAscendingArray = [{
    property: 'Date',
    direction: 'ascending'
}]

// FILTERS

export const filterOnOrAfterToday = {
    property: 'Date',
    date: {
        on_or_after: localISOTime
    }
}

// QUERY OBJECTS READY TO GO:

export const upcomingEventsInAscendingOrder = {
    sortsArray: sortByDateAscendingArray,
    filterObject: filterOnOrAfterToday
}