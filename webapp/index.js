const express = require('express');
  
const app = express();
const PORT = norma
const HOST = process.env.HOST;

app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to the server, made with NodeJS and express");

});


app.listen(PORT, HOST => {
  console.log(`Example app listening on port ${PORT}, ${HOST}`)
})