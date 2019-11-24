const express = require('express')
const UserService = require('./services/user-service')
const bodyParser = require('body-parser')
const path = require('path')

require('./mongo-connection')

const app = express()

app.set('view engine', 'pug')
app.use(bodyParser.json())

app.use('/user', userRouter)
app.use('/club', clubRouter)
app.use('/suggestedEvent', suggestedEventRouter)

app.get('/', (req, res) => {
    res.render('index')
})
// app.listen(3000, () => {
//     console.log('Server listening')
// })

const DEFAULT_PORT = 3000;
const PORT = process.env.PORT || DEFAULT_PORT;

app.listen(PORT, () => {
    console.info(`server has started on port ${PORT}`);
});