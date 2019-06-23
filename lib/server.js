'use strict';

const express = require('express');
const app = express();
const utils = require('../utils/crud');

const PORT = process.env.PORT || 3000;

let db = [];

app.use(express.json());

app.use( (req,res,next) => {
  console.log('LOG:', req.method, req.path);
  next();
});

app.get('/categories', (req,res,next) => {
  res.json(utils.get(db));
});

app.get('/categories/:id', (req,res,next) => {
  res.json(utils.getById(req, db));
});

app.post('/categories', (req,res,next) => {
  res.json(utils.post(req, db));
});

app.put('/categories/:id', (req,res,next) => {
  res.json(utils.put(req, db));
});

app.delete('/categories/:id', (req,res,next) => {
  res.json(utils.delete(req, db));
});

app.get('*', (req,res) =>{
  res.json('Not a valid route');
});

module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};