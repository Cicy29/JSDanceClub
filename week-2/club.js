module.exports = class Club {
    constructor(name, genre) {
        this.name = name;
        this.genre = genre;
        this.clubbers = [];
    }
    printClubbersNames() {
        this.clubbers.forEach(printName);
    }
};

printName = user => console.log(user.name);