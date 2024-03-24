import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
// first install bcyrpt

const userSchema = new Schema({
  fullname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
});
// #the password
userSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;
});
// to un-hash a password before comparing password for an already created user
// userSchema.methods.matchPassword = async function (password) {
//   return await bcrypt.compare(password, this.password);
// };
// model the schema

export const User = model("user", userSchema);
