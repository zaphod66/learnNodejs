//import mongoose from 'mongoose';
const mongoose = require('mongoose')
const validator = require('validator')

const connectionURL  = 'mongodb://127.0.0.1:27017/task-manager-api'

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Invalid email')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password must not contain "password"')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be positive')
            }
        } 
    }
})

const me = new User({
    name: '   Mona  ',
    email: '   mona@mail.io',
    password: 'rePass3232'
})

// me.save().then((result => {
//     console.log('res: ', result)
// })).catch( (error) => {
//     console.log('error: ', error)
// })

const Task = mongoose.model('Task', {
    description: {
        type: String, 
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const task = new Task({description: '   Finish roofing   '})

task.save().then((res) => {
    console.log('res: ', res)
}).catch((err) => {
    console.log('err: ', err)
})
