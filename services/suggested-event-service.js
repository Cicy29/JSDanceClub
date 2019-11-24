const BaseService = require('./base-service')
const SuggestedEventModel = require('../models/suggested-event')

class SuggestedEventService extends BaseService {
    model = SuggestedEvent
}

module.exports = new SuggestedEventService()