const express = require('express')

const search = require('./utils/search')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  if (!req.query.firstName || !req.query.lastName) {
    return res.send({
      error: 'You must provide a first name and a last name'
    })
  }
  search(req.query.firstName, req.query.lastName, (error, data) => {
    if (error) {
      return res.send({ error })
    }
    res.send(data)
  })
})

app.get('*', (req, res) => {
  res.send({
    error: 'Error 404'
  })
});

module.exports = app
