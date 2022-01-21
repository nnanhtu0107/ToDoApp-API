import mongoose from "mongoose";

const User = mongoose.model("User", {
  email: {
    type: String,
    require: true,
    trim: true,
    minlength: 5,
  },
});
module.exports = {
  User,
};
