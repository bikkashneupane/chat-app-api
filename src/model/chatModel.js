import Chat from "./chatSchema.js";

// get messages
export const getMessages = () => {
  return Chat.find().sort({ timestamp: 1 });
};

// post message
export const insertMessage = ({ sender, receiver, message }) => {
  return Chat.save({ sender, receiver, message });
};
