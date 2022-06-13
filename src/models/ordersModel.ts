import { Pool } from 'mysql2/promise';
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
}

export default OrdersModel;
