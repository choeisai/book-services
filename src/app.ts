import express from 'express'
import { Application } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import { BookController } from './controllers'
import mongoose from 'mongoose'

class App {
  public app: Application
  public bookController: BookController

  constructor() {
    this.app = express()
    this.setConfig()
    this.setMongoConfig()
    this.bookController = new BookController(this.app)
  }

  private setConfig() {
    this.app.use(bodyParser.json({ limit: "50mb " }))
    this.app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }))
    this.app.use(cors())
  }

  private setMongoConfig() {
    // TODO: remove hard code
    mongoose.Promise = global.Promise
    mongoose.connect(`mongodb://localhost:27017/deeple`, {
      useNewUrlParser: true
    })
  }
}

export default new App().app
