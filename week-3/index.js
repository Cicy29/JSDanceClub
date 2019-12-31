const User = require('./models/user')
const SuggestedEvent = require('./models/suggested-event')
const Club = require('./models/club')
const UserService = require('./services/user-service.js')
const SuggestedEventService = require('./services/suggested-event-service.js')
const ClubService = require('./services/club-service.js')



async function main() {
    const clark = new User("Clark Kent", 25, "Berlin");
    const bruce = new User("Bruce Wayne", 29, "Berlin");
    const mel = new User("Mel", 25, "Berlin");

    const yaam = new Club("Yaam", "Afrobeats");
    const electro = new SuggestedEvent("Electro Swing", "Friedrichhain");
    clark.buysTicket(electro);
    bruce.buysTicket(electro);
    bruce.wantsToPartyAt(yaam);
    mel.wantsToPartyAt(yaam);


    await UserService.add(bruce)
    await UserService.add(clark)

    const people = await UserService.findAll()

    console.log(people[0].name)

    await UserService.del(1)

    const newPeople = await UserService.findAll()

    console.log(newPeople[0].name)
}

main()
















// const loadedFile = Database.load()
// console.log(loadedFile)
// const Club = Club.create(loadedFile)
// const havannaClub = new Club("Havanna", "Latin music")
// havannaClub.report()


// const clark = new User("Clark Kent", 25, "Berlin");
// const jean = new User("Jean Gray", 22, "Berlin");
// const bruce = new User("Bruce Wayne", 29, "Berlin");

// const electro = new SuggestedEvent("Electro Swing", "Friedrichhain");
// const costume = new SuggestedEvent("Costume Night", "Kreuzberg");

// const berghain = new Club("Berghain", "Electro");
// const yaam = new Club("Yaam", "Afrobeats");

// clark.buysTicket(electro);
// bruce.buysTicket(electro);
// electro.printAttendeesNames();

// jean.wantsToPartyAt(berghain);
// berghain.printClubbersNames();

// bruce.wantsToPartyAt(yaam);
// jean.wantsToPartyAt(yaam);
// yaam.printClubbersNames();

// clark.buysTicket(costume);
// costume.printAttendeesNames();

// Database.save('club.json', yaam)
// Database.save('suggested-event.json', electro)
// Database.save('user.json', clark)

// const loadedFile = Database.load('suggested-event.json')
// console.log(loadedFile)