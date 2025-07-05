const express = require("express");
const aiController = require("../controllers/ai.controller")
const router = express.Router();

router.post("/get-review",aiController.getReview)
module.exports = router;
//This code sets up a route handler in an Express.js application specifically for processing AI-based code reviews. 
//It imports the necessary Express framework and the getReview function from the AI controller, then creates a router using express.Router()
// A POST route is defined at /get-review, which means when a user sends code through a POST request to this endpoint, the getReview function is triggered to handle the request. 
//This router is then exported so it can be used in the main server file. The role of this code in the project is to manage and handle the specific API route responsible for receiving code from the frontend, sending it to the AI for review, and returning the result — making it a critical part of the backend logic that powers the code review functionality.
