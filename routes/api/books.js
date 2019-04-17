const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books" to save book data to MongoDB
router.route("/")
    .get(booksController.findAll)
    .post(booksController.create);

//Matches with "/api/books/:id" to delete book with matching id
router.route("/:id")
    .delete(booksController.remove);

module.exports = router;
