import {
  Button,
  FileInput,
  Label,
  Select,
  TextInput,
  Textarea,
} from "flowbite-react";
import { GiNotebook } from "react-icons/gi";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {annoucementDept} from '../utils'

export default function Notice() {
  const { currentUser } = useSelector((state) => state.user);
  const [announcements, setAnnouncements] = useState([]);
  const [newNoticeData, setNewNoticeData] = useState({
    dept: "Computer Science Engineering",
    title: "",
    content: "",
    access: "both",
    documentLink: "",
    userType: "admin",
  });
  useEffect(() => {
    const fetchAnnoucements = async () => {
      try {
        const response = await fetch("/api/general/fetchAnnouncements", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userType: currentUser.userType }),
        });
        const data = await response.json();
        setAnnouncements(data);
      } catch (err) {
        console.error("Error fetching announcements:", err);
      }
    };
    if (currentUser._id) {
      fetchAnnoucements();
    }
  }, []);

  const handleFormChange = (e) => {
    setNewNoticeData({ ...newNoticeData, [e.target.id]: e.target.value });
  };
  const createAnnouncement = async(e) => {
    e.preventDefault()
    try{
      const res = await fetch('/api/general/makeAnnouncement',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newNoticeData)
      })
      const data = await res.json()
      if(data.success === false){
        console.log('Error creating announcement:', data.message)
        return;
      }
      setAnnouncements([data.announcement, ...announcements, ])
      setNewNoticeData({
          dept: "Computer Science Engineering",
          title: "",
          content: "",
          access: "both",
          documentLink: "",
          userType: "admin",
      })
    }
    catch(err){
      console.log('Error creating announcement:', err)
    }
  }
  return (
    <div className=" md:pl-64 p-7 w-full flex flex-col gap-16">
      {currentUser.userType === "admin" && (
        <div className="w-full">
          <div className="w-full flex items-center text-3xl gap-4 font-mono">
            <div className="font-semibold ">Add a new notice</div>
            <span>
              <GiNotebook className="text-gray-400" />
            </span>
          </div>
          <form onSubmit={createAnnouncement} className="w-full mt-5 ">
            <div className="w-full flex flex-wrap gap-x-4 gap-y-4">
              <div className="w-[200px]">
                <Label value="Department" />
                <Select onChange={handleFormChange} id="dept" value={newNoticeData.dept}>
                  {annoucementDept.map((dept, index) => (
                    <option key={index} value={dept}>
                      {dept}
                    </option>
                  ))}
                </Select>
              </div>
              <div className="w-[200px]">
                <Label value="Notice Title" />
                <TextInput id="title"  onChange={handleFormChange} value={newNoticeData.title} required minLength={40} maxLength={100} placeholder="Notice Title" />
              </div>
              <div className="w-[200px]">
                <Label value="Access to:" />
                <Select value={newNoticeData.access}  onChange={handleFormChange} required id="access">
                <option value="both">Both</option>
                  <option value="faculty">Faculty</option>
                  <option value="students">Student</option>
                </Select>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <FileInput value={newNoticeData.documentLink}  onChange={handleFormChange} className="mt-6 w-[460px]" />
              <Button className="mt-5 " 
              id={newNoticeData.documentLink ? 'documentLink' : ''}
              gradientDuoTone="purpleToBlue" outline>
                Upload Document
              </Button>
            </div>
            <div className=" w-full sm:w-3/4 mt-5">
              <Label value="Notice Description" />
              <Textarea value={newNoticeData.content}  onChange={handleFormChange}
              required
              id="content"
              minLength={100}
                placeholder="Write your announcement here..."
                rows={6}
                maxLength={400}
                className='resize-none'
              />
              <Button type="submit" className="mt-5" gradientDuoTone="greenToBlue">
                Post Notice
              </Button>
            </div>
          </form>
        </div>
      )}
      <div className="flex w-full flex-col gap-12">
        <div className=" w-full sm:w-3/4">
          <h1 className="font-semibold text-3xl mb-8 ">All notices</h1>
          {announcements.map((announcement, index) => (
            <div
              key={index}
              className="w-full flex flex-col gap-4 mt-4 border border-gray-600 rounded-lg p-4 "
            >
              <div className="flex items-center gap-4">
                <div className=" text-lg font-semibold ">
                  {announcement.title}
                </div>
                <div className="text-gray-400 text-xs italic">
                  {new Date(announcement.createdAt).toLocaleDateString(
                    "en-US",
                    {
                      month: "short",
                      day: "2-digit",
                      year: "numeric",
                    }
                  )}
                </div>
              </div>
              <div className="text-gray-500 ">{announcement.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
