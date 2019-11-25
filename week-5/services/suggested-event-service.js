const BaseService = require('./base-service')
const SuggestedEventModel = require('../models/suggested-event')

class SuggestedEventService extends BaseService {
    model = SuggestedEventModel
}

module.exports = new SuggestedEventService()