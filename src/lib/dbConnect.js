import mongoose from "mongoose"

export const  dbConnect = async() =>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
    } catch (error) {
      console.log("error  in db connection" , error)
      throw new error("failed to connect to mongodb")
    }
}