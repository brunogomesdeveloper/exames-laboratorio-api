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
    country: { type: String },
    state: { type: String },
    city: { type: String },
    neighboorhod: { type: String },
    street: { type: String },
    number: { type: String },
    zipCode: { type: String }
  },

  exams: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Exam",

    }
  ]

});

module.exports = mongoose.model('Laboratory', schema);