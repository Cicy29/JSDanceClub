const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2
    },
    age: {
        type: Number,
        required: true,
        max: 30
    },
    meetups: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Club',
        autopopulate: {
            maxDepth: 1
        },
        meetups: [{
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'SuggestedEvent',
            autopopulate: {
                maxDepth: 1
            }
        }]
    }]
})

PersonSchema.methods.findPeersUnder30 = function (cb) {
    return UserModel.find({
        age: {
            $gte: 30
        }
    });
};

UserSchema.plugin(require('mongoose-autopopulate'))

const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel




module.exports = class User {
    constructor(name, age, location, suggestedEvent = [], club = [], id) {
        this.name = name;
        this.age = age;
        this.location = location;
        this.suggestedEvent = suggestedEvent;
        this.club = club;
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
    static create({
        name,
        age,
        location,
        suggestedEvent,
        club,
        id
    }) {
        return new User(name, age, location, suggestedEvent, club, id);
    }
};