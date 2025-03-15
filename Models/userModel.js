const mongoose = require('mongoose');

const userSchma = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, 'Please enter your first name'],
  },
  lastname: {
    type: String,
    required: [true, 'Please enter your first name'],
  },
  email: {
    type: String,
    required: [true, 'Please enter your email'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please enter your password'],
  },
});

const User = mongoose.model('User', userSchma);

module.exports = User;
