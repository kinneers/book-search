const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: Array, required: true },
  description: String,
  image: { data: Buffer, contentType: String },
  link: { type: URL}

});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
