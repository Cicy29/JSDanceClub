const express = require('express')
const UserService = require('./services/user-service')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

app.set('view engine', 'pug')
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/user/all', async (req, res) => {
    const people = await UserService.findAll()
    res.render('user', {
        people
    })
})

app.get('/user/:id', async (req, res) => {
    const partyHuman = await UserService.find(req.params.id)
    res.send(partyHuman)
})

app.post('/user', async (req, res) => {
    const partyHuman = await UserService.add(req.body)
    res.send(partyHuman)
})

app.delete('/user/:id', async (req, res) => {
    const partyHuman = await UserService.del(req.params.id)
    res.send(partyHuman)
})

// app.listen(3000, () => {
//     console.log('Server listening')
// })

const DEFAULT_PORT = 3000;
const PORT = process.env.PORT || DEFAULT_PORT;

app.listen(PORT, () => {
    console.info(`server has started on port ${PORT}`);
});