const express = require('express')

const port = process.env.port | 4000
const app = express()

app.get('/', (req, res) => {
   res.send('<h1> Hello World Now!</h1>')
})

app.listen(port, ()=> console.log(`App is up and running on port ${port}`))
