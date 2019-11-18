const fs = require('fs')

//dynamic code. here we want to be able to use mutliple files, not having to change from Data.json each time (hard code)
const save = function (filename, data) {
    fs.writeFileSync(filename, JSON.stringify(data))
}

const load = function (filename) {
    return JSON.parse(fs.readFileSync(filename, 'utf8'))
}

module.exports = {
    save,
    load
}