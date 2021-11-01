const express = require('express');

const app = express()

app.get('', (req, res) => {
    res.send('<h1>Weather</h1>');
});

app.listen(3000, () => {
    console.log("server is up on port 3000!");
});

app.get('/about', (req, res)=>{
 res.send({
     name: "ishaan",
     age: 22
 });
});

app.get('/home', (req, res) =>{
    res.send("this is the home page");
});