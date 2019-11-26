import express from 'express'
import { Application } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import { BookController } from './controllers'

class App {
  public app: Application
  public bookController: BookController

  constructor() {
    this.app = express()
    this.setConfig()
    this.bookController = new BookController(this.app)
  }

  private setConfig() {
    this.app.use(bodyParser.json({ limit: "50mb " }))
    this.app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }))
    this.app.use(cors())
  }
}

export default new App().app
