import { Router } from 'express';
import { UserControllers } from '../controllers';
import { UserValidation } from '../middlewares';

const usersRouter = Router();

const UserCtrl = new UserControllers();
const UserVal = new UserValidation();

usersRouter.post('/', UserVal.validateUser, UserCtrl.create);

export default usersRouter;