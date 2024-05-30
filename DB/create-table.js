require('dotenv').config({path:'.env.development.local'});
const {sql} = require('@vercel/postgres')

async function execute() {
    const deleteTable = await sql`DROP TABLE userslocal`

    const createTable = await sql`CREATE TABLE IF NOT EXISTS userslocal (
        id SERIAL PRIMARY KEY,
        nama VARCHAR(30) NOT NULL,
        password VARCHAR(60) NOT NULl,
        username VARCHAR(15) NOT NULl UNIQUE,
        role INT,
        status INT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`;
    console.log(createTable)
}

execute()