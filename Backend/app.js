const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');


app.use(cors());


app.get('/', (req, res)=>{
    res.send("Hello UBER")
})

app.listen(3000, ()=>{
    console.log(`Server is running on 3000 `);
})    


module.exports = app;

