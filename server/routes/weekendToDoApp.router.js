const express = require('express');
const weekendToDoAppRouter = express.Router();

// DB CONNECTION

const pool = require('../modules/pool.js');
module.exports = weekendToDoAppRouter;

//GET

weekendToDoAppRouter.get('/', (req, res) => {
  const sqlText = 'SELECT * FROM "toDoList";'
  pool.query(sqlText)
    .then((dbRes) => {
      const toDoListDB = dbRes.rows;
      console.log(`${dbRes.rows.length} rows to send`)
      res.send(toDoListDB)
    }).catch((dbErr) => {
      console.error(dbErr);
    });
});
  

// POST
weekendToDoAppRouter.post('/', (req, res) => {
  const newTask = req.body;
   console.log('Adding task', newTask);

  const sqlText =(`
    INSERT INTO "toDoList"
    ("task", "instructions")
    VALUES
    ($1, $2);
    `);
  const sqlValues = [
    newTask.task,
    newTask.instructions,
  ];
  pool.query(sqlText, sqlValues)
    .then((dbRes) => {
      console.log(dbRes);
      res.sendStatus(201);  // OK, CREATED
    })
    .catch((dbErr) => {
      console.error(dbErr);
    })
});


