import { Router } from "express";
import userRouter from "../controllers/UserController";

const routers = Router();

routers.use('/users', userRouter);

// Exporta o `routers` corretamente
export default routers;