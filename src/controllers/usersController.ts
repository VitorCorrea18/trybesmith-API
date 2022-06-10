import { NextFunction, Request, Response } from 'express';
import { UserServices } from '../services';
import { httpStatus } from '../helpers';
import { IUser, IToken } from '../interfaces';

class UserControllers {
  constructor(private service = new UserServices()) {}

  public create = async (req: Request, res: Response, next: NextFunction) => {
    const newUser:IUser = req.body;
    try {
      const result:IToken = await this.service.create(newUser);
      return res.status(httpStatus.CREATED).json(result);
    } catch (err) {
      next(err);
    }
  };
}

export default UserControllers;