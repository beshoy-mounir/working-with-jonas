const mongoose = require(`mongoose`);

const tourSchma = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Tour Must Have A Name'],
    unique: true,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: [true, 'Tour Must Have A Price'],
  },
});

const Tour = mongoose.model('Tour', tourSchma);

module.exports = Tour;
