const BaseService = require('./base-service')
const UserModel = require('../models/user')

class UserService extends BaseService {
    model = UserModel

    async wantsToPartyAt(user, club) {
        user.clubs.push(club)
        club.clubbers.push(user)
        await user.save()
        await club.save()
    }

    async buysTicket(user, club) {
        user.suggestedEvent.push(club)
        suggestedEvent.attendees.push(user)
        await user.save()
        await suggestedEvent.save()

    }
}

module.exports = new UserService()