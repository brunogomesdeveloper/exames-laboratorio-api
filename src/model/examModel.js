const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: Boolean,
        required: true,
        trim: true,
    },
    tipo : {
        type: String,
        enum : ['analise clinica', 'imagem'],
        default: 'analise clinica'
    },
  
});

module.exports = mongoose.model('Exam', schema);