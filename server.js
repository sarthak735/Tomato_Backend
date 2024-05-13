import express from "express"
import cors from "cors"
import { connectDb } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"



//app config
const app = express()
const port = process.env.PORT || 4000


//middleware
app.use(express.json())
app.use(cors())


//DB Connection
connectDb();


// api endpoints
app.use("/api/food", foodRouter)
app.use('/images', express.static('uploads'))


app.get('/', (req,res) => {
    res.send("API Is Working")
})



app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
})