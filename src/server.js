const express = require('express')
const dotenv = require('dotenv')

const { db } = require('./db/model')
const { userRoute } = require('./routes/users/index')
const { urlencoded } = require('express')


const app = express()


dotenv.config()
const PORT = process.env.PORT

app.use(express.json())
app.use(urlencoded({extended: true}))




app.use('/api/users', userRoute)

app.use('/', express.static(__dirname + '/public'))

db.sync()
    .then(() => {
        app.listen(PORT, ()=> console.log(`Server is started at ${process.env.URL}:${PORT}`))
    })
    .catch((err) => {
        console.error(new Error('could not start database'))
        console.log(err)
    })


