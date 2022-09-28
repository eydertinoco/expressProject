var express = require('express');
var router = express.Router();
var db = require('../db/node_fake_db');

router.route('/')
  .get((req, res) => {
    res.json(db.findAll())
  })
  .post((req, res) => {
    const body = req.body
    db.save(body)

    res.json(body)
  })

router.route('/:id')
  .get((req, res) => {
    const book = db.findById(req.params.id)

    if (!book) return res.status(404).json({ error: 'Book not found!' })

    res.json(book)
  })
  .put((req, res) => {
    const id = req.params.id
    const { titulo, autor, isbn, resumo, ano_lancamento } = req.body

    if (!db.findById(id)) return res.status(404).json({ error: 'Book not found!' })

    db.del(id)
    const newBook = {
      id: Number(id), 
      titulo,
      autor,
      isbn,
      resumo,
      ano_lancamento,
    }
    db.save(newBook)

    res.json(newBook)
  })
  .delete((req, res) => {
    db.del(req.params.id)

    res.status(204).json()
  })

module.exports = router;
