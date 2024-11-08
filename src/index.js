const express = require('express')

const port = 4000
const app = express()

app.get('/', (req, res) => {
   res.send('<h1> Hello World !</h1>')
})

app.listen(4000, ()=> console.log(`App is up and running on port ${port}`))
