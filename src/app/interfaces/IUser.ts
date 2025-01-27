// Estrutura de dados da table usuarios
interface IUser {
    id_usuarios?: number; //id opcional, pois nem sempre é necessários passar o id nas manipilações de dados 
    nome: string;
    email: string;
    senha: string;
}

export default IUser;

