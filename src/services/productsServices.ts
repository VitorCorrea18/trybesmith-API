import { Iproduct } from '../interfaces';
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

  public async create(name:string, amount:string) {
    const id:number = await this.model.create(name, amount);
    const newProduct:Iproduct = { id, name, amount };
    return newProduct;
  }
}

export default ProductsServices;