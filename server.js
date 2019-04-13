const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets- Heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googlebooks"
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
