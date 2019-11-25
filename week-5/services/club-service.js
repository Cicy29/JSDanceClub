const BaseService = require('./base-service')
const ClubModel = require('../models/club')

class ClubService extends BaseService {
    model = ClubModel

}

module.exports = new ClubService()