const mongoose = require('mongoose')

mongoose.Promise = global.Promise //setup Promise for mongoose
mongoose.connect('mongodb://localhost:27017/TodoApp')

mongoose.exports = {mongoose}