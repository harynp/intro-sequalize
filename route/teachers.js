const express = require('express')
const router = express.Router()
const models = require('../models')

router.get('/', (req, res) => {
  models.Teachers.findAll()
  .then(data => {
    res.render('teachers', {data : data, tittle : 'Halaman Teachers'})
  })
  .catch(err => {
      res.send(err)
  })
})

module.exports = router;