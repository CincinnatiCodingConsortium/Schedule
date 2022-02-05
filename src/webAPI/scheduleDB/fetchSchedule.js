// As of writing this note, there is no external database holding our schedule.
// Instead, there is simply a JSON file outside of the sourcecode that this "web API" is reaching out to.
// This is just a placeholder, but I still want to set up the applicaiton structure as though it is reaching out via webAPI call.

const fs = require("fs").promises
// import fs from fs.promises


const fetchSchedule = async () => {
    const result = await fs.readFile('./src/webAPI/scheduleDB/schedule.json')
    return JSON.parse(result)
}

module.exports = { fetchSchedule }