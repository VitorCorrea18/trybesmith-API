import { Pool } from 'mysql2/promise';
import { ResultSetHeader } from 'mysql2';
import { IOrder } from '../interfaces';
import queries from './queries';

class OrdersModel {
  public connection:Pool;

  constructor(connection:Pool) {
    this.connection = connection;
  }

  public async getAllOrders(): Promise<IOrder[]> {
    const [orders] = await this.connection.execute(queries.getAllOrders);
    return orders as IOrder[];
  }

  public async createOrder(id: number) {
    const [{ insertId }] = await this.connection
      .execute<ResultSetHeader>(queries.createOrder, [id]);
    return insertId;
  }
}

export default OrdersModel;
