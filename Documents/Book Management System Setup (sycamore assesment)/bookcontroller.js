const Book = require('../models/Book');

// Add a Book
exports.addBook = async (req, res) => {
    const { title, author, genre, published_date, description, rating } = req.body;
    try {
        const book = await Book.create({ title, author, genre, published_date, description, rating, owner: req.user.id });
        res.status(201).json(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// View All Books
exports.viewAllBooks = async (req, res) => {
    try {
        const books = await Book.find({ owner: req.user.id });
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// View a Single Book
exports.viewSingleBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book || book.owner.toString() !== req.user.id) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a Book
exports.updateBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book || book.owner.toString() !== req.user.id) {
            return res.status(404).json({ message: 'Book not found' });
        }
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedBook);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a Book
exports.deleteBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book || book.owner.toString() !== req.user.id) {
            return res.status(404).json({ message: 'Book not found' });
        }
        await Book.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};