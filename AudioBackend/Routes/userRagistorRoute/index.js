import express from 'express'
import { LoginUser, UserRagistor } from '../../db/Middleware/index.js';

const userRagistor = express.Router();

userRagistor.post('/ragistor',UserRagistor)
userRagistor.post('/login',LoginUser)



export default userRagistor