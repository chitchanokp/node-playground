const express = require('express')
const bodyParser = require('body-parser')

const {mongoose} = require('./db/mongoose')
const {Todo} = require('./models/todo')
const {User} = require('./models/user')

const app = express()

app.use(bodyParser.json())
app.post('/todos', (request,response) => {
    var todo = new Todo({
        text: request.body.text
    });

    todo.save().then( item => {
        response.send(item)
    }, e => {
        response.status(400).send(e)
    });

})

app.listen(3000, () => {
    console.log('Starting on port 3000')
})