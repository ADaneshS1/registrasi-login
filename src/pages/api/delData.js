const {sql} = require('@vercel/postgres')

async function api(req,res) {
    try {
        if (req.method !== "DELETE") {
            return res.status(405).json({message:"Method salah"})
        }

        const {id} = req.query

        if(!id) {
            return res.status(405).json({message:"Id kosong"}) 
        }

        const {rows} = await sql`DELETE FROM userslocal WHERE id = ${id}`

        return res.status(200).json({message:"Succes",data:rows})
        
    } catch (error) {
        console.log("ADA ERROR ", error)
        return res.status(500).json({message:"Terjadi error,"})
    }
}
export default (api)