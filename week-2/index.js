const User = require('./user')
const SuggestedEvent = require('./suggested-event')
const Club = require('./club')
const Database = require('./database')



const clark = new User("Clark Kent", 25, "Berlin");
const jean = new User("Jean Gray", 22, "Berlin");
const bruce = new User("Bruce Wayne", 29, "Berlin");

const electro = new SuggestedEvent("Electro Swing", "Friedrichhain");
const costume = new SuggestedEvent("Costume Night", "Kreuzberg");

const berghain = new Club("Berghain", "Electro");
const yaam = new Club("Yaam", "Afrobeats");
// const havanna = new Club("Havanna", "Latin music");

clark.buysTicket(electro);
bruce.buysTicket(electro);
electro.printAttendeesNames();

jean.wantsToPartyAt(berghain);
berghain.printClubbersNames();

bruce.wantsToPartyAt(yaam);
jean.wantsToPartyAt(yaam);
yaam.printClubbersNames();

clark.buysTicket(costume);
costume.printAttendeesNames();

Database.save('club.json', yaam)
Database.save('suggested-event.json', electro)
Database.save('user.json', clark)

const loadedFile = Database.load('suggested-event.json')
console.log(loadedFile)