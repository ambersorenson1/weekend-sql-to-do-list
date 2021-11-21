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
    ("task", "complete", "notes")
    VALUES
    ($1, $2, $3);
    `);
  const sqlValues = [
    newTask.task,
    newTask.complete,
    newTask.notes,
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

//DELETE
weekendToDoAppRouter.delete('/:id', (req, res) => {
  console.log('DELETE /tasks/:id');
  console.log('req.params:', req.params);
  const taskIdToDelete = req.params.id;
  const sqlValues = [ taskIdToDelete ];
  const sqlText = `
    DELETE FROM "toDoList"
      WHERE "id"=$1;
  `;
  pool.query(sqlText, sqlValues)
    .then((dbResult) => {
      res.sendStatus(200);
    })
    .catch((dbErr) => {
      console.error(dbErr);
      res.sendStatus(500);
    })
});


//PUT
weekendToDoAppRouter.put('/:id', (req, res) => {
  console.log('req.params', req.params);
  const taskToUpdate = req.params.id;
  const sqlText = `
    UPDATE "toDoList"
      SET "complete"=$1
      WHERE "id"=$2;
  `;
  const sqlValues = [
    'Y',
    taskToUpdate
  ]

  pool.query(sqlText, sqlValues)
    .then((dbResult) => {
      res.sendStatus(200);
    }).catch((dbErr) => {
      console.error(dbErr);
      res.sendStatus(500);
    })
});

