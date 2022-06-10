import { NextFunction, Request, Response } from 'express';
import { ProductsServices } from '../services';
import { httpStatus } from '../helpers';
import { Iproduct } from '../interfaces';

class ProductsController {
  constructor(private service = new ProductsServices()) {} // atention private

  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.service.getAll();
      return res.status(httpStatus.OK).json(result);
    } catch (err) {
      next(err);
    }
  };

  public create = async (req: Request, res: Response, next: NextFunction) => {
    const { name, amount } = req.body;
    try {
      const result:Iproduct = await this.service.create(name, amount);
      return res.status(httpStatus.CREATED).json(result);
    } catch (err) {
      next(err);
    }
  };
}

export default ProductsController;