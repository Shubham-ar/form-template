const express= require('express')
const app= express();
const path=require('path')
const port =80;


var mongoose= require('mongoose');
mongoose.connect('mongodb://localhost/userDetails',{useNewUrlParser:true})

app.use('/static', express.static('public'));

var userSchema =new mongoose.Schema({
  firstName:String,
  lastName:String,
  contact:String,
  emailID:String
})

var user= mongoose.model('User',userSchema)


app.get('/', (req, res)=> {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/index', (req, res)=> {
    res.sendFile(path.join(__dirname, '/index.html'));
  });

app.get('/joinus', (req, res)=> {
  res.sendFile(path.join(__dirname, '/joinus.htm'));
});


app.listen(port,()=>{
    console.log("app completed succesfully");
})