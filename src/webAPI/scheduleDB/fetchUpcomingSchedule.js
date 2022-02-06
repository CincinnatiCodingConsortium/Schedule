import fs from 'fs'

export const fetchUpcomingSchedule = async () => {
    const result = await fs.promises.readFile('./data/upcomingSchedule.json')
    return JSON.parse(result)
}

// As of writing this note, there is no external database holding our schedule.
// This is just a placeholder until we have enough data worthy of setting up a DB.
