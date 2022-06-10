import { NextFunction, Request, Response } from 'express';
import { httpStatus } from '../helpers';
import userSchema from '../schemas/userSchema';
import { IUser } from '../interfaces';

class UserValidation {
  SCHEMA;

  constructor() {
    this.SCHEMA = userSchema;
  }

  public validateUser = async (req: Request, res: Response, next: NextFunction) => {
    const user: IUser = req.body;
    const { error } = await this.SCHEMA.validate(user);

    if (error) {
      if (error.message.includes('required')) {
        next({ status: httpStatus.BAD_REQUEST, message: error.message });
      } else {
        next({ status: httpStatus.UNPROCESSABLE, message: error.message });
      }
    }
    next();
  };
}

export default UserValidation;