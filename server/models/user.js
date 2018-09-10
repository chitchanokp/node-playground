const mongoose = require('mongoose')

    var User = mongoose.model('User', {
        email: {
            type: String,
            required: true,
            trim: true,
            minlength: 1
        }
    });

    module.exports = {User}
    // let user = new User({
    //     email: 'jurina38@mail.com'
    // })

    // user.save().then( user => {
    //     console.log('User save ',user)
    // }, (e) => {
    //     console.log('unable to save user')
    // })