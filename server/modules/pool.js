const pg = require('pg');
const Pool = pg.Pool;

const config = {
  host: 'localhost',
  database: 'songs'
};

const pool = new Pool(config);

// pool.on('connect', () => {
//   console.log('\tserver-database connection happened.');
// });

pool.on('error', (poolError) => {
  console.error(poolError);
});


module.exports = pool;