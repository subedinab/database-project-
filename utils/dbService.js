const MySql = require("./database");

class DBInstance {
  constructor(tableName) {
    this.tableName = tableName;
  }
  async insertData(data) {
    try {
      const query = `insert into ${this.tableName} set ?`;
      const response = await MySql.query(query, data);
      return response[0];
    } catch (err) {
      throw Error(err);
    }
  }
  async getAllData() {
    try {
      const query = `select  * from ${this.tableName};`;
      const response = await MySql.query(query);
      return response[0];
    } catch (err) {
      throw Error(err);
    }
  }
  async getById(id) {
    try {
      const query = `select  * from ${this.tableName} where id=${id};`;
      const response = await MySql.query(query);
      return response[0];
    } catch (err) {
      throw Error(err);
    }
  }

  async updateDataById(id, data) {
    try {
      const query = `update ${this.tableName} set ? where id=${id}`;
      const response = await MySql.query(query, data);
      return response[0];
    } catch (err) {
      throw Error(err);
    }
  }

  async deleteDataById(id) {
    try {
      const response = await MySql.query(
        `delete from ${this.tableName} where id=${id}`
      );

      return response[0];
    } catch (err) {
      throw Error(err);
    }
  }
}

module.exports = DBInstance;
