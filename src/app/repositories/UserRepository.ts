import User from '../entities/User'
import IUser from '../interfaces/IUser'
import { AppDataSource } from '../../database/data-source'

const loginRepository = AppDataSource.getRepository(User); //Indica a criação de um repositório que tem como base da entidade usuarios

const getUsers = (): Promise<IUser[]> => { // retorna um array de dados da table de usuarios
    return loginRepository.find();  // find() - método para fazer select * from na table usuarios
}

export default {getUsers};
