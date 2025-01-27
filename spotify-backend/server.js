import "dotenv/config";
import cors from "cors";
import express from "express";
import connectDB from "./src/config/mongoDB.js";
import songRouter from "./src/routes/songRoute.js";
import albumRouter from "./src/routes/albumRoute.js";
import connectCloudinary from "./src/config/cloudinary.js";

// app config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// middleware
app.use(express.json());
app.use(cors());

// initializing routes
app.use("/api/song", songRouter);
app.use("/api/album", albumRouter);

app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
