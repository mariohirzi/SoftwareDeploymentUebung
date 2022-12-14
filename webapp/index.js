const express = require('express');
  
const app = express();
const PORT = 3000;

app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to the server, made with NodeJS and express");

});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})