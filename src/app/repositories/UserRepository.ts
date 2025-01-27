import User from '../entities/User';
import IUser from '../interfaces/IUser';
import { AppDataSource } from '../../database/data-source';

const userRepository = AppDataSource.getRepository(User);

const getUsers = (): Promise<IUser[]> => userRepository.find();

const createUser = (user: IUser): Promise<IUser> => userRepository.save(user);

const updateUser = async (id: number, user: IUser): Promise<IUser | null> => {
    await userRepository.update(id, user);
    const updatedUser = await userRepository.findOneBy({ id_usuarios: id });
    if (!updatedUser) {
        return null; // Caso não encontre o usuário, retorne null.
    }
    return updatedUser;
};
const deleteUser = (id: number): Promise<void> => userRepository.delete(id).then(() => {});


const findByEmail = (email: string): Promise<IUser | null> => 
    userRepository.findOneBy({ email });

export default { getUsers, createUser, updateUser, deleteUser, findByEmail };
