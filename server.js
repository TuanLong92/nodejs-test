import express from "express";
import * as dotenv from "dotenv";
import {
    userRouter,
    studentRouter,
    }
    from "./routers/index.js";
import cors from "cors";

dotenv.config();//config port
const app = express();

// Kích hoạt CORS cho tất cả các routes
app.use(cors());

app.use(express.json());//middlewares read body
//call route
app.use('/users', userRouter);
app.use('/students', studentRouter);
app.get('/', (req,res) => {
    res.send('response from route')
})
app.listen(process.env.PORT || 3000, async () => {
    console.log(`listening on port ${process.env.PORT}`);
});