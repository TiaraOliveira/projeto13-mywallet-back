import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use(authRouter);
app.use(extractRouter);






const PORT = process.env.PORT

app.listen(PORT, ()=>{console.log("Servidor funcionando")})