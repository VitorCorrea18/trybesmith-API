import { NextFunction, Request, Response } from 'express';
import { httpStatus, messages } from '../helpers';
import { IUser, IDecoded } from '../interfaces';
import userSchema from '../schemas/userSchema';
import LoginSchema from '../schemas/loginSchema';
import { JWT } from '../utils';
import { UserServices } from '../services';
// import IDecoded from '../interfaces/decodedInterface';

class UserValidation {
  USER_SCHEMA;

  LOGIN_SCHEMA;

  userServices: UserServices;

  jwt:JWT;

  constructor() {
    this.USER_SCHEMA = userSchema;
    this.LOGIN_SCHEMA = LoginSchema;
    this.jwt = new JWT();
    this.userServices = new UserServices();
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

  public validateLoggedUser = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (!token) {
      const error = { status: httpStatus.UNAUTHORIZED, message: messages.TOKEN_NOT_FOUND };
      next(error);
    } else {
      const decoded = this.jwt.decodeToken(token);
      const { data } = decoded as IDecoded;
      const [user] = await this.userServices.getUserByName(data.username);
      req.body.userId = user.id;
    }
    next();
  };
}

export default UserValidation;