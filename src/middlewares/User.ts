import { NextFunction, Request, Response } from 'express';
import { httpStatus } from '../helpers';
import { IUser } from '../interfaces';
import userSchema from '../schemas/userSchema';
import LoginSchema from '../schemas/loginSchema';

class UserValidation {
  USER_SCHEMA;

  LOGIN_SCHEMA;

  constructor() {
    this.USER_SCHEMA = userSchema;
    this.LOGIN_SCHEMA = LoginSchema;
  }

  public validateUser = (req: Request, res: Response, next: NextFunction) => {
    const user: IUser = req.body;
    const { error } = this.USER_SCHEMA.validate(user);

    if (error) {
      if (error.message.includes('required')) {
        next({ status: httpStatus.BAD_REQUEST, message: error.message });
      } else {
        next({ status: httpStatus.UNPROCESSABLE, message: error.message });
      }
    }
    next();
  };

  public validateLogin = (req: Request, res: Response, next: NextFunction) => {
    const { error } = this.LOGIN_SCHEMA.validate(req.body);

    if (error) {
      next({ status: httpStatus.BAD_REQUEST, message: error.message });
    }
    next();
  };
}

export default UserValidation;