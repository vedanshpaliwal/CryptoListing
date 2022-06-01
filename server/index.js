// const express = require('express')
import express from 'express';
import dotenv from 'dotenv';
import connection from './database/db.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './routes/routes.js';
const app = express()

app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use('/', router);



dotenv.config()
const PORT = process.env.PORT || 8000
connection();





app.listen(PORT, () => {
    console.log(`Server is Running at port ${PORT}`)
})







