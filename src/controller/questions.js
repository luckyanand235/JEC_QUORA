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

async function getAllQuestionsOfAUser(userId) {
    return await Questions.findAll({where : { userId: userId }})
}




module.exports = {
    createQuestion,
    getAllQuestions,
    getAllQuestionsOfAUser
}