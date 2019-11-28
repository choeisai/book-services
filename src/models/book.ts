import mongoose from 'mongoose'

const BookSchema = new mongoose.Schema({
  title: String,
  synopsis: String,
  isbn10: String,
  isbn13: String,
  language: String,
  publisher: String,
  edition: String,
  ebookPrice: Number,
  paperbackPrice: Number,
  soldAmount: Number,
  currentAmount: Number
}, {
  timestamps: true
})

export const Book = mongoose.model("Book", BookSchema)
