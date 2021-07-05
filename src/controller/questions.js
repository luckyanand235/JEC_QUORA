const { Questions, Users, Answers } = require('../db/model')
const { sequelize, Op, NUMBER } = require('sequelize')

async function createQuestion(userId, que) {
    const question = await Questions.create({
        userId: userId,
        que: que
    })
    return question
}

async function getAllQuestions(userid) {
    userid = Number(userid)
    console.log(userid, typeof(userid))
    const questions = await Questions.findAll({
        include: [ Users ],
        order: [['updatedAt', 'DESC']],
        where: {
            userId: {
                [Op.not]: userid
            }
        }
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