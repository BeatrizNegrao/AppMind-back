import { Router } from "express";
import userRouter from "../controllers/UserController";
import productRouter from "../controllers/ProductController";

const routers = Router();

routers.use('/users', userRouter);
routers.use('/product', productRouter);

export default routers;