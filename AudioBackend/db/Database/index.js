import mongoose from 'mongoose';

const mongooseDatabase = () =>{
    mongoose.connect('mongodb://127.0.0.1:27017/Audio')
  .then(() => console.log('Connected!'));
}



export default mongooseDatabase