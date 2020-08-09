const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../../models/user')

module.exports = {
    createUser: async args => {
        try {
            let userResponse = await User.findOne({email: args.userInput.email})
            if(userResponse) {
                throw new Error("Email Already In Use")
            }

            console.log("Email not the same")

            userResponse = await User.findOne({username: args.userInput.username})
            if(userResponse) {
                throw new Error("Username Already In Use")
            }

            console.log("Username not the same")

            const hashPass = await bcrypt.hash(args.userInput.password, 12)
            const user = new User({
                username: args.userInput.username,
                email: args.userInput.email,
                password: hashPass
            })

            console.log("user made")

            const result = await user.save((err, user) => {
                if(err) console.log(err)
                console.log("Successfully saved ", user.id, " to db")
            })
            if(!result) {
                throw new Error("Failed To Create Error")
            }
            alert("User saved successfully")
            return {
                ...result._doc,
                password: null,
                _id: result.id
            }
        } catch(err) {
            throw err
        }
    }
}