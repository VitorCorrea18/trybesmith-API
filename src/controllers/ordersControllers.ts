import { NextFunction, Request, Response } from 'express';
import { OrderServices } from '../services';
import { httpStatus } from '../helpers';
import { IOrder, IOrderCreated } from '../interfaces';

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

  public create = async (req: Request, res: Response, next: NextFunction) => {
    const { userId, productsIds } = req.body;
    try {
      const result: IOrderCreated = await this.services.create(userId, productsIds);
      return res.status(httpStatus.CREATED).json(result);
    } catch (err) {
      next(err);
    }
  };
}

export default OrderControllers;