import { Router } from 'express';
import ProductsController from '../controllers';

const productsRouter = Router();

const Products = new ProductsController();

productsRouter.get('/products', Products.getAll);

export default productsRouter;