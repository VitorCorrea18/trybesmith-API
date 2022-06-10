import { Router } from 'express';
import ProductsController from '../controllers';
import { ProductValidation } from '../middlewares';

const productsRouter = Router();

const ProductsCtrl = new ProductsController();
const ProductVal = new ProductValidation();

productsRouter.get('/', ProductsCtrl.getAll);
productsRouter.post('/', ProductVal.validateProduct, ProductsCtrl.create);

export default productsRouter;