import { NextFunction, Request, Response } from 'express';
import { httpStatus } from '../helpers';
import { INewOrder } from '../interfaces';
import orderSchema from '../schemas/orderSchema';

class ValidateOrder {
  SCHEMA;

  constructor() {
    this.SCHEMA = orderSchema;
  }

  public validateOrder = async (req: Request, _res: Response, next: NextFunction) => {
    const newOrder:INewOrder = req.body;
    const { error } = this.SCHEMA.validate(newOrder);

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

export default ValidateOrder;