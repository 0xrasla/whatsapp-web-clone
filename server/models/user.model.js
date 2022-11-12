const { Schema, model } = require("mongoose");

const UserModel = new Schema(
  {
    username: String,
    email: {
      type: String,
      required: true,
    },
    avatar_url: { type: String, required: false },
    online_now: { type: String, required: false, default: true },
  },
  {
    timestamps: true,
  }
);

module.exports = model("User", UserModel);
