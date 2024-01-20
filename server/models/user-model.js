const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["M", "F", "O"],
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  govtIdType: {
    type: String,
    enum: ["Aadhar", "PAN"],
    required: true,
  },
  govtid: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  pin: {
    type: String,
    required: true,
  },
});

const User = new mongoose.model("User", userSchema);
module.exports = User;
