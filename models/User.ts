import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: false },
  role: { type: String,  default: "user" },
  image: {type: String, required: false},
  authProviderId: { type: String },
});

export const User = mongoose.models?.User || mongoose.model("User", userSchema);