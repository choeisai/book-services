import { Application } from 'express'
import { BookService } from '../services'

class BookController {
  private bookService: BookService

  constructor(private app: Application) {
    this.bookService = new BookService()
    this.routes()
  }

  public routes() {
    const apiVersion = "v1"
    const prefix = `/api/${apiVersion}`

    this.app.route(`${prefix}/books`)
      .get(this.bookService.getAllBooks)
    this.app.route(`${prefix}/book`)
      .post(this.bookService.addNewBook)
    this.app.route(`${prefix}/book/:book_id`)
      .delete(this.bookService.deleteBook)
      .put(this.bookService.updateBook)
    this.app.route(`${prefix}/book/sell/:book_id`)
      .put(this.bookService.sellBook)
    this.app.route(`${prefix}/book/fulfill/:book_id`)
      .put(this.bookService.fulfillBook)
    this.app.route(`${prefix}/books/bestseller`)
      .get(this.bookService.getBestsellerBooks)
  }
}

export default BookController
