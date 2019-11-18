module.exports = class User {
    constructor(name, age, location, id) {
        this.name = name;
        this.age = age;
        this.location = location;
        this.id = id;
    }
    wantsToPartyAt(club) {
        this.club = club.name;
        console.log(
            "Welcome " + this.name + " ," + "you will have the time of your life!"
        );
        club.clubbers.push(this);
    }
    buysTicket(suggestedEvent) {
        this.suggestedEvent = suggestedEvent.genre;
        console.log(this.name + ", have fun there, life is too short!!");
        suggestedEvent.attendees.push(this);
    }
};