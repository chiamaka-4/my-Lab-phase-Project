import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import userRoutes from "./routers/userRoutes.js";
// Initialize Express app
const app = express();

// Middleware setup

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "*", credentials: true }));
console.log(process.env.MONGO_URI);
// Connect to MongoDB using async/await
const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB connected: ${connection.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit the process if unable to connect to MongoDB
  }
};
// connectDB();

// Mount your user routes
app.use("/api/v1/users", userRoutes); // Assuming your user routes are prefixed with "/api/v1/users"

// Define the port to listen on (use a default port if PORT is not defined in .env)
const port = 5000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
