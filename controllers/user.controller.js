const User = require('../models/user')

module.exports = class UserController {

    // GET NEW
    static async getUser(data) {
        const user = User.findById(data)
        if (user) {
            return user
        } else {
            return { message: "user not found" }
        }
    }
}