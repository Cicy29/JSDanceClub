const mongoose = require('mongoose')

const ClubSchema = new mongoose.Schema({
    name: String,
    genre: String,
    location: String,
    clubbers: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        autopopulate: {
            maxDepth: 1
        }
    }]
})

ClubSchema.plugin(require('mongoose-autopopulate'))

const ClubModel = mongoose.model('Club', ClubSchema)

module.exports = ClubModel