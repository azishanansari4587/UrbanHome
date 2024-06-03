
import mongoose from "mongoose";

const NewsLetterSchema = new mongoose.Schema({
 
    email: {
      type:String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    }
  }, { toJSON: { getters: true } });
  
  const  NewsLetter = mongoose.models.NewsLetter || mongoose.model("Issue", NewsLetterSchema);
  
  export default  NewsLetter;