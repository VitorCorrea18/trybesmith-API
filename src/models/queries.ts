const queries = {
  getAllProducts: 'SELECT * FROM Trybesmith.Products;',
  createProduct: 'INSERT INTO Trybesmith.Products (name, amount) VALUES(?,?);',
  createUser: 'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES(?,?,?,?);',
};

export default queries;
