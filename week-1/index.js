//This is an app where users can find a club where the can go dance according to the genre of music they like and the special events

User = class {
  constructor(name, age, location, id) {
    this.name = name;
    this.age = age;
    this.location = location;
    this.id = id;
  }
  wantsToPartyAt(club) {
    this.club = club;
    console.log(
      "Welcome " + this.name + "," + "you will have the time of your life!"
    );
    club.clubbers.push(this);
  }
  buysTicket(suggestedEvent) {
    this.suggestedEvent = suggestedEvent;
    console.log(this.name + ", have fun, life is too short!");
    suggestedEvent.attendees.push(this);
  }
};

clark = new User("Clark Kent", 25, "Berlin");
jean = new User("Jean Gray", 22, "Berlin");
bruce = new User("Bruce Wayne", 29, "Berlin");

SuggestedEvent = class {
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
};

printName = user => console.log(user.name);

electro = new SuggestedEvent("Electro Swing", "Friedrichhain");
costume = new SuggestedEvent("Costume Night", "Kreuzberg");

Club = class {
  constructor(name, genre) {
    this.Clubname = name;
    this.genre = genre;
    this.clubbers = [];
  }
  printClubbersNames() {
    this.clubbers.forEach(printName);
  }
};

printName = user => console.log(user.name);

berghain = new Club("Berghain", "Electro");
yaam = new Club("Yaam", "Afrobeats");
havanna = new Club("Havanna", "Latin music");

clark.buysTicket(electro);
jean.wantsToPartyAt(berghain);
bruce.buysTicket(electro);
bruce.wantsToPartyAt(yaam);
jean.wantsToPartyAt(yaam);
clark.buysTicket(costume);

electro.printAttendeesNames();
berghain.printClubbersNames();
costume.printAttendeesNames();
yaam.printClubbersNames();