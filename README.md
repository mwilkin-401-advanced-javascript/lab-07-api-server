# Lab 07 API-Server

[![Build Status](https://www.travis-ci.com/mwilkin-401-advanced-javascript/lab-04.svg?branch=master)](https://www.travis-ci.com/mwilkin-401-advanced-javascript/lab-04)

### Author: Matt Wilkin and Felipe Delatorre

### Links and Resources
[submission PR](https://github.com/mwilkin-401-advanced-javascript/lab-07-api-server/pull/1)

[travis](https://www.travis-ci.com/mwilkin-401-advanced-javascript/lab-04)


### Modules
#### `utils.js`
Helps mananage crud operations to the database.

#### `server.js`
Manages the routes and then runs function based on the route from the utils module.


### Setup
#### `.env` requirements
* `PORT` - Port Number. Default is 3000

#### Running the app
* `npm start` - starts the server on `localhost:3000`
* GET: `/categories`
  * Returns a JSON object with data from databse
* GET: `/categories/:id`
  * Returns a JSON object with contents from object whose id match
* POST: `/categories/`
  * Post data to db and returns a JSON object with the contents that were added
* PUT: `/categories/:id`
  * Edits an existing object in db and returns a JSON object with contents from object whose id match
* DELETE: `/categories/:id`
  * Deletes JSON object whose id match
  
#### Tests
`npm test` - May act strage on first run. Should pass on second run

#### UML
![](./assets/uml.png)
