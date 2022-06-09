import Iproduct from '../interfaces';
import { connection, ProductsModel } from '../models';

class ProductsServices {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async getAll(): Promise<Iproduct[]> {
    const products = await this.model.getAll();

    return products;
  }
}

export default ProductsServices;