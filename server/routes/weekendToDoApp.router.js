const express = require('express');
const weekendToDoAppRouter = express.Router();

// DB CONNECTION

const pool = require('../modules/pool.js');
module.exports = weekendToDoAppRouter;

//GET
// GET
weekendToDoAppRouter.get('/', (req, res) => {
  console.log('GET /tasks');
  const text = 'SELECT * FROM weekend-to-do-app;';
  pool.query(text)
    .then((dbResult) => {
     //  console.log(`${dbResult.rows.length} rows to send.`)
      res.send(dbResult.rows);
    })
    .catch((dbErr) => {
      console.error(dbErr);
      res.sendStatus(500);
    });
});
