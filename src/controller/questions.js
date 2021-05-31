const { Questions, Users, Answers } = require('../db/model')


async function createQuestion(userId, que) {
    const question = await Questions.create({
        userId: userId,
        que: que
    })
    return question
}

async function getAllQuestions() {
    const questions = await Questions.findAll({
        include: [ Users ],
        order: [['updatedAt', 'DESC']]
    })
    return questions
}

async function getAllQuestionsOfAUser(userId) {
    return await Questions.findAll({
        where : { userId: userId }
        }, {
        include: [ Answers ],
        order: [['updatedAt', 'DESC']]
    })
}




module.exports = {
    createQuestion,
    getAllQuestions,
    getAllQuestionsOfAUser,
}