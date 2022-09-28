# Express Project

## Heroku
https://expressproject01.herokuapp.com/

## Testes com cURL 

### GET /books
curl 'http://localhost:3000/books'

### GET /books/:id
curl 'http://localhost:3000/books/1'

### POST /books
curl -X POST -d '{ id: 5, titulo: 'Título', autor: 'Autor', isbn: 00000, ano_lancamento: 2001 }' 'http://localhost:3000/books'

### PUT /books/:id
curl -X PUT -d '{ titulo: 'Título', autor: 'Autor', isbn: 00000, ano_lancamento: 2001 }' 'http://localhost:3000/books/1'

### DELETE /books/:id
curl -X DELETE 'http://localhost:3000/books/1'
