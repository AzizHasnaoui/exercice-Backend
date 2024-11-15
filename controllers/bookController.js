import Book from "../models/Book.js";
import Author from "../models/Author.js";

/////////////////////////////GET ALL BOOKs//////////////////////////////
export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Won't get all books", error: error.message });
  }
};

/////////////////////////////GET BOOK BY ID//////////////////////////////
export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id)
      .populate("author")
      .populate("categories");
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(book);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Won't get book by id", error: error.message });
  }
};

/////////////////////////////CREATE NEW BOOK//////////////////////////////
export const createBook = async (req, res) => {
  try {
    const newbook = new Book(req.body);
    const savedBook = await newbook.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Won't insert book", error: error.message });
  }
};

/////////////////////////////CREATE NEW BOOK WITH AUTHOR CHECK(VALIDATION)//////////////////////////////
export const createBookWithAuthorCheck = async (req, res) => {
  try {
    const { title, author, categories, publishedDate, summary } = req.body;

    // Check if author exists
    const existingAuthor = await Author.findById(author);
    if (!existingAuthor) {
      return res.status(404).json({ message: "Author not found" });
    }

    // Check if author has other books
    const authorBooks = await Book.find({ author });
    if (authorBooks.length === 0) {
      return res
        .status(400)
        .json({ message: "Author must have written a book before" });
    }

    const newBook = new Book({
      title,
      author,
      categories,
      publishedDate,
      summary,
    });
    const savedBook = await newBook.save();

    res.status(201).json(savedBook);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Could not create book", error: error.message });
  }
};

/////////////////////////////UPDATE EXISTED BOOK//////////////////////////////
export const updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book updated successfully", updatedBook });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Won't update book", error: error.message });
  }
};

/////////////////////////////DELETE EXISTED BOOK//////////////////////////////
export const deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    res
      .status(200)
      .json({ message: "Book deleted successfully", book: deletedBook });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Won't delete book", error: error.message });
  }
};
