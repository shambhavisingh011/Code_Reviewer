require('dotenv').config()
const app = require('./src/app')



app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})
//This code serves as the main entry point for starting the backend server in the project.
//It begins by loading environment variables using `dotenv`, which helps securely manage sensitive information like API keys. Next, it imports the Express app from the `app.js` file, which contains all the middleware and route configurations.
//Finally, it starts the server by calling `app.listen(3000)`, making the backend available at `http://localhost:3000`. 
//This file plays a crucial role in the project as it brings the entire backend to life, enabling it to accept requests from the frontend, forward code to the AI service for review, and return the results. 
//Without this file, the backend setup would exist but wouldn’t be functional or accessible.
