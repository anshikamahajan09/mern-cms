import mongoose from "mongoose";

const facultySchema = new mongoose.Schema(
  {
    name: {
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
  },
  {
    timestamps: true,
  }
);


const faculty = mongoose.model("faculty", facultySchema);

export default faculty;
