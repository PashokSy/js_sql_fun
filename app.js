require('dotenv/config');
const pg = require('pg');

console.log(process.env.PASSWORD)

const pool = new pg.Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'recipeguru',
  password: process.env.PASSWORD,
  port: 5432,
})




const test = async () => {  
  const { rows } = await pool.query('SELECT * FROM ingredients');
  console.log(rows)
}
test()
