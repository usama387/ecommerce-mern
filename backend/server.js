import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDb from "./config/Mongodb.js";
import connectToCloudinary from "./config/Cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";

// App Config
const app = express();
connectToCloudinary()

// db config
connectDb();

// middlewares
app.use(express.json());
app.use(cors());

// user api end point
app.use("/api/user", userRouter)

// product api end point
app.use("/api/product", productRouter)



// test api end point
app.get("/", (req, res) => {
  res.send("API is running...");
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`The backend is up on port ${port}`);
});
