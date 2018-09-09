// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err){
    return console.log('Unable to connect to connect MongoDB server')
  }
  console.log('connected to MongoDB')
 
  db.collection('Todos').find({complete: false}).toArray().then( docs => {
    console.log('Todos')
    console.log(JSON.stringify(docs, undefined, 2))
  }, (err) => {
    console.log('unable to fetch todos', err)
  })

  // db.close();
})