// Estrutura de dados da table produtos
interface IProduct {
    id_produto?: number; //id opcional, pois nem sempre é necessários passar o id nas manipilações de dados 
    nome: string;
    descricao: string;
    valor: number;
    quantidade_atual: number
}

export default IProduct;
