const {Pool, Client} = require('pg');
require('dotenv').config();

console.log(process.env.PGDATABASE)
console.log(process.env.PGHOST)
console.log(process.env.PGPASSWORD)
console.log(process.env.PGUSER)
console.log(process.env.PGPORT)


const pool = new Client({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
})

module.exports = pool;