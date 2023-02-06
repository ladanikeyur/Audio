import express from 'express'
import mongooseDatabase from './db/Database/index.js';
import dotenv from 'dotenv'
import cors from 'cors';
import userRagistor from './Routes/userRagistorRoute/index.js';
import AudioRoutes from './Routes/Audio/index.js';

dotenv.config()
const app = express();
app.use(express.json());
app.use(cors())
mongooseDatabase()


app.use(userRagistor)
app.use(AudioRoutes)


app.listen(8000,() =>{console.log("App is Runing in 8000")})