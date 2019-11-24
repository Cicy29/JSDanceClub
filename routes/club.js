const express = require('express')
const router = express.Router()

const ClubService = require('../services/club-service')

router.get('/all', async (req, res) => {
    const clubs = await ClubService.findAll()
    res.render('list', {
        items: clubs
    })
})

router.get('/:id', async (req, res) => {
    const club = await ClubService.find(req.params.id)
    res.render('data', {
        data: club
    })
})

router.post('/', async (req, res) => {
    const club = await ClubService.add(req.body)
    res.send(club)
})

router.delete('/:id', async (req, res) => {
    const club = await ClubService.del(req.params.id)
    res.send(club)
})

module.exports = router