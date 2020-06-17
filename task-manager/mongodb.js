// CRUD

const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const id = new ObjectID()
console.log(id)
console.log(id.getTimestamp())

const connectionURL  = 'mongodb://127.0.0.1:27017'
const databaseName   = 'task-manager'
const userCollName   = 'users'
const tasksCollName  = 'tasks'

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to ' + connectionURL)
    }

    const db = client.db(databaseName)
    const userColl  = db.collection(userCollName)
    const tasksColl = db.collection(tasksCollName)

    userColl.updateOne({
        _id: new ObjectID("5ee3acea105a9ba4a79b62c7")
    }, {
        $set: {
            name: 'Lara'
        },
        $inc: {
            age: 1
        }
    }).then( (result) => {
        console.log('res: ' + result)
    }).catch( (error) => {
        console.log('err: ' + error)
    })

    // tasksColl.updateMany({}, {
    //     $set: {
    //         completed: true
    //     }
    // }).then( (result) => {
    //     console.log('modified: ' + result.modifiedCount)
    // }).catch( (err) => {
    //     console.log('err: ' + err)
    // })

    userColl.deleteMany( {
        age: 54
    }).then( (result) => {
        console.log('del: ' + result)
    }).catch( (error) => {
        console.log('err: ' + error)
    })

    // userColl.findOne( { name: 'Mona' }, (err, doc) => {
    //     if (err) {
    //         return console.log(err)
    //     }

    //     if (doc) {
    //         console.log(doc)
    //         console.log(doc._id.getTimestamp())
    //     } else {
    //         console.log('Nothing found!')
    //     }
    // })

    // userColl.find( { name: 'Lina'} ).toArray( (err, docs) => {
    //     console.log(docs)
    // })

    // userColl.find( { name: 'Lina'} ).count( (err, count) => {
    //     console.log(count)
    // })


    // userColl.insertOne({
    //     name: 'Norbert Scheller',
    //     age: 54
    // }, (err, res) => {
    //     if (err) {
    //         return console.log('insert error')
    //     }

    //     console.log(res.ops)
    // })

    // userColl.insertMany([
    //     {
    //         name: 'Mona',
    //         age: 40
    //     },
    //     {
    //         name: 'Lina',
    //         age: 25
    //     }
    // ], (err, res) => {
    //     if (err) {
    //         return console.log('error')
    //     }

    //     console.log(res.ops)
    // })

    // tasksColl.insertMany([
    //     { description: 'Grocery store', completed: false },
    //     { description: 'Empty shelfs', completed: false },
    //     { description: 'Move shelfs', completed: false }
        
    // ], (err, res) => {
    //     if (err) {
    //         return console.log('Error inserting: ' + err.message)
    //     }

    //     console.log(res.ops)
    // })


})
