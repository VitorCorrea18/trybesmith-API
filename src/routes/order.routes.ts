import { Router } from 'express';
import { OrderControllers } from '../controllers';

const orderRouter = Router();

const orderCtrl = new OrderControllers();

orderRouter.get('/', orderCtrl.getAll);

export default orderRouter;