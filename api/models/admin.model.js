import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    fName : {
      type: String,
      required: true,
    },
    lName : {
      type: String,
      required: true,
    },
    email: {
      unique:true,
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
    gender: {
      type: String,
      required: true,
    },
    phone: {
      unique:true,
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: true,
    },
    address : {
      type: String,
      required: true,
    },
    userType : {
      type: String,
      default: "admin",
    }
  },
  {
    timestamps: true,
  }
);

const admin = mongoose.model("admin", adminSchema);

export default admin;
