    import { Request, Response, Router } from 'express'
    import User from '../entities/User'
    import UserRepository from '../repositories/UserRepository'
    import IUser from "../interfaces/IUser"


    const userRouter = Router(); // Criação de um gestor de rotas para usuarios


    userRouter.get('/', async (_req: Request, res: Response): Promise<void> => {
        const users = await UserRepository.getUsers();
        res.status(200).json(users);
    });

    export default userRouter; 



    