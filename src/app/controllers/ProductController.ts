import { Request, Response, Router } from 'express';
import ProductRepository from '../repositories/ProductRepository';
import IProduct from '../interfaces/IProduct';

const productRouter = Router();

// Lista todos os produtos
productRouter.get('/', async (_req: Request, res: Response): Promise<void> => {
    try {
        const products = await ProductRepository.getProduct();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar produtos' });
    }
});

// Busca produto por ID
productRouter.get('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const id = parseInt(req.params.id);
        const product = await ProductRepository.getProductById(id);
        
        if (!product) {
            res.status(404).json({ error: 'Produto não encontrado' });
            return;
        }
        
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar produto' });
    }
});

// Cria um novo produto
productRouter.post('/', async (req: Request, res: Response): Promise<void> => {
    try {
        const product: IProduct = req.body;
        
        // Validações básicas
        if (!product.nome || !product.descricao || !product.valor || product.quantidade_atual === undefined) {
            res.status(400).json({ error: 'Campos obrigatórios não preenchidos' });
            return;
        }

        const newProduct = await ProductRepository.createProduct(product);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar produto' });
    }
});

// Edita um produto existente
productRouter.put('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const id = parseInt(req.params.id);
        const product: IProduct = req.body;
        
        // Validações básicas
        if (!product.nome || !product.descricao || !product.valor || product.quantidade_atual === undefined) {
            res.status(400).json({ error: 'Campos obrigatórios não preenchidos' });
            return;
        }

        const updatedProduct = await ProductRepository.updateProduct(id, product);
        
        if (!updatedProduct) {
            res.status(404).json({ error: 'Produto não encontrado' });
            return;
        }
        
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar produto' });
    }
});

// Remove um produto
productRouter.delete('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const id = parseInt(req.params.id);
        const deleted = await ProductRepository.deleteProduct(id);
        
        if (!deleted) {
            res.status(404).json({ error: 'Produto não encontrado' });
            return;
        }
        
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar produto' });
    }
});

export default productRouter;