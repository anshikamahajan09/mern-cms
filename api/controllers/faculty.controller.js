import { StudentAttendance } from "../models/student.model.js";

export const markAttendance = async (req, res, next) => {
  const dummyData = req.body;
  try {
    const attendance = await StudentAttendance.insertMany(dummyData);
    res.status(201).json({ message: "Attendance marked successfully", data: attendance });
  } catch (error) {
    console.error("Error marking attendance:", error);
    res.status(500).json({ message: "Failed to mark attendance", error: error.message });
  }
};
export const fetchAttendance = async (req, res, next) => {
    const { rollno } = req.body;
    try {
      const attendanceData = await StudentAttendance.aggregate([
        { $match: { rollno } },
        {
          $group: {
            _id: "$courseId",
            totalAttendance: { $sum: 1 },
            PCount: { $sum: { $cond: [{ $eq: ["$attendance", "P"] }, 1, 0] } }
          }
        },
        { $project: { _id: 0, courseId: "$_id", totalAttendance: 1, PCount: 1 } }
      ]);
      res.json(attendanceData);
    } catch (error) {
      // Handle errors
      next(error);
      
    }
  };
