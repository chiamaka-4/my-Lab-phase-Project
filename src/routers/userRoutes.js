import express from "express";
import { createUser } from "../controllers/userControllers.js";

const router = express.Router();

router.post("/create-user", createUser);
console.log("welcome to the create user endpoint");

// router.post("/api/v1/users", () => {
//   console.log("welcome to the create user endpoint");
// // });
// router.post("/login-users",  () => {
//   // console.log("welcome to the create user endpoint");
// });

export default router;
