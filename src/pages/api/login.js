const {sql} = require("@vercel/postgres")
const bcrypt = require('bcryptjs')

async function api(req,res) {
    try {
        if(req.method !== "GET") {
            return res.status(405).json({message:"Method tidak diperbolehkan"})
        }
        
        const {username,password} = req.body
        const rows = await sql`SELECT * FROM userslocal WHERE username = ${username}`
        console.log(rows);

        res.status(200).json({message:"Succes", data:rows})
    } catch (error) {
        console.log("ADA ERROR ", error)
        return res.status(500).json({message:"Terjadi error,"})
    }
}

export default (api)    