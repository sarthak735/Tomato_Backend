import mongoose from "mongoose"

import dotenv from "dotenv"
dotenv.config()

export const connectDb = async () => {

    await mongoose.connect(process.env.MONGOOSE_URL).then(() => console.log("Mongoose Is Connected"))
}