const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    PostName: { type: String, required: true, unique: true },
    Description: { type: String, required: true, unique: true },
    PostPic: { type: String, defaut: "" },
  },
  { timestamps: true }
);

export default mongoose.model("Post", UserSchema);