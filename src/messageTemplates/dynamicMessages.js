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