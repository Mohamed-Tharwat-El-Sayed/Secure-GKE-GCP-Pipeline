const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => {
    res.send('Hi this FINAL PROJECT for ITI 3 Months DevOps Track By Mohamed Tharwat Elsayed')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })