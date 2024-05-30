const {sql} = require("@vercel/postgres")
const bcrypt = require('bcryptjs')

async function api(req,res) {
    try {
        if(req.method !== "POST") {
            return res.status(405).json({message:"Method tidak diperbolehkan"})
        }
        
        const {nama,username,password} = req.body

        const salt = await bcrypt.genSalt(1);
        const hashedPassword = await bcrypt.hash(password, salt);

        const {rows} = await sql`INSERT INTO userslocal (nama,username,password,role,status) VALUES (${nama},${username},${hashedPassword},0,0)`

        res.status(200).json({message:"Succes", data:rows})
    } catch (error) {
        console.log("ADA ERROR ", error)
        return res.status(500).json({message:"Terjadi error,"})
    }
}

export default (api)    