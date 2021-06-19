const express = require('express');
const cors = require('cors');
const app = express();
const users = require('./user.json');
app.use(cors())
app.use(express.json());
app.listen(4000,()=>{
    console.log('it is listening you dude')
})

app.get('/remedial',(req,res)=>{
    
    res.json('hello there');
})
app.post('/failure',(req,res)=>{
    let{ name,lastName} = req.body;
    res.json({
        "name": name,
        "LastName": lastName

    })
    
    
})