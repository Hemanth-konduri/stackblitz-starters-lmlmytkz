const express = require('express');
const mongoose = require('mongoose'); 
const { resolve } = require('path');
require("dotenv").config(); 

const app = express();
const port = 3010;

app.use(express.static('static'));
app.use(express.json()); 

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.error("MongoDB connection error:", err));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
