const { Router } = require('express')

const { 
    createAnswer,
    getAllAnsToQuestion,
    getTopThreeQue
} = require('../../controller/answers')

const route = Router()

route.get('/:questionId', async(req, res) => {
    let answers;
    const questionId = req.params.questionId
    answers = await getAllAnsToQuestion(questionId)

    if(answers) {
        res.status(200).send(answers)
    } else {
        res.status(404).send({
            error: "No ans is found for that question"
        })
    }
})

// route.get('/few/:questionId', async(req, res) => {
//     let answers;
//     const questionId = req.params.questionId
//     answers = await getTopThreeQue(questionId)

//     if(answers) {
//         res.status(200).send(answers)
//     } else {
//         res.status(404).send({
//             error: "No ans is found for that question"
//         })
//     }
// })

route.post('/', async(req, res) => {
    const { userId, questionId, ans } = req.body

    if((!userId) || (!questionId) || (!ans)) {
        res.status(400).send({
            error: "Answer Needed"
        })
    }
    const answers = await createAnswer(userId, questionId, ans)
    res.status(201).send(answers)
})

module.exports = {
    answerRoute: route
}