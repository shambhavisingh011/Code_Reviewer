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
//This file sets up the Express backend server for the code reviewer project. 
//It imports required modules like Express, CORS, and the AI route handler, then creates an app instance. Middleware is added to allow cross-origin requests from the frontend and to parse incoming JSON data.
// A simple test route is defined to confirm the server is running properly. Finally, it connects the AI-related routes under the /ai path and exports the app for use in another file where the server will actually start. 
//This file acts as the core setup point for the backend, making sure the app is properly wired to handle requests and communicate with the frontend.
