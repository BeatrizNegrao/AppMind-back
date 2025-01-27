import Product from '../entities/Product';
import IProduct from '../interfaces/IProduct';
import { AppDataSource } from '../../database/data-source';

const productRepository = AppDataSource.getRepository(Product);

const getProduct = (): Promise<IProduct[]> => productRepository.find();

const createProduct = (product: IProduct): Promise<IProduct> => productRepository.save(product);

const updateProduct = async (id: number, product: IProduct): Promise<IProduct | null> => {
    await productRepository.update(id, product);
    const updatedProduct = await productRepository.findOneBy({ id_produto: id });
    if (!updatedProduct) {
        return null; // Caso não encontre o produto, retorne null.
    }
    return updatedProduct;
};
const deleteProduct = (id: number): Promise<void> => productRepository.delete(id).then(() => {});

export default { getProduct, createProduct, updateProduct, deleteProduct };
