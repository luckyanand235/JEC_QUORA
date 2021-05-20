const express = require('express')
const dotenv = require('dotenv')

const app = express()

dotenv.config()
const PORT = process.env.PORT



app.listen(PORT, ()=> console.log(`Server is started at ${process.env.URL}:${PORT}`))