// This is a file to create all our endpoint controller functions
import { User } from "../models/userModels.js";
import bcrypt from "bcryptjs";

const createUser = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  const userExists = await User.findOne({ email: email });
  if (userExists) {
    res.status(400).json({
      message: "user already exists",
    });
    return;
  }
  await User.create({ fullname: name, email: email, password: password });
  res.status(201).json({ message: "user created" });

  //   res.json({ message: "Welcome to the create user endpoint" });
};

// const loginUser =() =>{
// console.log("welcome to the login user endpoint")
// }
// this is for a user login who has already been created
// const loginUser = (req, res) => {
//   const { email, password } = req.body;
//   const user = user.findOne({ email: email });
//   if (!user){
//     res.status(401).json({ message: "Invalid credentials" });
//     return;
//   }
//   res.status(200).json({ succes: true });
// };
export { createUser };
