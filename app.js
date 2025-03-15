const express = require('express');
const morgan = require('morgan');

const app = express();

// –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// Requiring the Routes

const tourRoute = require('./routes/tourRoutes');
const userRoute = require('./routes/userRoutes');

// –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// MiddleWare

// app.use to call or read middle ware
app.use(morgan('dev'));
// middle ware to but request data sent in the body of request

app.use(express.json());
// express,json() is a middle ware that convert json to js obj automaticaly

// creating custom middle ware
// life cycle of request    req => all middle wares => res

// app.use((req, res, next) => {
//   console.log('Middle ware is cycle 🐶 ');
//   // if we didnt use next() the middle ware cycle will stop and will not continue to and will not send a res
//   next();
// });

// –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// Routes
app.use('/tours', tourRoute);
app.use('/users', userRoute);

module.exports = app;
