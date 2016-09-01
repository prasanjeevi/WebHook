// app.js
'use strict';
const express = require('express');
const app = express();
const port = process.env.WEBHOOK_SERVER;
const bodyParser = require('body-parser')

app.use(bodyParser.json());

//LIST
app.get('/', function (req, res) {
  res.json({message:'Hello'+req.params.name});
});

//CREATE
app.post('/', (req, res) => {
    let hook = req.body;
    console.log(hook.name);
    res.send('ok');
});

//EDIT
app.put('/', (req, res) => {
    let hook = req.body;
   
    if(hook.id === undefined){
        res.status(400).json({"message":"id is required"});
    }
    else{
        console.log(hook.name);
        res.send({"modified_name": hook.name});
    }
});

//DELETE
app.delete('/:id', (req, res) => {
    res.send(req.params.id);
});

app.listen(port, function () {
  console.log('Example app listening on port', port);
});