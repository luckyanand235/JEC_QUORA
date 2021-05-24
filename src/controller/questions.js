const { Questions } = require('../db/model')

async function createQuestion(userId, que) {
    const question = await Questions.create({
        userId: userId,
        que: que
    })
    return question
}

async function getAllQuestions() {
    return await Questions.findAll()
}




module.exports = {
    createQuestion,
    getAllQuestions
}