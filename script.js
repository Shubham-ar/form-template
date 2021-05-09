const express= require('express')
const app= express();
const path=require('path')
const bodyparser= require('body-parser')
const port =80;

//code to add mongoose in the js file
var mongoose= require('mongoose');
// code to make a db named userDetails and to connect to it
mongoose.connect('mongodb://localhost/userDetails',{useNewUrlParser:true})
// We are creating a schema of what data will be entered
var userSchema =new mongoose.Schema({
  firstname :String,
  lastname :String,
  emailid :String,
  phonenumber :String
})
//Now we need to create a model of the schema to make insertion and deletion easier
var User= mongoose.model('User',userSchema);

//to serve static files like css and fotos into the server created. to serve files, one must specify their paths as /static/anthing.css
app.use('/static', express.static('public'));


// i was not using this app.use express.urlencoded that's why i was getting null values in post request and req.body
app.use(express.urlencoded())


app.get('/', (req, res)=> {
  res.sendFile(path.join(__dirname, '/index.html'));
});

// app.get('/index', (req, res)=> {
//     res.sendFile(path.join(__dirname, '/index.html'));
//   });

app.get('/joinus', (req, res)=> {
  res.sendFile(path.join(__dirname, '/joinus.htm'));
});


// app.post('/joinus', (req, res)=> {
//   var data= new User(req.body);
//   data.save().then(()=>{
//     res.send(alert('Form Submitted Succesfully, Thank You!'))
//   }).catch(()=>{
//     res.status(404).send("data not saved")
//   });
// });

app.post('/joinus', (req, res)=> {
  var data= new User(req.body);
  data.save((err,doc)=>{
    if(err){
      res.send(err);
    }
    res.send("The document submitted succesfully")
  })
});

app.listen(port,()=>{
    console.log("app completed succesfully");
})