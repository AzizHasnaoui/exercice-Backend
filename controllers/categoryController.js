import Category from "../models/Category.js";

/////////////////////////////CREATE NEW CATEGORY//////////////////////////////
export const createCategory = async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    const savedCategory = await newCategory.save();
    res.status(201).json(savedCategory);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Won't insert category", error: error.message });
  }
};
