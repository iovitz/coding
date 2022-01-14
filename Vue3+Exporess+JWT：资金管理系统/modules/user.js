const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// 创建 Schema
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  identity: {
    type: Number,
    required: true
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  time: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model("users", userSchema);
