// we read and do config in top so its available in the rest of the files
const dotenv = require('dotenv');
// DotEnv Read Config
dotenv.config({ path: './config.env' });

// mongoose
const app = require(`./app.js`);
const mongoose = require(`mongoose`);

const db = process.env.DATABASE.replace(
  `<password>`,
  process.env.DATABASE_PASSWORD,
);

mongoose
  .connect(db)
  .then((doc) => {
    // console.log(doc);
  })
  .catch((err) => console.log('error 💥' + err));

// listening to the server
const port = process.env.PORT;
app.listen(port, () => console.log(`App Running on Port ${port}`));
