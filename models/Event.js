import mongoose from "mongoose";

//CREATING THE SCHEMA//
const eventSchema = mongoose.Schema({
  title: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
});

export default mongoose.model("Event", eventSchema);
