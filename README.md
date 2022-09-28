# Express Project

## Heroku
https://expressproject01.herokuapp.com/

## Testes com cURL 

### GET /books
```bash
curl 'http://localhost:3000/books'
```

### GET /books/:id
```bash
curl 'http://localhost:3000/books/1'
```

### POST /books
```bash
curl -X POST -d '{ id: 5, titulo: 'Título', autor: 'Autor', isbn: 00000, ano_lancamento: 2001 }' 'http://localhost:3000/books'
```

### PUT /books/:id
```bash
curl -X PUT -d '{ titulo: 'Título', autor: 'Autor', isbn: 00000, ano_lancamento: 2001 }' 'http://localhost:3000/books/1'
```

### DELETE /books/:id
```bash
curl -X DELETE 'http://localhost:3000/books/1'
```
