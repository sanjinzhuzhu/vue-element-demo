const express = require('express')
const app = express()
const courseData = require('./mock/course/courseData')
console.log(courseData)
app.get('/', function(req, res) {
  res.send('Hello World')
})
app.get('/course', function(req, res) {
  res.send(courseData.data)
})

app.listen(3000)
