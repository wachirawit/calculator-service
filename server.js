const express = require('express')
const app = express();

app.get('/',(req,res)=>{
    var data = {
        message: 'Welcome to our Calculator Service'
        };
    res.send(data)
})

//Add route
app.get('/calculator/add/:num1/:num2',(req,res)=>{
    const num1 = parseInt(req.params.num1)
    const num2 = parseInt(req.params.num2)
    var data = {
        answer: num1 + num2
        };
    res.send(data)
})

//Subtract route
app.get('/calculator/sub/:num1/:num2',(req,res)=>{
    const num1 = parseInt(req.params.num1)
    const num2 = parseInt(req.params.num2)
    var data = {
        answer: num1 - num2
        };
    res.send(data)
})


//Multiply route
app.get('/calculator/multi/:num1/:num2',(req,res)=>{
    const num1 = parseInt(req.params.num1)
    const num2 = parseInt(req.params.num2)
    var data = {
        answer: num1 * num2
        };
    res.send(data)
})

//Division route
app.get('/calculator/div/:num1/:num2',(req,res)=>{
    const num1 = parseInt(req.params.num1)
    const num2 = parseInt(req.params.num2)
    var data = {
        answer: num1 / num2
        };
    res.send(data)
})
app.listen(3000,()=>console.log('Server Running port 3000'))