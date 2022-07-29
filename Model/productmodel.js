const MySql = require("../utils/database");
const Db = require("../utils/dbService");

class Product extends Db {
  constructor(tableName) {
    super(tableName);
  }
}

module.exports = new Product("product");
