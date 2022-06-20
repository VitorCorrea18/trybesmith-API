import { Router } from 'express';
import { OrderControllers } from '../controllers';
import { UserValidation } from '../middlewares';

const orderRouter = Router();

const orderCtrl = new OrderControllers();
const userVal = new UserValidation();

orderRouter.get('/', orderCtrl.getAll);
orderRouter.post('/', userVal.validateLoggedUser, orderCtrl.create);

export default orderRouter;