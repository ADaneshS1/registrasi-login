const {sql} = require("@vercel/postgres")
const bcrypt = require('bcryptjs')

async function api(req,res) {
    try {
        if(req.method !== "PUT") {
            return res.status(405).json({message:"Method tidak diperbolehkan"})
        }

        const {id} = req.query
        const {nama,username,password,role,status} = req.body
        const salt = await bcrypt.genSalt(1);
        const hashedPassword = await bcrypt.hash(password, salt);

        const {rows} = await sql`UPDATE userslocal SET nama = ${nama}, username = ${username}, password = ${hashedPassword}, role = ${role}, status = ${status} WHERE id = ${id}`

        res.status(200).json({message:"Succes", data:rows})
    } catch (error) {
        console.log("ADA ERROR ", error)
        return res.status(500).json({message:"Terjadi error,"})
    }
}

export default (api)    