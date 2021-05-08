const express= require('express')
const app= express();
const path=require('path')
const port =80;


app.use('/static', express.static('public'));



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