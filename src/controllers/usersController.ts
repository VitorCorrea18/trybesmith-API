import { NextFunction, Request, Response } from 'express';
import { UserServices } from '../services';
import { httpStatus } from '../helpers';
import { IUser, IToken } from '../interfaces';

class UserControllers {
  services: UserServices;

  constructor() {
    this.services = new UserServices();
  }

  public async create(req: Request, res: Response, next: NextFunction) {
    const newUser:IUser = req.body;
    try {
      const result:IToken = await this.services.create(newUser);
      return res.status(httpStatus.CREATED).json(result);
    } catch (err) {
      next(err);
    }
  }
}

export default UserControllers;