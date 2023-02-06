import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const Ragister = new mongoose.Schema({
 email:{require:true,type:String},
 password:{require:true,type:String}
});


const userRagistor = mongoose.model('User', Ragister);


const UserRagistorDatabase = async (req,res) =>{
    const {email,password} = req.body
    const oldEmail = await userRagistor.findOne({ email: email })
    if (oldEmail) {
        res.status(401).send({ Status: "Faild", Message: "user already exist" })
    } else {
    try {
        const salt = await bcrypt.genSalt(10)
        const hashpassword = await bcrypt.hash(password, salt)
        const user = userRagistor({
            email:email,
            password:hashpassword
        })
        user.save()
        res.send("User Ragistor Sucessfuly")
    } catch (error) {
        res.status(401).send({ status: "faild", message: "Please Check your Username and Password" })
    }
}
}

const LoginUserDatabase = async (req,res) =>{
    const { email, password } = req.body
    const finduser = await userRagistor.findOne({ email: email })
    const finduserPassword = await bcrypt.compare(password, finduser.password)
    console.log(finduser)
    if (finduser.email === email && finduserPassword === true) {
        const token = await jwt.sign({ id: finduser._id, email: finduser.email }, process.env.JWT_KEY)
        res.status(200).send({ status: "success", message: "user login successfully", token: token })
    } else {
        res.status(401).send({ status: "faild", message: "invalid user id and password" })
    }
}


export {UserRagistorDatabase,LoginUserDatabase}