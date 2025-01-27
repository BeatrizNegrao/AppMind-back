import { Request, Response, Router } from 'express';
import ProductRepository from '../repositories/ProductRepository';
import IProduct from '../interfaces/IProduct';

const productRouter = Router();

// Lista todos os usuários
productRouter.get('/', async (_req: Request, res: Response): Promise<void> => {
    const products = await ProductRepository.getProduct();
    res.status(200).json(products);
});

// Cria um novo usuário
productRouter.post('/', async (req: Request, res: Response): Promise<void> => {
    const product: IProduct = req.body;
    const newProduct = await ProductRepository.createProduct(product);
    res.status(201).json(newProduct);
});

// Edita um usuário existente
productRouter.put('/:id', async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id);
    const product: IProduct = req.body;
    const updatedProduct = await ProductRepository.updateProduct(id, product);

    if (!updatedProduct) {
        res.status(404).json({ error: 'Usuário não encontrado' });
        return;
    }

    res.status(200).json(updatedProduct);
});

// Remove um usuário
productRouter.delete('/:id', async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id);
    await ProductRepository.deleteProduct(id);
    res.status(204).send();
});

export default productRouter;
