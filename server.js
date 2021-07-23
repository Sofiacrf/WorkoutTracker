const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
// var compression = require('compression')

const PORT = process.env.PORT || 3000;

const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutracker", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

// routes
app.use(require("./Develop/routes/api"));
app.use(require("./Develop/routes/html"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});