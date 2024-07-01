const mongoose = require('mongoose')

const dbUri = 'mongodb+srv://bahirhussain:782284mbh@cluster0.glbbsog.mongodb.net/book_register_db?retryWrites=true&w=majority&appName=Cluster0'


module.exports = () => mongoose.connect(dbUri)