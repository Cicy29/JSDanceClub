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

UserSchema.methods.findPeersUnder30 = function (cb) {
    return UserModel.find({
        age: {
            $gte: 30
        }
    });
};

UserSchema.plugin(require('mongoose-autopopulate'))

const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel