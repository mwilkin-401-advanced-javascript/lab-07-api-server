'use strict';


module.exports = exports = {};

/**@module utils */

/**
 * @param {array}
 * @return {object} 
 */
exports.get = (db) => {
  let count = db.length;
  let results = db;

  return {count, results};
};

/**
 * @param {obj} req - request params from url
 * @param {array} db - in memory database
 * @return {object} 
 */
exports.getById = (req, db) => {
  let id = req.params.id;
  let record = db.filter((record) => record.id === parseInt(id));
  return record[0];
};

/**
 * @param {obj} req - request params from url
 * @param {array} db - in memory database
 * @return {object} 
 */

exports.post = (req, db) => {
  let {name} = req.body;
  let record = {name};
  record.id = db.length + 1;
  db.push(record);
  return record;
};

/**
 * @param {obj} req - request params from url
 * @param {array} db - in memory database
 * @return {object} 
 */
exports.put = (req, db) => {
  let id = req.params.id;
  let {name} = req.body;
  let record;
  db.forEach(element => {
    if(element.id === parseInt(id)){
      element.name = name;
      record = element;
    }
  });
  return record;
};
/**
 * @param {obj} req - request params from url
 * @param {array} db - in memory database
 * @return {object} 
 */
exports.delete = (req, db) => {
  let id = req.params.id;
  let count = 0;
  db.forEach(element => {
    if (element.id !== parseInt(id)) {
      count++;
    }
  });
  db.splice(count, 1);
  return db;
};