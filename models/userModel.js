const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name"],
  },

  email: {
    type: String,
    required: [true, "Please provide us your Email"],
    lowercase: true,
  },
  
  mobileno : {
    type: String,
    required: [true, "Please tell us your name"],
  },

  message: {
    type: String,
    required: [true, "Please provide us your Message"],
    lowercase: true,
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;