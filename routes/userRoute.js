const express = require('express')
const router = express.Router()
const UserController = require('../controllers/user.controller')


router.get('/user/:id', async(req, res) => {
    const userId = req.params.id
    const user = await UserController.register(userId)
    if (user !== null) {
        res.status(200).json(user)
    } else {
        res.status(404).json({ message: 'User not found' })
    }
})
