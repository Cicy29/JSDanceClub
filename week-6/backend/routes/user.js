const express = require('express')
const router = express.Router()

const UserService = require('../services/user-service')
const ClubService = require('../services/club-service')
const SuggestedEventService = require('../services/suggested-event-service')

router.get('/all', async (req, res) => {
    const people = await UserService.findAll()
    res.render('list', {
        items: people
    })
})

router.get('/all/json', async (req, res) => {
    const people = await UserService.findAll()
    res.send(people)
})

router.get('/:id', async (req, res) => {
    const user = await UserService.find(req.params.id)
    if (!user) res.status(404)
    res.render('data', {
        data: user
    })
})

router.get('/:id/json', async (req, res) => {
    const user = await UserService.find(req.params.id)
    if (!user) res.status(404)
    res.send(user)
})

router.post('/', async (req, res) => {
    const user = await UserService.add(req.body)
    res.send(user)
})

router.delete('/:id', async (req, res) => {
    const user = await UserService.del(req.params.id)
    res.send(user)
})

router.post('/:id/clubs', async (req, res) => {
    const user = await UserService.find(req.params.id)
    const club = await ClubService.find(req.body.meetup)
    await UserService.wantsToPartyat(user, club)

    res.send(user)
})

router.get('/:id/peers-under-30', async (req, res) => {
    const user = await UserService.find(req.params.id)
    const peers = await user.findPeersUnder30()
    res.send(peers)
})

module.exports = router