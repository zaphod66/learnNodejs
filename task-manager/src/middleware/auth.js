const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async (req, res, next) => {
    try {
        const token   = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, 'this is my secret')
        const user    = await User.findOne({ _id: decoded._id, 'tokens.token': token })

        if (!user) {
            throw new Error()
        }

        req.user = user // store user within req, so route handlers have access to it, w/o fetching it from the database
        next()
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.'})
    }
}

module.exports = auth
