
import { AudioAddDatabase } from "../Schema/Audio/index.js"
import { LoginUserDatabase, UserRagistorDatabase } from "../Schema/Ragister/index.js"

const UserRagistor = (req,res) =>{
    UserRagistorDatabase(req,res)
}

const LoginUser = (req,res) =>{
    LoginUserDatabase(req,res)
}



export {UserRagistor,LoginUser}