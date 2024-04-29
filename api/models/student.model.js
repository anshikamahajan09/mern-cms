import mongoose from "mongoose";

const studentInfoSchema = new mongoose.Schema(
  {
    fName : {
      type: String,
      required: true,
    },
    lName : {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique:true
    },
    rollno: {
      type: String,
      min: 10,
      max: 10,
      required: true,
      unique:true
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
    parentEmail: {
      type: String,
      required: true,
    },
    isStudent: {
      type: Boolean,
      default: true,
    },
    address : {
      type: String,
      required: true,
    },
    userType : {
      type: String,
      default: "student",
    }
  },
  {
    timestamps: true,
  }
);

const studentAcademicSchema = new mongoose.Schema(
  {
    rollno: {
      type: String,
      required: true,
      unique:true
    },
    department: {
      type: String,
      required: true,
    },
    semester: {
      type: Number,
      default : 1
    },
    courses: {
      type: [String],
      required: true,
    },
    cgpa: {
      type: Number,
    },
    sgpa: {
      type: Number,
    },
    remarks: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const studentMarksSchema = new mongoose.Schema({
  courseId: {
    type: String,
    required: true,
  },
  rollno: {
    type: String,
    required: true,
  },
  marks: {
    unitTest1: {
      type: Number,
      default: null,
    },
    unitTest2: {
      type: Number,
      default: null,
    },
    unitTest3: {
      type: Number,
      default: null,
    },
    practical: {
      type: Number,
      default: null,
    },
    viva: {
      type: Number,
      default: null,
    },
    endTerm: {
      type: Number,
      default: null,
    },
  },
},{timestamps: true});

const studentAttendanceSchema = new mongoose.Schema({
  courseId: {
    type: String,
    required: true,
  },
  rollno: {
    type: String,
    required: true,
  },
  attendance: {
    type: String,
    required: true
  },
}, {timestamps: true});

export const StudentAcademic = mongoose.model(
  "StudentAcademic",
  studentAcademicSchema
);
export const StudentAttendance = mongoose.model(
  "StudentAttendance",
  studentAttendanceSchema
);
export const StudentMarks = mongoose.model("StudentMarks", studentMarksSchema);
export const student = mongoose.model("student", studentInfoSchema);
