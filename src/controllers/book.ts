import { Application } from 'express'
import { BookService } from '../services'

class BookController {
  private bookService: BookService

  constructor(private app: Application) {
    this.bookService = new BookService()
    this.routes()
  }

  public routes() {
    this.app.route("/").get(this.bookService.hello)
  }
}

export default BookController
