import mongoose from "mongoose";

export const connect = async ()=>{
    console.log(process.env.MONGO_URI)
    return await mongoose.connect("mongodb+srv://famedustevershine:uMztaAOYWOvE85sq@cluster0.genru1r.mongodb.net/");
}
