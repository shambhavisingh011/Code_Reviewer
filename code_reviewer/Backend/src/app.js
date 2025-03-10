const express = require('express');
const aiRoutes = require('./routes/ai.routes')
const cors = require('cors')
const app = express() // a server is created when this is called, server is not started
// dummy route check if server is working or not
app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.use('/ai',aiRoutes)
module.exports = app