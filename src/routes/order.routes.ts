import { Router } from 'express';
import { OrderControllers } from '../controllers';
import { UserValidation, OrderValidation } from '../middlewares';

const orderRouter = Router();

const orderCtrl = new OrderControllers();
const userVal = new UserValidation();
const orderVal = new OrderValidation();

orderRouter.get('/', orderCtrl.getAll);
orderRouter.post('/', userVal.validateLoggedUser, orderVal.validateOrder, orderCtrl.create);

export default orderRouter;