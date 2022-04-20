const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// 创建 Schema
const profileSchema = new Schema({
  type: {
    type: String,
  },
  describe: {
    type: String,
  },
  income: {
    type: Number,
    required: true,
  },
  expend: {
    type: Number,
    required: true,
  },
  cash: {
    type: Number,
    required: true,
  },
  remark: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Profile = mongoose.model("profiles", profileSchema);
