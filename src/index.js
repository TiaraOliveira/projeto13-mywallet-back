import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { loginUser, createUser } from './controllers/userController.js';


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// São rotas relacionada diretamente ao usuario
app.post('/login', loginUser);
app.post('/cadastrar', createUser);

const PORT = process.env.PORT

app.listen(PORT, ()=>{console.log("Servidor funcionando")})