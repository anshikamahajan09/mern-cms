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

export default function Notice() {
  const { currentUser } = useSelector((state) => state.user);
  const [recentAnnouncements, setRecentAnnouncements] = useState([]);
  console.log(recentAnnouncements);
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
        setRecentAnnouncements(data);
      } catch (err) {
        console.error("Error fetching announcements:", err);
      }
    };
    if (currentUser._id) {
      fetchAnnoucements();
    }
  }, []);
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
          <form className="w-full mt-5 ">
            <div className="w-full flex flex-wrap gap-x-4 gap-y-4">
              <div className="w-[200px]">
                <Label value="Department" />
                <Select>
                  <option value="CSE">CSE</option>
                  <option value="ECE">ECE</option>
                  <option value="EEE">EEE</option>
                  <option value="MECH">MECH</option>
                  <option value="CIVIL">CIVIL</option>
                </Select>
              </div>
              <div className="w-[200px]">
                <Label value="Notice Title" />
                <TextInput placeholder="Notice Title" />
              </div>
              <div className="w-[200px]">
                <Label value="Access to:" />
                <Select>
                  <option value="faculty">Faculty</option>
                  <option value="student">Student</option>
                  <option value="both">Both</option>
                </Select>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <FileInput className="mt-6 w-[460px]" />
              <Button className="mt-5 " gradientDuoTone="purpleToBlue" outline>
                Upload Document
              </Button>
            </div>
            <div className="w-3/4 mt-5">
              <Label value="Notice Description" />
              <Textarea
                placeholder="Write your announcement here..."
                rows={6}
                maxLength={200}
              />
              <Button className="mt-5" gradientDuoTone="greenToBlue">
                Post Notice
              </Button>
            </div>
          </form>
        </div>
      )}
      <div className="flex w-full flex-col gap-12">
        {/* <div className="w-3/4 ">
          <h1 className="font-semibold text-3xl mb-8">Your recent notices</h1>
          {recentAnnouncements.map(
            (announcement, index) =>
              announcement.userId === currentUser._id && (
                <div key={index} className="w-full flex flex-col p-4  gap-4 mt-4 border border-gray-600 rounded-lg ">
                  <div className="flex items-center gap-4">
                    <div className=" text-lg font-semibold">{announcement.title}</div>
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
              )
          )}
        </div> */}
        <div className="w-3/4">
          <h1 className="font-semibold text-3xl mb-8 ">All notices</h1>
          {recentAnnouncements.map((announcement, index) => (
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
