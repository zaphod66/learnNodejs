const express = require('express')
const Task    = require('../models/task')

const router = new express.Router()

router.post('/tasks', async (req, res) => {
    const task = new Task(req.body)

    try {
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(err)
    }
})

router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.send(tasks)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const task = await Task.findById(_id)
        if (!task) {
            return res.status(404).send()
        }

        res.send(task)
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/tasks/:id', async (req, res) => {
    const _id = req.params.id
    const upd = req.body

    const updates = Object.keys(upd)
    const allowedUpdates = ['description', 'completed']
    const isValid = updates.every( (update) => allowedUpdates.includes(update))

    if (!isValid) {
        return res.status(400).send({ error: 'Invalid Operation'})
    }

    try {
        const task = await Task.findByIdAndUpdate(_id, upd, { new: true, runValidators: true })

        if (!task) {
            return req.status(404).send()
        }

        res.send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)

        if (!task) {
            res.status(404).send()
        }

        res.send(task)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router
