import userModel from '../models/userModel.js';


// Get All Users
export const getAllUsers = async(req,res)=>{
    try {
        const users = await userModel.find({});
        if(!users){
            console.log(users);
            return res.status(400).send("users not found");
        };

        return res.status(200).json({
            status:"Success",
            users: users
        });

    } catch (error) {
        return res.status(400).send("Bad Request");
    };
};