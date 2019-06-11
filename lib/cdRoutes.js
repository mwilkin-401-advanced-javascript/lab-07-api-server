'use strict';

const app = require('express');

const router = app.Router();

router.get('/d', (req,res, next) =>{
  next(res.json('This is an error route'));
});

router.get('/b/:num', (req, res, next) =>{
  let num = req.params.num;
  num = num * num;
  res.send({number:num});
});

module.exports = router;