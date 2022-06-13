import { NextFunction, Request, Response } from 'express';
import { OrderServices } from '../services';
import { httpStatus } from '../helpers';
import { IOrder } from '../interfaces';

class OrderControllers {
  constructor(private services = new OrderServices()) {} // atention private

  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result: IOrder[] = await this.services.getAll();
      return res.status(httpStatus.OK).json(result);
    } catch (err) {
      next(err);
    }
  };
}

export default OrderControllers;