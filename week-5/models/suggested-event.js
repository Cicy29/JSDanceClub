const mongoose = require('mongoose')

const SuggestedEventSchema = new mongoose.Schema({
    genre: String,
    location: String,
    attendees: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        autopopulate: {
            maxDepth: 1
        }
    }]
})

SuggestedEventSchema.plugin(require('mongoose-autopopulate'))

const SuggestedEventModel = mongoose.model('SuggestedEvent', SuggestedEventSchema)

module.exports = SuggestedEventModel