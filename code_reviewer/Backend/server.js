const cors = require("cors");
app.use(cors());

require('dotenv').config()// through this we can access the google gemini api key
const app = require("./src/app")

//if we want to start the server we use this method which start server at port 3000
app.listen(3000,()=>{
  console.log('Server is running on http:// localhost:3000')
})

