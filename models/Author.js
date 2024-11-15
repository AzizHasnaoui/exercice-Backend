import mongoose from "mongoose";

//CREATING THE SCHEMA//
const authorSchema = mongoose.Schema({
  lastName: { type: String, required: true },
  firstName: { type: String, required: true },
  nationality: { type: String, required: false },
});

export default mongoose.model("Author", authorSchema);
