// const Router = require('express').Router()
const { Users } = require('../db/model')

async function createUser(username, name, password) {
    const user = await Users.create({
        username: username,
        name: name,
        password: password
    })

    return user
}

async function getUserById(id) {
    return await Users.findOne({where: {id}})
}

async function getUserByUsername(username) {
    return await Users.findOne({ where : {username}})
}

async function completeUserProfile( username, password, rollno, branch, semester, college) {
    const user = await getUserByUsername(username)
    
    if(userVerification(user, username, password)) {
        user.update({
            
            rollno: rollno,
            branch: branch,
            semester: semester,
            college: college
        })
    }
    user.save()
    // console.log(user)
    return user;
}

async function userVerification(user ,username, password) {
    if(user.username == username && user.password == password) {
        return true;
    }
    else {
        return false;
    }
}

module.exports = {
    createUser,
    getUserById,
    getUserByUsername,
    completeUserProfile
}