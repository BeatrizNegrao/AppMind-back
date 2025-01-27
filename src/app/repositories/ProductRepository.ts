import { AppDataSource } from '../../database/data-source';
import Product from '../entities/Product';
import IProduct from '../interfaces/IProduct';

const productRepository = AppDataSource.getRepository(Product);

const getProduct = (): Promise<IProduct[]> => productRepository.find();

const createProduct = (product: IProduct): Promise<IProduct> => 
    productRepository.save(product);

const updateProduct = async (id: number, product: IProduct): Promise<IProduct | null> => {
    const existingProduct = await productRepository.findOneBy({ id_produto: id });
    
    if (!existingProduct) {
        return null;
    }

    await productRepository.update(id, {
        nome: product.nome,
        descricao: product.descricao,
        valor: product.valor,
        quantidade_atual: product.quantidade_atual,
    });

    return productRepository.findOneBy({ id_produto: id });
};

const deleteProduct = async (id: number): Promise<boolean> => {
    const result = await productRepository.delete(id);
    return result.affected ? result.affected > 0 : false;
};

const getProductById = (id: number): Promise<IProduct | null> =>
    productRepository.findOneBy({ id_produto: id });

export default { 
    getProduct, 
    createProduct, 
    updateProduct, 
    deleteProduct, 
    getProductById 
};