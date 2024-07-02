const {Pool, Client} = require('pg');
require('dotenv').config();


const pool = new Client({
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DATABASE,
    password: process.env.POSTGRES_PASSWORD,
})

module.exports = pool;