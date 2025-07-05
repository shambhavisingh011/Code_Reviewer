const aiService = require("../services/ai.service")
module.exports.getReview = async(req,res)=>{
  const code = req.body.code;
  if(!code){
    return res.status(400).send("Prompt is required");
  }
  const response = await aiService(code);
  res.send(response);
}//This code defines a backend controller function called `getReview`, which handles code review requests sent from the frontend. 
//It starts by importing an `aiService` function from another file, which is responsible for generating the AI-based review. When a request is received, the function extracts the `code` from the request body. 
//If no code is provided, it sends back a `400 Bad Request` error with the message "Prompt is required". If the code is present, it passes it to the `aiService` function using `await` to wait for the AI to respond. 
//Once the response is received, it sends that back to the frontend. This function ensures that only valid requests are processed and that the user receives meaningful AI-generated feedback on their code.


