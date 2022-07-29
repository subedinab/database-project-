const MySql = require("../utils/database");
const Db = require("../utils/dbService");

class cart extends Db {
  constructor(tableName) {
    super(tableName);
  }
  async findData(id) {
    try {
      const query = `select * from  ${this.tableName} where product_id=${id}`;
      const response = await MySql.query(query);
      return response[0];
    } catch (err) {
      throw Error(err);
    }
  }
}

module.exports = new cart("cart");
