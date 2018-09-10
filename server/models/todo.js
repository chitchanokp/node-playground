const mongoose = require('mongoose')

var Todo = mongoose.model('Todo', { //constructure
    text: {
      type: String,
      required: true,
      minlength: 3,
      trim: true //remove white space
    },
    completed: {
      type: Boolean,
      default: false
    },
    completedAt: {
      type: Number,
      default: null
    }
});

module.exports = {Todo}

    // let newTodo = new Todo({
    //     text: 'jurina',
    //     completed: true,
    //     completedAt: 70918
    // })

//     let newTodo = new Todo({
//         text: 'matsui jurina',
//     })

// newTodo.save().then(item => {
//     console.log('save todo',item)
// }, (e) => {
//     console.log('unable to save todo', e)
// });