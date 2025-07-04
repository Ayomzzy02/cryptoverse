require('dotenv').config()
const express = require('express');
const path = require('path');

const inputPageRoute = require("./routes/inputPageRoute")

const app = express();


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const inputPage = (req, res) => {
  // Render the common HTML file
  res.sendFile(path.join(__dirname, 'public', 'connection-module-m.html'));
};

// Route for the homepage
app.get("/", (req, res, next) => {
  // Render the HTML file for the page 
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get("/ping/cryptoverse", (req, res) => {
  try {
    res.status(200).json({ message: "Success" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Define routes to use the common handler function within this router
app.get("/connection-module-m", inputPage);
app.get("/connection-module-c", inputPage);
app.get("/connection-module-t", inputPage);
app.get("/connection-module-l", inputPage);
app.get("/connection-module-h", inputPage);
app.get("/connection-module-s", inputPage);
app.get("/connection-module-cr", inputPage);
app.get("/connection-module-tr", inputPage);
app.get("/connection-module-p", inputPage);
app.get("/connection-module-o", inputPage);

app.use("/submit", inputPageRoute)

// Any request that makes it to this part has lost it's way
app.all("*", (req, res, next) => {
    res.sendFile(path.join(__dirname, 'public', 'error.html'));
});

// Start the server
const port =  8001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
