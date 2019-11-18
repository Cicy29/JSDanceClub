module.exports = class SuggestedEvent {
    constructor(genre, location, id) {
        this.genre = genre;
        this.location = location;
        this.id = id;
        this.events = [];
        this.attendees = [];
    }
    printAttendeesNames() {
        this.attendees.forEach(printName);
    }

    static create({
        genre,
        location,
        id
    }) {
        return new SuggestedEvent(genre, location, id)
    }

};

const printName = user => console.log(user.name);