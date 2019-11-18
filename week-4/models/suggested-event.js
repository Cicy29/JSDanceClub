module.exports = class SuggestedEvent {
    constructor(genre, location, attendees = [], id) {
        this.genre = genre;
        this.location = location;
        // this.events = [];
        this.attendees = attendees;
        this.id = id
    }
    printAttendeesNames() {
        this.attendees.forEach(printName);
    }
    report() {
        console.log(this.name, 'a salsa class will be given before the party starts at ', (this.location), 'and number of attendees are', this.attendees.length)
    }

    static create({
        genre,
        location,
        attendees,
        id
    }) {
        return new SuggestedEvent(
            genre,
            location,
            attendees,
            id

        )
    }

};