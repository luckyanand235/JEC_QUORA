const { Router } = require('express')

const {
    createUser,
    getUserById,
    getUserByUsername,
    completeUserProfile
} = require('../../controller/users')

const route = Router()

route.get('/:username', async(req, res) => {
    let user;

    const username = req.params.username
    console.log(username)
    user = await getUserByUsername(username)

    if(user) {
        res.status(200).send(user)
    } else {
        res.status(404).send({
            error: 'No such username exist'
        })
    }
    console.log(user)
})

route.post('/', async(req, res) => {
    const { username, name, password } = req.body
    // console.log(username, name, password)
    if((!username) || (!name) || (!password)) {
        return res.status(400).send({
            error: 'Need username, name, and password'
        })
    }
    const user = await createUser(username, name, password)
    res.status(201).send(user)
})

module.exports = {
    userRoute: route
}

