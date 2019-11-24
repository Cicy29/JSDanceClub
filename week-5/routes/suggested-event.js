const express = require('express')
const router = express.Router()

const SuggestedEventService = require('../services/suggested-event-service')

router.get('/all', async (req, res) => {
    const suggestedEvents = await suggestedEventService.findAll()
    res.render('list', {
        items: suggestedEvents
    })
})

router.get('/:id', async (req, res) => {
    const suggestedEvent = await SuggestedEventService.find(req.params.id)
    res.render('data', {
        data: suggestedEvent
    })
})

router.post('/', async (req, res) => {
    const suggestedEvent = await SuggestedEventService.add(req.body)
    res.send(suggestedEvent)
})

router.delete('/:id', async (req, res) => {
    const suggestedEvent = await SuggestedEventService.del(req.params.id)
    res.send(suggestedEvent)
})

module.exports = router