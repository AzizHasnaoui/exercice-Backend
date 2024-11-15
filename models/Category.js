import mongoose from "mongoose";

//CREATING THE SCHEMA//
const categorySchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    enum: [
      "Horror",
      "Mystery",
      "Fantasy",
      "Science Fiction",
      "Biography",
      "Romance",
    ],
  },
});

export default mongoose.model("Category", categorySchema);
