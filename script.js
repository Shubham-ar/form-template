const express= require('express')
const app= express();
const path=require('path')
const port =80;

//code to add mongoose in the js file
var mongoose= require('mongoose');
// code to make a db named userDetails and to connect to it
mongoose.connect('mongodb://localhost/userDetails',{useNewUrlParser:true})
// We are creating a table or collection of the data we are about to enter
var userSchema =new mongoose.Schema({
  firstName:String,
  lastName:String,
  contact:String,
  emailID:String
})



app.use('/static', express.static('public'));



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