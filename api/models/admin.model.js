import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    phone: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const admin = mongoose.model("admin", adminSchema);

export default admin;
