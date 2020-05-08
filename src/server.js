'use strict';

const express = require('express');
const mongoose = require('mongoose');
const PORT = 8080;
const HOST = '0.0.0.0';

mongoose.connect(
  'mongodb://mongo/test-express',
  { useNewUrlParser: true }
)
.then(() => {
  const app = express();

  app.get('/', (req, res) =>{
      res.send("Hello world!");   
  })

  app.listen(PORT, HOST);

  console.log(`Running on http://${HOST}:${PORT}`);
})
.catch(err => console.log(err));
