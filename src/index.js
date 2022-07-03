import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import extractRouter from './routes/extractRouter.js';
import authRouter from './routes/authRouter.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use(authRouter);
app.use(extractRouter);







app.listen(process.env.PORT ||3000, ()=>{console.log("Servidor funcionando")})