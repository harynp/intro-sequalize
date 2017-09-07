const express = require('express')
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.set('view engine', 'ejs');


let index = require('./route/index.js')
let teachers = require('./route/teachers.js');
let subjects = require('./route/subjects.js');
let students = require('./route/students.js');

app.use('/',index)
app.use('/teachers',teachers);
app.use('/subjects',subjects);
app.use('/students',students);


app.listen(3000, function() {
    console.log('express app now listeng 3000');
  });

