import mongoose from 'mongoose'

export interface IBook extends mongoose.Document {
  title: string,
  synopsis: string,
  isbn10: string,
  isbn13: string,
  language: string,
  publisher: string,
  edition: string,
  ebookPrice: number,
  paperbackPrice: number,
  soldEbookAmount: number,
  soldPaperbackAmount: number,
  currentPaperbackAmount: number
}

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
  soldEbookAmount: Number,
  soldPaperbackAmount: Number,
  currentPaperbackAmount: Number
}, {
  timestamps: true
})

export default mongoose.model<IBook>("Book", BookSchema)
