// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err){
    return console.log('Unable to connect to connect MongoDB server')
  }
  console.log('connected to MongoDB')
 
  // delete many
  // db.collection('Todos').deleteMany({text: 'finding jurina'}).then( result =>{
  //   console.log(result)
  // })

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'find jurina'}).then( result => {
  //   console.log(result)
  // })

  // find one and delete
  // db.collection('Todos').findOneAndDelete({complete: false}).then( result => {
  //   console.log(result)
  // })

  db.collection('Users').findOneAndDelete({_id: new ObjectID("5b94cfda6e9c202134647c4a")}).then( result => {
    console.log(JSON.stringify(result,undefined,2))
  })

  // db.close();
})