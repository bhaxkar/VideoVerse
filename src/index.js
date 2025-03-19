import "dotenv/config"
import {app} from "./app.js"
import connectDB from "./db/index.js"

const port = process.env.PORT || 3000;

connectDB()
.then(() => {
  app.on("error", (error) => {
    console.error("Application Error !!", error);
    process.exit(1);
  });
  app.listen(port, () => {
    console.log(`Server is running at port : ${port}`);
  });
})
.catch((error) => {
  console.log(`MongoDB connection failed !! ${error}`);
  process.exit(1);
});