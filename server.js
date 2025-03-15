const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require(`./app.js`);
const mongoose = require(`mongoose`);

// Update connection string format
const db = process.env.DATABASE.replace(
  `<password>`,
  process.env.DATABASE_PASSWORD,
);

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true, // Ensures proper connection handling
  })
  .then(() => console.log('✅ Database connected successfully'))
  .catch((err) => console.error('❌ Database connection error:', err));

const port = process.env.PORT || 3000; // Provide a default port in case env variable is missing
app.listen(port, () => console.log(`🚀 App Running on Port ${port}`));
