const mongoose = require('mongoose');

const connectDB = ()=>{

    console.log('aguardando conexão')
    mongoose.connect('mongodb://127.0.0.1:27017/LivrosDB')
    .then(() => console.log('conectado ao mongodb'))
    .catch(err => console.error('Erro de conexão com o MongoDB:', err));
}

module.exports = connectDB