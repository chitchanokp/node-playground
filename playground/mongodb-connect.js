// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err){
    return console.log('Unable to connect to connect MongoDB server')
  }
  console.log('connected to MongoDB')

//   db.collection('Todos').insertOne({
//     text: 'Something to do',
//     complete: false
//   }, (err, result) => {
//       if(err){
//           return console.log('unable to insert todo', err)
//       }
//       console.log(JSON.stringify(result.ops, undefined, 2))
//   });

//   db.collection('Users').insertOne({
//       name: 'proud',
//       age: 23,
//       location: 'Thailand'
//   }, (err,result) => {
//       if(err){
//           return console.log('unable to insert data',err)
//       }
//       console.log(JSON.stringify(result.ops))
      
//   })

  db.close();
})