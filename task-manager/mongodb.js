// CRUD

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

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

    userColl.insertOne({
        name: 'Norbert Scheller',
        age: 54
    }, (err, res) => {
        if (err) {
            return console.log('insert error')
        }

        console.log(res.ops)
    })

    userColl.insertMany([
        {
            name: 'Mona',
            age: 40
        },
        {
            name: 'Lina',
            age: 25
        }
    ], (err, res) => {
        if (err) {
            return console.log('error')
        }

        console.log(res.ops)
    })

    tasksColl.insertMany([
        { description: 'Grocery store', completed: false },
        { description: 'Empty shelfs', completed: false },
        { description: 'Move shelfs', completed: false }
        
    ], (err, res) => {
        if (err) {
            return console.log('Error inserting: ' + err.message)
        }

        console.log(res.ops)
    })
})
