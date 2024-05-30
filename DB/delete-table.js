require('dotenv').config({path:'.env.development.local'});
const {sql} = require('@vercel/postgres')

async function execute() {
    const {rows} = await sql`DELETE FROM userslocal WHERE id = 4`
   console.log(rows)
}

execute()