import { AudioAddDatabase, AudioDeleteDatabase, AudioGetDatabase, AudioUpdateDatabase } from "../Schema/Audio/index.js"

const Audioget = (req,res) =>{
    AudioGetDatabase(req,res)
}
const AudioAdd = (req,res) =>{
    AudioAddDatabase(req,res)
}

const AudioUpdate = (req,res) =>{
    AudioUpdateDatabase(req,res)
}

const AudioDelete = (req,res) =>{
    AudioDeleteDatabase(req,res)
}




export {AudioAdd,AudioUpdate,AudioDelete,Audioget}