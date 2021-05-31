const { Answers, Users } = require('../db/model')

async function createAnswer(userId, questionId, ans) {
    const answer = await Answers.create({
        userId: userId,
        questionId: questionId,
        ans: ans
    })
    return answer
}

async function getAllAnsToQuestion(questionId) {
    return await Answers.findAll({where: { questionId: questionId }, 
        include: [Users]
    })
}

async function getTopThreeQue(questionId) {
    return await Answers.findAll({
        where: {
            questionId: questionId
        },
        limit: 3,
        order: ['upvote', 'DESC'],
        order: ['updateAt', 'DESC']
    })
}

module.exports = {
    createAnswer, getAllAnsToQuestion, getTopThreeQue
}