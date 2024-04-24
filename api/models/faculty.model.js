import mongoose from "mongoose";

const facultySchema = new mongoose.Schema(
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
      type: String,
      required: true,
    },
    department: {
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
      type: String,
      required: true,
    },
    courses: {
      type: [String],
      required: true,
    },
    isFaculty: {
      type: Boolean,
      default: true,
    },
    address : {
      type: String,
      required: true,
    },
    userType : {
      type: String,
      default: "faculty",
    }
  },
  {
    timestamps: true,
  }
);


const faculty = mongoose.model("faculty", facultySchema);

export default faculty;
