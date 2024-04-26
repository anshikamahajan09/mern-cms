import announcement from '../models/announcement.model.js';

export const makeAnnouncement = async (req, res, next) => {
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
        if(userType == 'admin'){
            announcements = await announcement.find({access : {
                $in: ['both', 'admin', 'faculty']
            }});
        }
        else if(userType === 'student'){
            announcements = await announcement.find({access: {
                $in: ['both', 'student']
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
