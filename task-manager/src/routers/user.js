const express = require('express')
const User    = require('../models/user')
const auth    = require('../middleware/auth')

const router = new express.Router()

router.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        const token = await user.generateAuthToken()

        res.status(201).send({ user, token })
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/users/login', async (req, res) => {
    try {
        const user  = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()

        res.send( { user, token })
    } catch(e) {
        res.status(400).send()
    }
})

// only a test route, no specific purpose
router.get('/users', auth, async (req, res) => {
    try {
        const users = await User.find( {} )
        res.send(users)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/users/me', auth, async (req, res) => {
    res.send(req.user)
})

router.get('/users/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const user = await User.findById(_id)

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (err) {
        res.status(500).send()
    }
})

router.patch('/users/:id', async (req, res) => {
    const _id = req.params.id
    const upd = req.body

    const updates = Object.keys(upd)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValid = updates.every( (update) => allowedUpdates.includes(update))

    if (!isValid) {
        return res.status(400).send({ error: 'Invalid Operation'})
    }

    try {
        const user = await User.findById(_id)
        if (!user) {
            return res.status(404).send()
        }

        updates.forEach( (update) => user[update] = upd[update] )
        await user.save()

        res.send(user)
    } catch (e) {
        console.log('user catch')
        res.status(400).send(e)
    }
})

router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)

        if (!user) {
            res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router
