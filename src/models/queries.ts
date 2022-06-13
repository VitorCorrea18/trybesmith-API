const queries = {
  getAllProducts: 'SELECT * FROM Trybesmith.Products;',
  createProduct: 'INSERT INTO Trybesmith.Products (name, amount) VALUES(?,?);',
  createUser: 'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES(?,?,?,?);',
  getAllOrders: 'SELECT * FROM Trybesmith.Orders;',
  getOrderProducts: `
    SELECT GROUP_CONCAT(id) as ids
    FROM Trybesmith.Products WHERE orderId = ?`, // https://stackoverflow.com/questions/3812864/concat-the-output-of-the-subquery
  getUserByName: 'SELECT * FROM Trybesmith.Users WHERE username = ?;',
};

export default queries;
