module.exports = class Club {
    constructor(name, genre, clubbers = [], id) {
        this.name = name;
        this.genre = genre;
        this.clubbers = clubbers;
        this.id = id
    }
    printClubbersNames() {
        this.clubbers.forEach(printName);
    }
    static create({
        name,
        genre,
        clubbers,
        id
    }) {
        return new Club(
            name,
            genre,
            clubbers,
            id)

    }


};

// printName = user => console.log(user.name);