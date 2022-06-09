import { Pool } from 'mysql2/promise';
import Iproduct from '../interfaces';
import queries from './queries';

class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Iproduct[]> {
    const [products] = await this.connection.execute(queries.getAllProducts);
    return products as Iproduct[];
  }
}

export default ProductsModel;