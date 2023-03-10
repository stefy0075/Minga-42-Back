import express from 'express' 
import 'dotenv/config.js'
import './config/database.js'
import path from 'path'
import logger from 'morgan'
import indexRouter from './routes/index.js'
import usersRouter from './routes/users.js'
import { __dirname } from './utils.js'

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade');

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)

export default app
