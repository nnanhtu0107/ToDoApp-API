import mongoose from "mongoose";

let connectDB = () => {
  mongoose.Promise = global.Promise;
  mongoose.connect("mongodb://localhost:27017/Todo");
};

module.exports = connectDB;
