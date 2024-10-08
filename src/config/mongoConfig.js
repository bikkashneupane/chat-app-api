import mongoose from "mongoose";

export const mongoConnect = async () => {
  try {
    (await mongoose.connect("mongodb://localhost:27017/chat-app")) &&
      console.log("DB Connected");
  } catch (error) {
    console.log(error);
  }
};
