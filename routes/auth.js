const express = require('express');
const { check } = require('express-validator')
const router = express.Router();
const UserController = require('../controllers/auth.controller')

router.post('/register', [
    check('email', 'email is not Valid').isEmail(),
    check('password', 'password is not satisfied').isLength({ min: 3, max: 10 }),
    ], async (req, res) => {
    const { success } = await UserController.register(req.body)
    if (success) {
        return res.status(200).json({ message: "Inscription terminé. Veillez vous connecter à votre compte" })
    } else {
        return res.status(200).json({ message: "Quelque chose s'est mal passé. Veillez réessayer" })
    }
    }
    
);
module.exports = router

