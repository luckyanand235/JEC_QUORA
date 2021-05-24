const { Router } = require('express')

const {
    createQuestion,
    getAllQuestions
} = require('../../controller/questions')

const route = Router()

route.get('/', async(req, res) => {
    let question;

    question = await getAllQuestions();

    if(question) {
        res.status(200).send(question)
    } else {
        res.status(404).send({
            error: "No Questions found"
        })
    }
    // console.log(question)
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
