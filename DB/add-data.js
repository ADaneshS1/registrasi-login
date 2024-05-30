require('dotenv').config({path:'.env.development.local'});
const {sql} = require('@vercel/postgres')
const bcrypt = require('bcryptjs')

async function hashPassword(password) {
    const salt = await bcrypt.genSalt(1);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
}

async function execute() {
    const password = "B4c0/\/";
    const hashedPassword = await hashPassword(password);
    const addData = await sql`INSERT INTO userslocal (nama,username,password,role,status) VALUES ('Asep','4s3p',${hashedPassword},0,0)`;
    console.log(addData);
}

execute();