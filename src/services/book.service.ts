import { Request, Response } from 'express'

export class BookService {
  public hello(req: Request, res: Response) {
    return res.status(200).send("Hello from Book Service")
  }
}

