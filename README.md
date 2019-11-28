# Prerequired
  1. Nodejs version 8
  2. Mongodb

# Endpoints
  - Listing book data (Sorting + Pagination)
  Method: GET
  Params: query string
  skip: number
  limit: number
  sort: ["ASC", "DESC"]
  ```
  http://localhost:9001/api/v1/books?skip=0&limit=10&sort=ASC
  ```
  - Searching book.
  Method: GET
  Params: query string
  skip: number
  limit: number
  sort: ["ASC", "DESC"]
  filter: string
  ```
  http://localhost:9001/api/v1/books?skip=0&limit=10&sort=ASC&filter=new
  ```
  - Creating book data.
  Method: POST
  ```
  http://localhost:9001/api/v1/book
  ```
  Body JSON:
  ```
  {
    "title": "new book 1",
    "synopsis": "",
    "isbn10": "",
    "isbn13": "",
    "language": "",
    "publisher": "",
    "edition": "",
    "ebookPrice": 0,
    "paperbackPrice": 0,
    "soldEbookAmount": 0,
    "soldPaperbackAmount": 0,
    "currentPaperbackAmount": 10
  }
  ```
  - Updating book data.
  Method: PUT
  ```
  http://localhost:9001/api/v1/book
  ```
  Body JSON:
  ```
  {
    "title": "new book 1",
    "synopsis": "",
    "isbn10": "",
    "isbn13": "",
    "language": "",
    "publisher": "",
    "edition": "",
    "ebookPrice": 0,
    "paperbackPrice": 0,
    "soldEbookAmount": 0,
    "soldPaperbackAmount": 0,
    "currentPaperbackAmount": 10
  }
  ```
  - Deleting book data.
  Method: DELETE
  PARAM: book_id
  ```
  http://localhost:9001/api/v1/book/{book_id}
  ```
  - Fulfilling book to store (update amount of book).
  Method: PUT
  ```
  http://localhost:9001/api/v1/book/fulfill/{book_id}
  ```
  Body JSON:
  ```
  {
    "bookAmount": 10
  }
  ```
  - Selling book (update sold amount of book).
  Method: PUT
  ```
  http://localhost:9001/api/v1/book/sell/{book_id}
  ```
  Body JSON:
  ```
  {
	"bookType": "paperback",
	"soldAmount": 3
  }
  ```
  - Listing bestseller. (decide by amount of book that has been sold.)
  Method: GET
  Params: query string
  skip: number
  limit: number
  ```
  http://localhost:9001/api/v1/books/bestseller?filter=ddd&sort=DATE_ASC&skip=0&limit=2
  ```
