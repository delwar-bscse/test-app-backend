import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter your name"]
    },
    age:{
        type:Number,
        required: true
    },
    email:{
        type:String,
        required:[true,"Please enter your email"],
        unique:true
    },
    gender:{
        type:String,
        required: true
    },
    company:{
        type:String,
        required: true
    },
    phone:{
        type:String,
        required: true
    },
    address:{
        type:String,
        required: true
    },
    friends:[
        {
            id:Number,
            name:String
        }
    ]
});

const userModel = mongoose.model("users",userSchema);

export default userModel;