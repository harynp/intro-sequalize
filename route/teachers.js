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

router.get('/add', (req, res) => {
  models.Teachers.findAll()
  .then(data => {
    res.render('addteachers', {data : data, tittle : 'Halaman Tambah Teachers'})
  })
  .catch(err => {
      res.send(err)
  })
})

router.post('/add', (req, res) => {
  // console.log(req.body.subjectsId)
  models.Teachers.build({
      first_name: `${req.body.first_name}`,
      last_name : `${req.body.last_name}`,
      email : `${req.body.email}`,
      subjectsId : `${req.body.subjectsId}`,
      createdAt : new Date(),
      updatedAt : new Date()
  })
  .save()
  .then(students => {
  res.redirect('/teachers')
  })
})


router.get('/delete/:id', (req,res) => {
  models.Teachers.destroy({
    where: {
        id:`${req.params.id}`
    }
  })
  .then(()=> {
    res.redirect('/teachers')
  })
})


router.get('/edit/:id', (req,res) => {
  models.Teachers.findAll({
    where: {
      id:`${req.params.id}`
    }
  })
  .then(data => {
    res.render('teachersedit', {data : data[0], tittle : 'Halaman Edit Teachers'})
  })
})

router.post('/edit/:id', (req,res) => {
models.Teachers.update({
  
       first_name: `${req.body.first_name}`,
       last_name : `${req.body.last_name}`,
       email : `${req.body.email}`,
       subjectsId : `${req.body.subjectsId}`
},
{where: { id : `${req.params.id}`}}

)
  .then(dataTeachers => {
    res.redirect('/teachers');
  })
})


module.exports = router;