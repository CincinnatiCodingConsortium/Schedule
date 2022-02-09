import fs from 'fs'
import { fetchPastScheduleArchive } from ".";

export const addEntryToPastScheduleArchive = async (arrayOfEntries) => {
    const pastScheduleArchive = await fetchPastScheduleArchive()
    const updatedPastScheduleArchive = pastScheduleArchive.concat(arrayOfEntries)
    const result = await fs.promises.writeFile('./data/pastScheduleArchive.json', JSON.stringify(updatedPastScheduleArchive))
    return result === undefined ? "Past Schedule Archive successfully updated!" : result
}


