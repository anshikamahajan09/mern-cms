import { StudentAttendance } from "../models/student.model.js";

export const markAttendance = async (req, res, next) => {
  const dummyData = req.body;
  try {
    const attendance = await StudentAttendance.insertMany(dummyData);
    res
      .status(201)
      .json({ message: "Attendance marked successfully", data: attendance });
  } catch (error) {
    console.error("Error marking attendance:", error);
    res
      .status(500)
      .json({ message: "Failed to mark attendance", error: error.message });
  }
};


export const fetchAttendance = async (req, res, next) => {
  let rollno = req.body.rollno;
  let session = req.body.sessionId;
  let courseId = req.body.courseId;
  let month = req.body.month;
  if (session === undefined && courseId === undefined && month === undefined) {
    try {      
      const attendanceData = await StudentAttendance.aggregate([
        { $match: { rollno } },
        {
          $group: {
            _id: "$courseId",
            totalAttendance: { $sum: 1 },
            PCount: { $sum: { $cond: [{ $eq: ["$attendance", "P"] }, 1, 0] } },
          },
        },
        {
          $project: { _id: 0, courseId: "$_id", totalAttendance: 1, PCount: 1 },
        },
      ]);
      res.json(attendanceData);
    } catch (error) {
      next(error);
    }
  } else {
    try {
      
      let matchConditions = { rollno };
      if (session !== 'all') {
        const startOfYear = new Date(`${session}-01-01T00:00:00.000Z`);
        const endOfYear = new Date(`${session}-12-31T23:59:59.999Z`);
        matchConditions.createdAt = { $gte: startOfYear, $lte: endOfYear };
        
        
      }
      if (month !== 'all') {
        const monthNumber = new Date(Date.parse(`${month} 1, 2000`)).getMonth() + 1; 
        if(monthNumber < 10){
          matchConditions.createdAt = {
            ...matchConditions.createdAt,
            $gte: new Date(`${session}-0${monthNumber}-01T00:00:00.000Z`),
            $lte: new Date(`${session}-0${monthNumber}-31T23:59:59.999Z`)
          };
        }else{
          matchConditions.createdAt = {
            ...matchConditions.createdAt,
            $gte: new Date(`${session}-${monthNumber}-01T00:00:00.000Z`),
            $lte: new Date(`${session}-${monthNumber}-31T23:59:59.999Z`)
          };
        }
        
      }

      if (courseId !== 'all') {
        matchConditions.courseId = courseId;
      }

      const attendanceData = await StudentAttendance.find(matchConditions).sort({ createdAt: -1 });     
      res.json(attendanceData);
    } catch (error) {
      next(error);
    } 
  }
};