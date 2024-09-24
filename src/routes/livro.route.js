const router = require('express').Router();
const livroController = require('../controllers/livro.controller')

router.post('/post', livroController.save)
module.exports = router;