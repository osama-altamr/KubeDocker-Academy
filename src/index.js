const express = require('express')
const mongoose = require('mongoose')
const redis = require('redis')

const port = process.env.port | 4000
const app = express()

const DB_USER = 'root'
const DB_PASS = 'example'

const REDIS_HOST = 'redis'
const REDIS_PORT = 6380

const redisClient = redis.createClient({
  url: `redis://redis:${REDIS_PORT}`
})
  .on('error', err => console.log('Redis Client Error', err))
  .on('connect', ()=> console.log('connected to redis...'))
 
redisClient.connect()

// host => service name
const DB_HOST = 'mongo'
const DB_PORT = 27017

const URI = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}`


mongoose.connect(URI).
  then(() => console.log('connect to db...'))
  .catch((err) => console.log('failed to connect db: ',err))

app.get('/', async(req, res) => {
  redisClient.set('data', 'Data...')
  res.send('<h1> Hello World Now!</h1>')
})


app.get('/data', async(req, res) => {
  const data = await redisClient.get('data')
  res.send(`<h1> Hello World Now!</h1> <h2>${data}</h2>`)
})
app.listen(port, ()=> console.log(`App is up and running on port ${port}`))
