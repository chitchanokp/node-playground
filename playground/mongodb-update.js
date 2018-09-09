// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err){
    return console.log('Unable to connect to connect MongoDB server')
  }
  console.log('connected to MongoDB')
  
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5b94ce7a6e9c202134647c49')
  // }, {
  //   $set: {
  //     complete: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then(result => {
  //   console.log(result)
  // });

    db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b94cfe46e9c202134647c4b')
  }, {
    $set: {
      name: 'matsui jurina',
      location: 'nagoya'
    }, 
    $inc: { //increment
      age: -2
    }
  }, {
    returnOriginal: false
  }).then(result => {
    console.log(result)
  });

  // db.close();
})