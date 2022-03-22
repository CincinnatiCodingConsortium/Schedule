export const localISOTime = getLocalISOTime()

function getLocalISOTime() {
    const timeZoneOffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
    const localISOTime = (new Date(Date.now() - timeZoneOffset)).toISOString().slice(0, -1);
    return localISOTime
}