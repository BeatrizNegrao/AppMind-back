import { Request, Response, Router } from 'express';
import UserRepository from '../repositories/UserRepository';
import IUser from '../interfaces/IUser';

const userRouter = Router();

// Lista todos os usuários
userRouter.get('/', async (_req: Request, res: Response): Promise<void> => {
    const users = await UserRepository.getUsers();
    res.status(200).json(users);
});

// Cria um novo usuário
userRouter.post('/', async (req: Request, res: Response): Promise<void> => {
    const user: IUser = req.body;
    const newUser = await UserRepository.createUser(user);
    res.status(201).json(newUser);
});

// Edita um usuário existente
userRouter.put('/:id', async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id);
    const user: IUser = req.body;
    const updatedUser = await UserRepository.updateUser(id, user);

    if (!updatedUser) {
        res.status(404).json({ error: 'Usuário não encontrado' });
        return;
    }

    res.status(200).json(updatedUser);
});

// Remove um usuário
userRouter.delete('/:id', async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id);
    await UserRepository.deleteUser(id);
    res.status(204).send();
});

export default userRouter;
