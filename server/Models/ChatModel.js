import mongoose from "mongoose";


const chatSchema = mongoose.Schema({
  message: {
    type: String,
    trim: true,
    required: true,
  },
  repliedByAi : {
    type: String
  }, 
  createAt: {
    type: Date,
    default: Date.now
  }
});



const Chat = mongoose.model("Chat", chatSchema);
export default Chat;


