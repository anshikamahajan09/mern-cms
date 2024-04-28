import { useState } from "react";
import { Button, FileInput, Label } from "flowbite-react";
import {useSelector} from 'react-redux'

function Profile() {
    const {currentUser} = useSelector(state => state.user);
    console.log(currentUser);
    const [formData, setFormData] = useState({
        fName: currentUser?.fName,
        lName: currentUser?.lName,
        email: currentUser?.email,
        phone: currentUser?.phone,
        address: currentUser?.address,
        password: currentUser?.password,
        avatar : currentUser?.profilePicture || 'https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg',
    });

  return (
    <main className="p-6 w-full min-h-screen md:pl-64">
      <div className="h-4/5 flex flex-col  gap-8  sm:flex-row rounded-lg">
        <div className="w-4/6 gap-y-4 p-4 flex flex-col rounded-lg justify-around bg-slate-800 ">
          {/* left div content */}
          <h1 className="text-3xl font-semibold">General Information</h1>
          {/* first row input */}
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div className="flex flex-col w-full gap-y-1">
              <label htmlFor="fName" className="font-semibold">
                First Name
              </label>
              <input
                type="text"
                id="fName"
                value={ formData.fName }
                readOnly = {currentUser.userType === 'admin' ? false : true}
                onChange={(e) => setFormData({...formData, fName: e.target.value})}
                className="p-2 border rounded-lg text-gray-900 bg-[#F0EBE3] text-md font-semibold"
                placeholder="Enter your first name"
              />
            </div>
            <div className="flex flex-col w-full gap-y-1">
              <label htmlFor="lName" className="font-semibold">
                Last Name
              </label>
              <input
                type="text"
                id="lName"
                value={formData.lName}
                readOnly = {currentUser.userType === 'admin' ? false : true}
                onChange={(e) => setFormData({...formData, lName: e.target.value})}
                className="p-2 border rounded-lg text-gray-900 bg-[#F0EBE3] text-md font-semibold"
                placeholder="Your last name here"
              />
            </div>
          </div>
          {/* second row input */}
          <div className="flex-col flex">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              readOnly = {currentUser.userType === 'admin' ? false : true}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              id="email"
              className="p-2 border w-3/5 rounded-lg text-gray-900 bg-[#F0EBE3] text-md font-semibold"
              placeholder="Your email"
            />
          </div>
          {/* third row input */}
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div className="flex flex-col w-full gap-y-1">
              <label htmlFor="phone" className="font-semibold">
                Phone
              </label>
              <input
                type="text"
                value={formData.phone}
                readOnly = {currentUser.userType === 'admin' ? false : true}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                id="phone"
                className="p-2 border rounded-lg text-gray-900 bg-[#F0EBE3] text-md font-semibold"
                placeholder="Phone number"
              />
            </div>
            <div className="flex flex-col w-full gap-y-1">
              <label htmlFor="password" className="font-semibold">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                readOnly = {currentUser.userType === 'admin' ? false : true}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="p-2 border rounded-lg text-gray-900 bg-[#F0EBE3] text-md font-semibold"
                placeholder="#abc123"
              />
            </div>
          </div>
          
          <div className="flex-col flex">
          <h1 className="text-3xl font-semibold mb-2">Address</h1>
            <label htmlFor="address" className="font-semibold">
              Address
            </label>
            <textarea
            value={formData.address}
            readOnly = {currentUser.userType === 'admin' ? false : true}
            onChange={(e) => setFormData({...formData, address: e.target.value})}
              className="resize-none bg-[#F0EBE3] rounded-lg text-md text-gray-900 font-semibold"
              rows={3}
              placeholder="Enter your full address"
            />
          </div>
        </div>

        <div className="w-2/6 bg-slate-800 rounded-lg">
          <div className="h-2/3 ">
            {/* top div */}
            <div
              className="bg-slate-700 rounded-t-lg h-2/5 flex justify-center w-full relative
            "
            >
              {" "}
              <img
                className="h-40 w-40 object-cover rounded-full absolute top-1/2"
                src={formData.avatar}
              />
            </div>
            <div className={`pt-24 flex flex-col ${currentUser.userType!=='admin' && 'gap-5'} text-center`}>
              <p className="font-semibold text-xl">{currentUser.fName + ' ' + currentUser.lName}</p>
              <p className="text-md font-semibold">
                {currentUser.userType === 'admin' ? 'Administrator' : currentUser.userType === 'student' ? 'Student' : 'Faculty'}, Campus Flow
              </p>
              <p className="text-md">{currentUser.address}</p>
              <div className="flex justify-center mt-2 flex-row gap-4">
                <button className="p-2 px-6 bg-[#fafbfc] rounded-lg text-black font-semibold">
                {currentUser.userType === 'admin' ? 'Global Access' : currentUser.userType === 'student' ? `Roll Number: ${currentUser.rollno}` : 'Faculty Access'} 
                </button>
                <button className="p-2 px-6 bg-green-700 rounded-lg text-white font-semibold">
                 {currentUser.userType.toUpperCase()}
                </button>
              </div>
              <p className="p-10 pt-5 text-gray-300 text-sm italic">Contact admin for profile updates. Reach out for assistance or questions!!</p>
            </div>
          </div>
          {currentUser.userType === 'admin' && (
            <div className="h-1/3 p-4 rounded-lg flex flex-col justify-center">
            <h1 className="font-semibold text-lg mb-2">Select profile photo</h1>
            <div>
              <div>
                <Label  htmlFor="file-upload-helper-text" value="Upload file" />
              </div>
              <FileInput
                id="file-upload-helper-text"
                helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)."
              />
            </div>
          </div>
          )}
        </div>
      </div>
      {currentUser.userType === 'admin' && (<Button className="mt-5" gradientDuoTone={'greenToBlue'}>Save Profile</Button>)}
    </main>
  );
}

export default Profile;
