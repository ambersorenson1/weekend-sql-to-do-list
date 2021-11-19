const express = require('express');
const weekendToDoAppRouter = express.Router();

// DB CONNECTION

const pool = require('../modules/pool.js');
module.exports = weekendToDoAppRouter;
