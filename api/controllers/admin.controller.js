import { student, StudentAcademic } from "../models/student.model.js";
import bcrypt from "bcryptjs";

export const addStudent = async (req, res, next) => {
    console.log(req.body);
  const {
    fName,
    lName,
    gender,
    email,
    rollno,
    password,
    parentEmail,
    phone,
    address,
    profilePicture,
    department,
    courses,
    semester,
  } = req.body;
  let courseArray = Object.keys(courses);
  const hashedPassword = await bcrypt.hash(password, 12);
  const newStudent = new student({
    fName,
    lName,
    gender,
    email,
    rollno,
    password: hashedPassword,
    parentEmail,
    phone,
    address,
    profilePicture,
  });
  const newStudentAcademic = new StudentAcademic({
    rollno,
    department,
    courses: courseArray,
    semester,
  });
  try {
    const studentData = await newStudent.save();
    const studentAcademicData = await newStudentAcademic.save();
    res
      .status(201)
      .json({
        message: "Student added successfully",
        data: studentData,
        academicData: studentAcademicData,
      });
  } catch (err) {
    next(err);
  }
};
