import { Button, FileInput, Label, Select, TextInput, Textarea } from "flowbite-react";
import { GiNotebook } from "react-icons/gi";

export default function () {
  return (
    <div className=" md:pl-64 p-7 w-full flex flex-col gap-16">
      <div>
        <div className="w-full flex items-center text-3xl gap-4 font-mono">
          <div className="font-semibold ">Add a new notice</div>
          <span>
            <GiNotebook className="text-gray-400" />
          </span>
        </div>
        <div className="w-full mt-5 ">
          <div className="w-full flex flex-wrap gap-x-4 gap-y-4">
            <div className="w-1/6">
              <Label value="Department" />
              <Select>
                <option value="CSE">CSE</option>
                <option value="ECE">ECE</option>
                <option value="EEE">EEE</option>
                <option value="MECH">MECH</option>
                <option value="CIVIL">CIVIL</option>
              </Select>
            </div>
            <div className="w-1/6">
              <Label value="Notice Title" />
              <TextInput placeholder="Notice Title" />
            </div>
            <div className="w-1/6">
              <Label value="Access to:" />
              <Select>
                <option value="faculty">Faculty</option>
                <option value="student">Student</option>
                <option value="both">Both</option>
              </Select>
            </div>
            <div className="w-1/7"><FileInput className="mt-6 " /></div>
          </div>
          <div className="w-3/4 mt-5">
            <Label value="Notice Description" />
            <Textarea placeholder="Write your announcement here..." rows={6} maxLength={200}/>
            <Button className="mt-5" gradientDuoTone="greenToBlue">Post Notice</Button>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h1 className="font-semibold text-2xl">Your recent notices</h1>
        </div>
        <div></div>
      </div>
    </div>
  );
}
