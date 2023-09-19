const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log('Server created')
   res.json('Hello World!')
 
})
app.get('/about', (req, res) => {
    console.log('Server created')
   res.json('Hello World! about page')
 
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})