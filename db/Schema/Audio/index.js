import mongoose from "mongoose";


const Ragister = new mongoose.Schema({
    audio:{require:true,type:String},
    name:{require:true,type:String},
    image:{require:true,type:String},
    Decscription:{require:true,type:String},
});


const Audio = mongoose.model('Audio', Ragister);


const AudioAddDatabase = async (req,res) =>{
    const {audio,name,image,Decscription} = req.body
        const audios = Audio({
            audio:audio,
            name:name,
            image:image,
            Decscription:Decscription,
        })
        audios.save()
        res.send("Audio Add Sucessfully")
}

const AudioUpdateDatabase = async (req,res) =>{
    const {audio,name,image,Decscription,id} = req.body
    const audiofind = await Audio.findOne({ id: id })
     await Audio.updateOne({id:id},{
        audio:audio,
        name:name,
        image:image,
        Decscription:Decscription
    })
    res.send("AUdio Update Sucessfully")
}


const AudioDeleteDatabase = async (req,res) =>{
    const {id} = req.body
    const audiofind = await Audio.deleteOne({ id: id })
    res.send("ddfdf")
}

const AudioGetDatabase = async (req,res) =>{
    const audiofind = await Audio.find({})
    console.log(audiofind)
    res.send(audiofind)
}

export {AudioAddDatabase,AudioUpdateDatabase,AudioDeleteDatabase,AudioGetDatabase}