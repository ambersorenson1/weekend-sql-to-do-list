const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const weekendToDoAppRouter = require('./routes/weekendToDoApp.router')

app.use(express.urlencoded({extended: true}));
app.use(express.static('server/public'));

// ROUTES
app.use('/tasks', weekendToDoAppRouter)
// Starts the server, and listens for requests:
app.listen(PORT, () => {
  console.log(`Tu servidor está funcionando. Veremos: http://localhost:${PORT}`)
});