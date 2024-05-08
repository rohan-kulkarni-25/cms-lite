import app from "./app.js";
import { connectDB } from "./db/index.js";


// Database Connection
connectDB()


// Starting Server
app.listen(8080, async () => {
  console.log("Server Has Started.");
});
