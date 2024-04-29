import {StudentAcademic} from '../models/student.model.js';
import { errorHandler } from '../utils/error.js';


export const fetchAcademicInfo = async (req, res, next) => {
    try
    {
        const { rollno } = req.body;
        const student = await StudentAcademic.findOne({ rollno });
        if(!student)
        {
            errorHandler('Student not found', 404);
        }
        res.status(200).json(student);
    }
    catch(err){
        next(err);
    }

}
