const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../../models/user')

module.exports = {
    createUser: async args => {
        try {
            let userResponse = await User.findOne({ email: args.userInput.email })
            if (userResponse) {
                throw new Error("Email Already In Use")
            }

            userResponse = await User.findOne({ username: args.userInput.username })
            if (userResponse) {
                throw new Error("Username Already In Use")
            }

            const hashPass = await bcrypt.hash(args.userInput.password, 12)
            const user = new User({
                name: args.userInput.name,
                username: args.userInput.username,
                email: args.userInput.email,
                password: hashPass
            })

            const result = await user.save()
            return {
                ...result._doc,
                password: null,
                _id: result.id
            }
        } catch (err) {
            throw err
        }
    }
}