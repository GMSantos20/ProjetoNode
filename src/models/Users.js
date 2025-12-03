import mongoose from "mongoose";

const userSchema =  new mongoose.Schema({
    usuario:{
        type:String,
        required:true,
        unique:true,
    },
    senha:{
        type:String,
        required:true,
        select:false
    }

});
const User =mongoose.model('User',userSchema);
export default User