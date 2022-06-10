import { Pool } from 'mysql2/promise';
import { ResultSetHeader } from 'mysql2'; // Interface from mysql2 that includes the insertId
import { Iproduct } from '../interfaces';
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

  public async create(name: string, amount: string) {
    const [{ insertId }] = await this.connection
      .execute<ResultSetHeader>(queries.createProduct, [name, amount]);
    return insertId;
  }
}

export default ProductsModel;