import mongoose from "mongoose";

const userScehma = new mongoose.Schema({
    clerkId: {type:String, required:true, unique:true},
    email: {type:String, required:true, unique:true},
    photo: {type: String, required: true},
    firstName: {type: String},
    lastName: {type: String},
    creditBalance: {type: Number, defaults:5}
})

const userModel = mongoose.models.user || mongoose.model("user",userScehma)

export default userModel;