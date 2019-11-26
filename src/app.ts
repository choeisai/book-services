import express from 'express'
import { Application } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

class App {
  public app: Application

  constructor() {
    this.app = express()
    this.setConfig()
  }

  private setConfig() {
    this.app.use(bodyParser.json({ limit: "50mb " }))
    this.app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }))
    this.app.use(cors())
  }
}

export default new App().app
