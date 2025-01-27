import express from 'express';
import cors from 'cors';

const api = express();

// Configuração do CORS para permitir requisições do frontend
api.use(cors({
    origin: '*', // Em produção, especificar o domínio exato
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

api.use(express.json());

export default api;