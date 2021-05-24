const { Answers } = require('../db/model')

async function createAnswer(userId, questionId, ans) {
    const answer = await Answers.create({
        userId: userId,
        questionId: questionId,
        ans: ans
    })
    return answer
}

async function getAllAnsToQuestion(questionId) {
    return await Answers.findAll({where: { questionId: questionId }})
}

module.exports = {
    createAnswer, getAllAnsToQuestion
}