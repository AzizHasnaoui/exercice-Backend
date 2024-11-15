import Author from "../models/Author.js";


/////////////////////////////CREATE NEW AUTHOR//////////////////////////////
export const createAuthor = async (req, res) => {
  try {
    const newAuthor = new Author(req.body);
    const savedAuthor = await newAuthor.save();
    res.status(201).json(savedAuthor);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Won't insert author", error: error.message });
  }
};


