// Estrutura de dados da table produtos
interface IProduct {
    id_produto?: number;
    nome: string;
    descricao: string;
    valor: number;
    quantidade_atual: number;
}
export default IProduct;