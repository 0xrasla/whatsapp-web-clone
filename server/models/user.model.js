const { Schema, model } = require("mongoose");

const UserModel = new Schema(
  {
    username: String,
    email: {
      type: String,
      required: true,
    },
    handler: {
      type: String,
      required: true,
    },
    contacts: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    avatar_url: { type: String, required: false },
    online_now: { type: String, required: false, default: true },
  },
  {
    timestamps: true,
  }
);

UserModel.pre("save", function (next) {
  let user = this;

  user.handler = "@" + user.username.toLowerCase();

  next();
});

module.exports = model("User", UserModel);
