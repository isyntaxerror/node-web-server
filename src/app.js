const path = require('path');
const express = require('express');

const app = express()

const publicPath = path.join(__dirname, '../public ')
app.use(express.static(publicPath))

app.get('', (req, res) => {
    res.send('<h1>Weather</h1>');
});

app.listen(3000, () =>{
    console.log("started server");
});

app.get('/about', (req, res)=>{
 res.send({
     name: "ishaan",
     age: 22
 });
});

app.get('/home', (req, res) =>{
    res.send("nothing");

});
