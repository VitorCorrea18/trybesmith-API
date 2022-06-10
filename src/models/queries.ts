const queries = {
  getAllProducts: 'SELECT * FROM Trybesmith.Products;',
  createProduct: 'INSERT INTO Trybesmith.Products (name, amount) VALUES(?,?);',
};

export default queries;
