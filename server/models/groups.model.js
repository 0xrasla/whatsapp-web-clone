const { Schema, model } = require("mongoose");

const GroupsModel = new Schema(
  {
    groupName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    members: [{ type: Schema.Types.ObjectId, joinDate: Date }],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Group", GroupsModel);
