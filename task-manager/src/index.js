const express = require('express')
require('./db/mongoose.js')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app  = express()
const port = process.env.PORT || 3000

// app.use( (req, res, next) => {
//     console.log('req', req.method, req.path)

// //    res.status(401).send()
//     next()
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const jwt = require('jsonwebtoken')

const myFunc = async () => {
    const token = jwt.sign( { _id: 'dummyId' }, 'thisismynewcourse', { expiresIn: '2 days'})
    console.log('token', token)

    const payload = jwt.verify(token, 'thisismynewcourse')
    console.log('payload', payload)
}

myFunc()
