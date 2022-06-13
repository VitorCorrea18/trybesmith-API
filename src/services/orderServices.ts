import { connection, OrdersModel, ProductsModel } from '../models';
import { IOrder } from '../interfaces';

class OrderServices {
  public orderModel: OrdersModel;

  public productModel: ProductsModel;

  constructor() {
    this.orderModel = new OrdersModel(connection);
    this.productModel = new ProductsModel(connection);
  }

  public async getAll(): Promise<IOrder[]> {
    const orders = await this.orderModel.getAllOrders();
    const result = Promise.all(orders.map(async (order: IOrder) => {
      const orderProducts = await this.productModel.getByOrderProducts(order.id);
      // https://github.com/tryber/sd-017-project-trybesmith/pull/30/commits/e6dde3a1c451415d58549a2c8bbd79faccadeb45
      const arrayIds = orderProducts[0].ids.split(',');
      const productsIds = arrayIds.map((id) => Number(id));
      console.log(productsIds);
      return { ...order, productsIds };
    }));
    return result;
  }
}

export default OrderServices;