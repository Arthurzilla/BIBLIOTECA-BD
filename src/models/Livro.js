const { default: mongoose } = require("mongoose");

const LivroSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    }
})


const Livro = mongoose.model("Livro", LivroSchema)
module.exports = Livro