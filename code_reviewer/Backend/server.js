require('dotenv').config() // Load env vars first

const app = require("./src/app") // Import the express app
const cors = require("cors");

app.use(cors()); // Now app is defined, so this is safe

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
