'use strict';

const utils = require('../utils/crud');

describe('utils module', () => {

  let db = [];

  beforeEach(() => {
    db.push({
      'name':'matt',
      'id':1,
    });
    db.push({
      'name':'ed',
      'id':2,
    });
  });

  afterEach(() => {
    db = [];
  });

  describe('get()', () => {
    it('should get items from database', () => {
      expect(utils.get(db)).toEqual({'count': 2, 'results': [{'id': 1, 'name': 'matt'}, {'id': 2, 'name': 'ed'}]});
    });
  });

  describe('getById()', () => {
    it('should get specific item by id', () => {
      let req = {
        'params': {
          'id': 1,
        },
      };
      let result = utils.getById(req, db);
      expect(result).toEqual({'id': 1, 'name': 'matt'});
    });
  });

  describe('post()', () => {
    it('should add to db and send back what was added', () => {
      let req = {
        'body': {
          'name': 'dog',
        },
      };
      expect(utils.post(req, db)).toEqual({'id': 3, 'name': 'dog'});
    });
  });

  describe('put()', () => {
    it('should update a record return that record updated', () => {
      let req = {
        'params': {
          'id': 1,
        },
        'body': {
          'name':'tia',
        },
      };
      let result = utils.put(req, db);
      expect(result).toEqual({'id': 1, 'name': 'tia'});
    });
  });

  describe('delete()', () => {
    it('should delete an item and return db', () => {
      let req = {
        'params': {
          'id': 1,
        },
      };
      let result = utils.delete(req, db);
      expect(result).toEqual([{'id': 1, 'name': 'matt'}]);
    });
  });
});