import { Request, Response } from 'express'
// import { MongooseDocument } from 'mongoose'
import _ from 'lodash'

import { Book } from '../models'

export class BookService {
  public async getAllBooks(req: Request, res: Response) {
    const {skip, limit, sort, filter} = req.query

    // Default options
    let options = {
      skip: 0,
      limit: 2,
      sort: {
        _id: 1
      }
    }
    let query = {}

    // Pagingation
    if (!_.isNaN(Number(skip))) {
      options.skip = Number(skip)
    }
    if (!_.isNaN(Number(limit))) {
      options.limit = Number(limit)
    }

    // Sorting
    if (sort === "ASC") {
      options.sort = { _id: 1 }
    }
    if (sort === "DESC") {
      options.sort = { _id: -1 }
    }

    // Filter by regex
    if (!_.isNull(filter)) {
      var regex = new RegExp(`${filter}`);
      query = {
        title: {
          $regex: regex,
          $options: 'i'
        }
      }
    }

    try {
      const book = await Book.find(query, null, options)

      res.json(book)
    }
    catch (error) {
      return res.send(error)
    }
  }

  public async addNewBook(req: Request, res: Response) {
    // TODO: Add validator
    const { body } = req
    const newBook = new Book(body)
    try {
      const book = await newBook.save()
      res.json(book)
    }
    catch (error) {
      return res.send(error)
    }
  }

  public async deleteBook(req: Request, res: Response) {
    const bookId = req.params.book_id;
    try {
      await Book.findByIdAndDelete(bookId)
      res.json({
        message: `Deleted successfully`
      })
    }
    catch (error) {
      return res.send(error)
    }
  }

  public async updateBook(req: Request, res: Response) {
    // TODO: Add validator
    const bookId = req.params.book_id;
    const { body } = req

    try {
      const updatedBook = await Book.findByIdAndUpdate(bookId, body)
      res.json(updatedBook)
    }
    catch (error) {
      return res.send(error)
    }
  }
}
