const Livro = require('../models/Livro')

const saveService = (body) => Livro.create(body)
const findAllService = () => Livro.find()
const findByIdService = (id) => Livro.findById(id)

module.exports = {saveService, findAllService, findByIdService}