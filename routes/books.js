var express = require('express');
var router = express.Router();
var db = require('../db/node_fake_db');
router.route('/')
  .get((req, res) => {
    res.json(db.findAll())
  })
  .post((req, res) => {
   // res.json(db.save())
    console.log(req.body)
  })
  .put((req, res) => {
    res.json(db.save())
  })
  .delete((req, res) => {
    res.json(db.del())
  })


module.exports = router;
