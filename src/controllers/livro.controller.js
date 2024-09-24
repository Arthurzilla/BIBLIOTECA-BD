const livroService = require('../services/Livro.service')
const mongoose = require('mongoose')

const save = async(req, res) => {

    //verifica se o atributo está escrito corretamente
    const {title, author} = req.body;

    if(!title || !author){
        res.status(400);
        res.send({message: "preencha corretamente"})
    }

    //declara a const livro e atribui a função saveService e o corpo da req como parâmetro
    const livro = await livroService.saveService(req.body)

    //se o livro for diferente do que tem que ser, dá erro
    if(!livro){
        res.status(400);
        res.send({message: 'erro ao cadastrar livro'})
    }

    res.status(201)
    res.send({
        message: "livro cadastrado com sucesso",
        livro:{
            title, author
        }
    })
}

module.exports = {save}