const express = require('express')
const router = express.Router()
const models = require('../models')

router.get('/', (req, res) => {
   models.Subjects.findAll()
  .then(data => {
    res.render('subjects', {data : data, tittle : 'Halaman Subjects'})
  })
  .catch(err => {
      res.send(err)
  })
})

module.exports = router;