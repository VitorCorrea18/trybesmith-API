import { Router } from 'express';
import { ProductsControllers } from '../controllers';
import { ProductValidation } from '../middlewares';

const productsRouter = Router();

const ProductsCtrl = new ProductsControllers();
const ProductVal = new ProductValidation();

productsRouter.get('/', ProductsCtrl.getAll);
productsRouter.post('/', ProductVal.validateProduct, ProductsCtrl.create);

export default productsRouter;