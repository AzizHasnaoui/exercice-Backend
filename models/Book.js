import mongoose from "mongoose";

//CREATING THE SCHEMA//
const bookSchema = mongoose.Schema({
  title: { type: String, required: true },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
    required: true,
  },
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
  publishedDate: { type: Date, required: true },
  summary: { type: String, required: true },
});

export default mongoose.model("Book", bookSchema);
