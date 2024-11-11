const Book = require('../models/bookModel'); 

const createBook = async (req, res) => {
  try {
    const { title, author, publishedDate, genre, availableCopies } = req.body;
    const newBook = new Book({ title, author, publishedDate, genre, availableCopies });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createBook,
};