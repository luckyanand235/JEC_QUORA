const { Router } = require('express')

const {
    createQuestion,
    getAllQuestions,
    getAllQuestionsOfAUser
} = require('../../controller/questions')

const route = Router()


route.get('/', async(req, res) => {
    let userId = req.body.userId
    let questions;
    
    
    console.log(userId, typeof(userId))
    questions = await getAllQuestions(userId);

    if(questions) {
        res.status(200).send(questions)
    } else {
        res.status(404).send({
            error: "No Questions found"
        })
    }
    // console.log(question)
})

route.get('/:userId', async (req, res) => {
    let questions;
    const userId = req.params.userId;

    questions = await getAllQuestionsOfAUser(userId)
    if(questions) {
        res.status(200).send(questions)
    } else {
        res.status(404).send({
            error: "No Questions found"
        })
    }
})

route.post('/', async(req, res) => {
    const { userId, que } = req.body

    if((!userId) || (!que)) {
        res.status(400).send({
            error: 'Need question'
        })
    }
    const question = await createQuestion(userId, que)
    res.status(201).send(question)
})

module.exports = {
    questionRoute: route
}
