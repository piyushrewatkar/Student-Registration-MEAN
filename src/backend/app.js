const express = require('express');
var bodyParser = require('body-parser');  
const mongoose = require('mongoose');
const Student = require('./studentSchema.js')

const app = express();  
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

app.use( (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods",
    "GET, POST, DELETE, PATCH, OPTIONS, PUT");
    next();
});


const url = "mongodb+srv://piyush_rewatkar:[Enter Password for MongoDB]@testcluster1.jtyhb.mongodb.net/students?retryWrites=true&w=majority";
mongoose.connect(url,  { useNewUrlParser: true }).then(()=>{
    console.log("connected to db.");
})
.catch(()=>{
    console.log("connection error");
})



app.get('/home', (req, res) => {
    var userList;
    Student.find().then(data => {
        res.json(data);
    });
    
});

app.post('/home', (req, res) =>{
  
    const student = new Student({
        name : req.body.name,
        branch : req.body.branch
    });
    student.save();
    res.json();
});

app.delete('/home/:id', (req, res) =>{
    console.log(req.params.id);
    Student.deleteOne({ _id : req.params.id }).then(result => {
        res.json();
    })
    
});

module.exports = app;