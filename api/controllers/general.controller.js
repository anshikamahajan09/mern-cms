import announcement from '../models/announcement.model.js';
import {student} from '../models/student.model.js';
import facultySchema from '../models/faculty.model.js';

export const makeAnnouncement = async (req, res, next) => {
    console.log(req.body);
    if(req.body.userType != 'admin'){
        return res.status(400).json({message: "Only admin can make announcements"});
    }
    try{
        const {dept, title, content, access, documentLink, userType} = req.body;
        const newAnnouncement = new announcement({
            dept,
            title,
            content,
            access,
            documentLink,
            userType
        });
        await newAnnouncement.save();
        res.status(201).json({announcement: newAnnouncement});
    }
    catch(err){
        next(err);
    }
}

export const fetchAnnouncements = async (req, res, next) => {
    try{
        const {userType} = req.body;
        if(userType != 'admin' && userType !='faculty' && userType != 'student'){
            return res.status(400).json({message: "Invalid user type"});
        }
        let announcements;
        if(userType === 'admin'){
            announcements = await announcement.find({access : {
                $in: ['both', 'students', 'faculty']
            }});
        }
        else if(userType === 'student'){
            announcements = await announcement.find({access: {
                $in: ['both', 'students']
            }});
        }
        else{
            announcements = await announcement.find({access: {
                $in: ['both', 'faculty']
            }});
        }
        announcements = announcements.sort((a, b) => b.createdAt - a.createdAt);
        res.status(200).json(announcements);
    }
    catch(err){
        next(err);
    }
}


export const fetchTrendData = async(req, res, next) => {
    try{
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth() + 1;
        const currentMonthStartDate = new Date(currentYear, currentMonth - 1, 1);

        const totalStudent = await student.countDocuments();
        const totalFaculty = await facultySchema.countDocuments();

        const tillLastMonthFacultyCount = await facultySchema.countDocuments({
            createdAt: {
                $lt: currentMonthStartDate
            }
        });
        const tillLastMonthStudentCount = await facultySchema.countDocuments({
            createdAt: {
                $lt: currentMonthStartDate
            }
        });
        

        res.status(200).json({
            totalStudent,
            totalFaculty,
            tillLastMonthFacultyCount,
            tillLastMonthStudentCount
        });
    }
    catch(err){
        next(err);
    }
}