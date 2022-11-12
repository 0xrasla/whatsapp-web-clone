const { Schema, model } = require("mongoose");

const ChatModel = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    messageType: {
      type: String,
      enum: ["group", "personal"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("User", ChatModel);
