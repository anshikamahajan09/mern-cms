import mongoose from "mongoose";

const announcementSchema = new mongoose.Schema(
  {
    dept : {
      type: String,
      required: true,
    },
    title : {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    access: {
      type: String,
      required: true,
      default : "both"
    },
    documentLink : {
        type:  String,
        default: ""
    },
    userType : {
      type: String,
      default: "admin",
    }
  },
  {
    timestamps: true,
  }
);


const announcement = mongoose.model("announcement", announcementSchema);

export default announcement;
