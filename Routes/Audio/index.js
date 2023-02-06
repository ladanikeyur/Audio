import express from 'express'
import { AudioAdd, AudioDelete, Audioget, AudioUpdate } from '../../db/Middleware/Audio.js';

const AudioRoutes = express.Router();

AudioRoutes.post('/allAudio',Audioget)
AudioRoutes.post('/uploadAudio',AudioAdd)
AudioRoutes.patch('/audioUpdate',AudioUpdate)
AudioRoutes.delete('/audiodelete',AudioDelete)


export default AudioRoutes