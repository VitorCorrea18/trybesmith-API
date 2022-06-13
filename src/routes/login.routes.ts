import { Router } from 'express';
import { UserControllers } from '../controllers';
import { UserValidation } from '../middlewares';

const loginRouter = Router();

const userCtrl = new UserControllers();
const userVal = new UserValidation();

loginRouter.post('/', userVal.validateLogin, userCtrl.login);

export default loginRouter;