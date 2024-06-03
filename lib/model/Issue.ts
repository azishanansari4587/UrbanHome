
import mongoose from "mongoose";

const IssueSchema = new mongoose.Schema({
    // clerkId: String,
    name: {
      type:String,
      required: true,
    },
    email: {
      type:String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
    message: {
        type: String,
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
  
  const Issue = mongoose.models.Issue || mongoose.model("Issue", IssueSchema);
  
  export default Issue;