import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { errorHandler } from "../utils/error.js";
import { student } from "../models/student.model.js";
import faculty from "../models/faculty.model.js";
import admin from "../models/admin.model.js";

export const signIn = async (req, res, next) => {
  console.log(req.body);
  const userType = req.params.userType;
  const { email, password } = req.body;
  let User;
  switch (userType) {
    case "admin":
      User = admin;
      break;
    case "student":
      User = student;
      break;
    case "faculty":
      User = faculty;
      break;
    default:
      return next(errorHandler(400, `Invalid ${userType.charAt(0).toUpperCase()+userType.slice(1)} type`));
  }
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(400, `${userType.charAt(0).toUpperCase()+userType.slice(1)} not found`));
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(400, "Invalid password"));
    }
    res.status(200).json(validUser._doc);
  } catch (error) {
    next(error);
  }
};

export const signUp = async (req, res, next) => {
  const userType = req.params.userType;
  const { email, password } = req.body;

  let User;
  switch (userType) {
    case "admin":
      User = admin;
      break;
    case "student":
      User = student;
      break;
    case "faculty":
      User = faculty;
      break;
    default:
      return next(errorHandler(400, "Invalid user type"));
  }
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return next(errorHandler(400, `${(userType).charAt(0).toUpperCase()+userType.slice(1)} already exists`));
    }
    const hashedPassword = bcryptjs.hashSync(password, 12);
    const newUser = new User({
        ...req.body,
      password: hashedPassword, 
    });
    await newUser.save();
    res.status(201).json(newUser._doc);
  } catch (error) {
    next(error);
  }
};
