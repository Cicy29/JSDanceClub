const BaseService = require('./base-service')
const SuggestedEventModel = require('../models/suggested-event')

class SuggestedEventService extends BaseService {
    constructor() {
        super(SuggestedEventModel, `${__dirname}/../suggested-event-database.json`)
    }
}

module.exports = new SuggestedEventService()