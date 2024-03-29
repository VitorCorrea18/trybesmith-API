import { NextFunction, Request, Response } from 'express';
import { httpStatus } from '../helpers';
import { Iproduct } from '../interfaces';
import productSchema from '../schemas/productSchema';

class ProductValidation {
  SCHEMA;

  constructor() {
    this.SCHEMA = productSchema;
  }

  public validateProduct = async (req: Request, res: Response, next: NextFunction) => {
    const product: Iproduct = req.body;
    const { error } = this.SCHEMA.validate(product);
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

export default ProductValidation;
