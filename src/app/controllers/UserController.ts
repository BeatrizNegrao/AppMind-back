import { Request, Response, Router } from 'express';
import UserRepository from '../repositories/UserRepository';
import IUser from '../interfaces/IUser';
import bcrypt from 'bcrypt';

const userRouter = Router();


userRouter.post('/login', async (req: Request, res: Response): Promise<void> => {
    const { email, senha } = req.body;
    
    try {
        const user = await UserRepository.findByEmail(email);
        
        if (!user) {
            res.status(401).json({ error: 'Usuário não encontrado' });
            return;
        }

        const validPassword = await bcrypt.compare(senha, user.senha);
        
        if (!validPassword) {
            res.status(401).json({ error: 'Senha incorreta' });
            return;
        }

        res.status(200).json({
            id: user.id_usuarios,
            nome: user.nome,
            email: user.email
        });
    } catch (error) {
        console.error('Erro no login:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});





// Lista todos os usuários
userRouter.get('/', async (_req: Request, res: Response): Promise<void> => {
    
    const users = await UserRepository.getUsers();
    res.status(200).json(users);
});



// Cria um novo usuário
userRouter.post('/', async (req: Request, res: Response): Promise<void> => {
    try {
        const user: IUser = req.body;
        
        // Hash da senha
        const salt = await bcrypt.genSalt(10);
        user.senha = await bcrypt.hash(user.senha, salt);
        
        const newUser = await UserRepository.createUser(user);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar usuário' });
    }
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