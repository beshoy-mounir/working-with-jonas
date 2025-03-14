// mongoose
const app = require(`./app.js`);
const mongoose = require(`mongoose`);

const db =
  "mongodb+srv://beshoymounir22:A9XjdMc59qy1VbZ9@cluster0.1tsmy.mongodb.net/natours-test?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true, // Fixes ensureIndex deprecation warning
    writeConcern: { w: "majority" }, // Fixes w, wtimeout, j, and fsync warnings
  })
  .then(() => console.log("✅ Database connected successfully"))
  .catch((err) => console.error("❌ Database connection error:", err));

// listening to the server
const port = 3000;
app.listen(port, () => console.log(`App Running on Port ${port}`));
