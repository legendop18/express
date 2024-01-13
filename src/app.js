const dotenv = require("dotenv")
const express = require('express')
const cookieparser = require('cookie-parser')
const cors = require('cors')
const app = express()
dotenv.config()


app.use(cors({
    origin: process.env.CORS_ORGIN,
    Credential: true
}))

app.use(express.json({limit:"32kb"}))
app.use(express.urlencoded({extended :true}))
app.use(express.static("public"))




module.exports = app