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
  address: {
    country: { type: String, required: true, },
    state: { type: String, required: true, },
    city: {  type: String, required: true,},
    neighboorhod: {  type: String, required: true, },
    street: { type: String, required: true, },
    number: {  type: String, required: true, },
    zipCode: {  type: String, required: true, }
  },

  exams: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Exam",

    }
  ]

});

module.exports = mongoose.model('Laboratory', schema);