const express = require('express')
const db = require('../db')
const router = express.Router()

router.get('/', (req, res) => {
  db.query('SELECT * FROM items', function (error, results, fields) {
  if (error) {
    return res.status(500).json({error:error.message})
  }
  res.json(results)
  // connected!
  });
})

module.exports = router
