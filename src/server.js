const express = require('express')
const dotenv = require('dotenv')

const { db } = require('./db/model')
const { userRoute } = require('./routes/users/index')
const { questionRoute } = require('./routes/questions/index')
const { answerRoute } = require('./routes/answers/index')
const { urlencoded } = require('express')


const app = express()


dotenv.config()
const PORT = process.env.PORT

app.use(express.json())
app.use(urlencoded({extended: true}))




app.use('/api/users', userRoute)
app.use('/api/questions', questionRoute)
app.use('/api/answers', answerRoute)

app.use('/', express.static(__dirname + '/public'))

db.sync(/*{force: true}*/)
    .then(() => {
        app.listen(PORT, ()=> console.log(`Server is started at ${process.env.URL}:${PORT}`))
    })
    .catch((err) => {
        console.error(new Error('could not start database'))
        console.log(err)
    })


