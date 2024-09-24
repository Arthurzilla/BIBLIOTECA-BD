const mongoose = require('mongoose')
const express = require('express')
const Livro = require('./src/models/Livro')
const app = express();
const livroRoute = require('./src/routes/livro.route')
const connectDB = require('./src/database/db')

connectDB()

app.use(express.json())

app.use('/',livroRoute )

app.listen(3000)

