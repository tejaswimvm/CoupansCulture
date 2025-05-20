import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import { connectDB } from './database/db.js';
import userRoute from './route/userRoute.js'
import couponRoute from './route/couponRoute.js'

dotenv.config();

const app =express()
const port = process.env.PORT||3000;
const DATABASE=process.env.DATABASE_URI;

app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:5173/","http://localhost:5173"],
  credentials: true
}))
app.use(express.json());
connectDB(DATABASE)

// app.use("/uploads", express.static("uploads"));

app.use('/api/user',userRoute)
app.use('/api/coupon',couponRoute)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})