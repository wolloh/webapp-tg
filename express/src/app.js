import express from 'express';
import bodyParser from 'body-parser'
import TelegramBot from 'node-telegram-bot-api'
import cors from 'cors'

const token = '7214812115:AAG3SKiB1G4CZP1AkXrJkZyOWqlMd9_JXUY'
const bot = new TelegramBot(token, {

  polling: true
  
});
const app = express()
const port = 3000
import UserRepository from './repositories/UserRepository.js';
import connection from './database/DbConnection.js';
import { hostname } from 'os';

app.use(bodyParser.json())
app.use(cors())

app.get('/getLeaders', async (req, response) => {
  let userRepository = new UserRepository(connection)

  let users = await userRepository.getLeaders()
  response.send(JSON.stringify(users))
})

app.post('/authorize', async (req, response) => {
  const requestData = req.body
  let userId = requestData.id;
  console.log(userId)
  let userRepository = new UserRepository(connection)
  let existingUser = await userRepository.getUserById(userId)
  console.log(existingUser)
  if(existingUser == undefined)
    userRepository.addUser(requestData.id,requestData.username)
  response.status(200).send()
})

app.get('/check-subscription/:id', async (req, res) => {
  const user = await bot.getChatMember('-1002262995894', req.params.id)
  console.log(user)
  if(user.status == 'left' || user.status == 'kicked')
    res.send(false)
  res.send(true)
})

app.listen(8000, '0.0.0.0', () => {
})