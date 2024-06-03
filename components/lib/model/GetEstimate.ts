
import mongoose from "mongoose";

const GetEstimateSchema = new mongoose.Schema({
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
    floor: {
      type: String,
      required: true,
    },
    bhk: {
      type: String,
      required: true,
    },
    message: String,
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    }
  }, { toJSON: { getters: true } });
  
  const GetEstimate = mongoose.models.GetEstimate || mongoose.model("GetEstimate", GetEstimateSchema);
  
  export default GetEstimate;