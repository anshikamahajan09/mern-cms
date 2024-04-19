import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoute from './routes/auth.route.js';

const app = express();

app.use(express.json());
dotenv.config();

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log('MongoDb is connected');
}) 
.catch((err)=>{
    console.log('Error connecting database',err);
});

app.use('/api/auth',authRoute);

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server error';
    res.status(statusCode).json({
        success:false,
        statusCode,
        message 
    });
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});