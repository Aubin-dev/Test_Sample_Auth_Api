
const {v4:uuidv4}=require('uuid');
const bcrypt = require('bcrypt')
const User = require('../models/user')


module.exports = class UserController{
    static async register(data){
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(data.password, salt)

        const userData = {
            email: data.email,
            password: hashedPassword,
        }
        const user = new User({...userData})
        const output = await user.save()
        if (output) {
            return { success: true }
        } 
        else {
            return { success: false }
        }
    }
    

}

