export const fetchPastScheduleArchive = async () => {
    const result = await fs.promises.readFile('./data/pastScheduleArchive.json')
    return JSON.parse(result)
}